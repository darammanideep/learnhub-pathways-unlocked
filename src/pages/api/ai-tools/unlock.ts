
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Progress from '@/models/Progress';
import AITool from '@/models/AITool';
import UserUnlock from '@/models/UserUnlock';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    await connectDB();
    
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { moduleId } = req.body;

    // Check if module is completed
    const progress = await Progress.findOne({ userId: user._id, moduleId });
    if (!progress || progress.completedTasks.length < 7) {
      return res.status(400).json({ message: 'Module not completed' });
    }

    // Find tools to unlock for this module
    const toolsToUnlock = await AITool.find({
      'unlockCondition.type': 'module',
      'unlockCondition.value': moduleId,
      isActive: true
    });

    const newUnlocks = [];
    for (const tool of toolsToUnlock) {
      try {
        const unlock = new UserUnlock({
          userId: user._id,
          toolId: tool.id
        });
        await unlock.save();
        newUnlocks.push(tool);
      } catch (error) {
        // Tool already unlocked, skip
        console.log(`Tool ${tool.id} already unlocked for user ${user._id}`);
      }
    }

    // Check for course completion tools
    const totalModulesCompleted = await Progress.countDocuments({
      userId: user._id,
      completedTasks: { $size: 7 }
    });

    if (totalModulesCompleted === 6) {
      const courseCompletionTools = await AITool.find({
        'unlockCondition.type': 'course',
        'unlockCondition.value': 'complete',
        isActive: true
      });

      for (const tool of courseCompletionTools) {
        try {
          const unlock = new UserUnlock({
            userId: user._id,
            toolId: tool.id
          });
          await unlock.save();
          newUnlocks.push(tool);
        } catch (error) {
          // Tool already unlocked
        }
      }
    }

    res.status(200).json({ 
      message: 'Tools unlocked successfully', 
      unlockedTools: newUnlocks 
    });
  } catch (error) {
    console.error('Error unlocking tools:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
