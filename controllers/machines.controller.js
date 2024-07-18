import Machines from "../database/models/machine.model.js";

export const getMachines = async (req, res, next) => {
  try {
    const machines = await Machines.find();
    res.status(200).json({
      success: true,
      data: machines,
    });
  } catch (err) {
    next(err);
  }
};

export const createMachine = async (req, res, next) => {
  try {
    let machine = null;

    if (req.body?.length) {
      machine = await Machines.insertMany(req.body);
    } else {
      machine = await Machines.create(req.body);
    }
    
    res.status(200).json({
      success: true,
      data: machine,
    });
  } catch (error) {
    next(error);
  }
};

export const updateMachine = async (req, res, next) => {
  try {
    const machine = await Machines.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );

    if (!machine) {
      res.status(404).json({
        success: false,
        message: "Waching Machine not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: machine,
    });
  } catch (error) {
    next(error);
  }
};
