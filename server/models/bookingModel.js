import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", requried: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    seats: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Booking = mongoose.Model("Booking", bookingSchema);
export default Booking;
