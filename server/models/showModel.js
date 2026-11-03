import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    theater: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theater",
      required: true,
    },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    totalSeats: { type: Number, required: true, min: 1 },
    availableSeats: { type: Number, required: true, min: 0 },
    ticketPrice: { type: Number, required: true, min: 0 },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Show = mongoose.Model("Show", showSchema);
export default Show;
