import mongoose from "mongoose";

const metadataSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    metadata: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Metadata = mongoose.models.Metadata || mongoose.model("Metadata", metadataSchema);
export default Metadata;