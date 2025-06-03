
import mongoose from 'mongoose';

const UserUnlockSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  toolId: { type: String, required: true },
  unlockedAt: { type: Date, default: Date.now },
  usageCount: { type: Number, default: 0 }
}, {
  timestamps: true
});

UserUnlockSchema.index({ userId: 1, toolId: 1 }, { unique: true });

export default mongoose.models.UserUnlock || mongoose.model('UserUnlock', UserUnlockSchema);
