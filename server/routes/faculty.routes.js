import express from "express";
import {
  getAllFacultyMembers,
  addFacultyMember,
  deleteFacultyMember,
  updateFacultyMember,
} from "../controllers/faculty.controller.js";

const router = express.Router();

router.get("/", getAllFacultyMembers);
router.post("/", addFacultyMember);
router.delete("/:id", deleteFacultyMember);
router.patch("/:id", updateFacultyMember); // optional

export default router;
