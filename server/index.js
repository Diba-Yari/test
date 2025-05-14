const express = require("express");

const mongoose = require("mondoose");

const dotenv = require("dotenv");

const facultyRoutes = require("./routes/faculty.routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/member", facultyRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connect to DB");

    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => console.error(err));
