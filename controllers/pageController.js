import Post from '../models/Posts.js';

const getHomePage = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts });
};

const getAboutPage = (req, res) => {
  res.render('about');
};

const getAddPostPage = (req, res) => {
  res.render('add_post');
};
const getPostDetail = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
};
export default { getHomePage, getAboutPage, getAddPostPage, getPostDetail };
