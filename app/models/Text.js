import mongoose, { Schema } from "mongoose";

const TextSchema = new Schema({
  textId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 20,
  },
});

const Text = mongoose.models.Text || mongoose.model("Text", TextSchema);

export default Text;
