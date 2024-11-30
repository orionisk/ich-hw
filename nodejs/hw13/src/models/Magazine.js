import mongoose from 'mongoose';

const magazineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    issueNumber: {
      type: Number,
      required: true
    },
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Publisher',
      required: true
    }
  },
  { timestamps: true }
);

export const Magazine = mongoose.model('Magazine', magazineSchema);
