const express = require("express");
const router = express.Router();
const {User, BlogPost} = require("../model/model");


// simple get requests get requests. pages lack complex functionality

router.get('/home', (req,res) => {
  res.render('/')
});

router.get("/auth", async (req,res) => {
  res.render('/')
});

router.get('/bloghome/user', (req,res) => {
  res.render('/bloghome/user')
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
  const Blogs = await BlogPost.find({})
  try {
    res.send(Blogs)
  } catch (err) {
    console.log("Could not fetch blogs from database", err);
  }
})

router.get('/:slug', async (req, res) => {
  const Blogs = await BlogPost.findOne({slug: req.params.slug});
  if (Blogs == null) {
    res.redirect('/')
  } else {
    res.render('/bloghome/user', {Blogs})
  }
});


// post requests 


router.post("/api/users", async (req,res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    pwd: req.body.email
  })
  try {
    newUser = await newUser.save();
    res.send(newUser)
    console.log(newUser);
  } catch (err) {
    res.status(404).send("Could not post to database", err);
  }
});


router.post('/blog/post', async (req,res) => {
  const blog = new BlogPost({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
    createdAt
  })
  try {
    blog = await blog.save();
    // res.redirect("/")
  } catch (err) {
    res.status(404).send("Failed to post blog: ", err);
  }
});






module.exports = router;

// resulting url is determined by res.location(), so it will play nicely with mounted apps, relative paths,




