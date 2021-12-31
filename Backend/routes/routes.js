const express = require("express");
const router = express.Router();
const mySchemas = require("../model/model");
const {User, BlogPost} = mySchemas;


// get requests.

router.get('/home', (req,res) => {
  res.render('/')
});

router.get('/bloghome/user', (req,res) => {
  res.render('/bloghome/user')
});
router.get('/about', (req,res) => {
  res.render('/about')
});

router.get("/api/users", async (req,res) => {
  const Users = await User.find({})
  try {
    res.send(Users)
  } catch (err) {
    console.log("Could not fetch users from database", err);
  }
});

router.get("/api/blogposts", async (req, res) => {
  const BlogPosts = await BlogPost.find({})
  try {
    res.send(BlogPosts)
  } catch (err) {
    console.log("Could not fetch blogs from database", err);
  }
});

router.get("/blog/:slug", async (req, res) => {
  res.render('/blog/:slug')
  
});


// post requests 

router.post("/api/users", (req, res) => {
  const Users = new User({
    name: req.body.name,
    email: req.body.email,
    pwd: req.body.email
  })
  Users.save();
  res.send(Users);
});


router.post("/blog/post", (req,res) => {
  const BlogPosts = new BlogPost({
    title: req.body.title,
    description: req.body.description,
    markdownText: req.body.markdown,
  })
  BlogPosts.save();
  res.send(BlogPosts)
});


module.exports = router;