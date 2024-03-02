import Post from '../models/Posts.js';

const createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

export default { createPost };
