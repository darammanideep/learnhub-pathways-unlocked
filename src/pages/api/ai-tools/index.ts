
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import AITool from '@/models/AITool';
import UserUnlock from '@/models/UserUnlock';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
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

    // Get all AI tools
    const allTools = await AITool.find({ isActive: true });
    
    // Get user's unlocked tools
    const unlockedTools = await UserUnlock.find({ userId: user._id });
    const unlockedToolIds = unlockedTools.map(unlock => unlock.toolId);

    // Categorize tools
    const toolsWithStatus = allTools.map(tool => ({
      ...tool.toObject(),
      isUnlocked: unlockedToolIds.includes(tool.id),
      unlockedAt: unlockedTools.find(u => u.toolId === tool.id)?.unlockedAt
    }));

    res.status(200).json({ tools: toolsWithStatus });
  } catch (error) {
    console.error('Error fetching AI tools:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
