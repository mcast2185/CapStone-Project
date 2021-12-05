const express = require("express");
const router = express.Router();
const User = require("../model/model");

router.get("/chatroom", async (req,res) => {
  try {
    res.render("/");
  } catch (err) {
    console.log("Could not redirect to page", err);
  }
});

router.post("/api/usercredentials", async (req,res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    pwd: req.body.email
  })
  try {
    await newUser.save();
    console.log(newUser);
  } catch (err) {
    console.log("Could not post to database", err);
  }
});
// router.get("/api/usercredentials", async (req,res) => {
//   const newUser = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     pwd: req.body.email
//   })
//   try {
//     await newUser.save();
//     console.log(newUser);
//   } catch (err) {
//     console.log("Could not post to database", err);
//   }
// });




module.exports = router;





