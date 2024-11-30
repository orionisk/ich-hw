import mongoose from 'mongoose';

const publisherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export const Publisher = mongoose.model('Publisher', publisherSchema);
