import mongoose from "mongoose";

const MachineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    endTime: {
      type: Date,
      default: null,
    },
    sendMessage: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Machines = mongoose.model("Machines", MachineSchema);

export default Machines;
