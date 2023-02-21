const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/add", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newPost = new Post({
      name,
      email,
      phone,
    });
    const post = await newPost.save();
    res.json({ msg: "post added", post });
  } catch (error) {
    console.log(error);
  }
});

//
//
//
router.get("/", async (req, res) => {

  try {
    const posts = await Post.find();
    res.json({ msg: "data fetched", posts });
  } catch (error) {
    console.log(error);
  }
});

//
//
//
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOneAndDelete({ _id: id });
    res.json({ msg: "post deleted", post });
  } catch (error) {
    console.log(error);
  }
});

//
//
//
router.put("/edit/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const post = await Post.findOneAndUpdate({ _id }, { $set: req.body });
    res.json({ msg: "post edited", post });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;