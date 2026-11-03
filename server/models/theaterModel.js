import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Theater = mongoose.model("Theater", theaterSchema);

export default Theater;
