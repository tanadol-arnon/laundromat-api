import express from "express";
import {
  createMachine,
  getMachines,
  updateMachine,
} from "../controllers/machines.controller.js";

const router = express.Router();

router.get("/", getMachines);
router.post("/create", createMachine);
router.put("/:id", updateMachine);

export default router;
