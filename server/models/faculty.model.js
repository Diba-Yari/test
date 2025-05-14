import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  exp: Number,
  type: String,
  qualification: String,
});

export default mongoose.model("Faculty", facultySchema);
