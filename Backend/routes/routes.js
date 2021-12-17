const express = require("express");
const router = express.Router();
const {User, BlogPost} = require("../model/model");



router.get("/auth", async (req,res) => {
  res.render('/')
})
router.get('/new', (req,res) => {
  res.render('articles/new', { article: new Article()})
});

// login form routes

router.post("/api/users", async (req,res) => {
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

router.get("/api/users", async (req,res) => {
  const Users = await User.find({})
  try {
    res.send(Users)
  } catch (err) {
    console.log("Could not post to database", err);
  }
});

// blog post routes

router.get('/', (req,res) => {
  res.render('/blogs')
});

router.post('/blogpost', async (req,res) => {
  let blog = new BlogPost({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })
  
  try {
    blog = await blog.save();
    res.redirect("/")
  } catch (err) {
    console.log(err);
    
  }
});




module.exports = router;





