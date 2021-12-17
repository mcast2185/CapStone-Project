const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginInfo = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  }
});

const BlogPostField = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const User = mongoose.model("usercredentials", LoginInfo);
const BlogPost = mongoose.model("blogpost", BlogPostField)
const mySchemas = {'BlogPost': BlogPost, 'User': User}
module.exports = mySchemas;