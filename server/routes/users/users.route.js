import express from "express";
import {
  createUser,
  getUsers,
  //getUser,
  //updateUser,
  //deleteUser,
} from "./users.controller.js";

const router = express.Router();

router.get("/", getUsers)
router.post("/", createUser)

// router.get("/:username", getUser);
// router.patch("/:username", updateUser);

export default router;
// app.post("/api/users", (req, res) => {
//   console.log("Received data:", req.body);
//   res.json({ message: "Cheers for the data, mate!", yourData: req.body });
// });
