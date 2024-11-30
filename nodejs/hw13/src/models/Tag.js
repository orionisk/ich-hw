import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
      }
    ]
  },
  { timestamps: true }
);

export const Tag = mongoose.model('Tag', tagSchema);
