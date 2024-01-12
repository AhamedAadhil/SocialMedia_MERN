import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      default: "Title",
      type: String,
      required: true,
    },
    description: {
      default: "Description",
      type: String,
      required: true,
    },
    startDate: Date,
    time: Date,
  },
  { timestamps: true }
);

const Events = mongoose.model("Events", eventSchema);
export default Events;
