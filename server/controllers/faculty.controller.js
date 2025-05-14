import Faculty from "../models/faculty.model.js";

export const getAllFacultyMembers = async (req, res) => {
  try {
    const members = await Faculty.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export const addFacultyMember = async (req, res) => {
  try {
    const newMember = await Faculty.create(req.body);
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const deleteFacultyMember = async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

// (اختیاری) آپدیت
export const updateFacultyMember = async (req, res) => {
  try {
    const updated = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
};
