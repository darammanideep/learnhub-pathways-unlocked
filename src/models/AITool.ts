
import mongoose from 'mongoose';

const AIToolSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // 'module-completion', 'course-completion'
  unlockCondition: {
    type: { type: String, required: true }, // 'module', 'streak', 'course'
    value: { type: String, required: true } // moduleId or 'complete'
  },
  toolType: { type: String, required: true }, // 'interview-kit', 'resume-builder', etc.
  content: {
    downloadUrl: String,
    embedUrl: String,
    instructions: String,
    apiEndpoint: String
  },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.models.AITool || mongoose.model('AITool', AIToolSchema);
