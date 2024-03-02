// blog site
import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
// import Post from './models/Posts.js';
//y
import postController from './controllers/postController.js';
import pagController from './controllers/pageController.js';
import pageController from './controllers/pageController.js';

const app = express();

const port = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost/blog_test');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', pagController.getHomePage);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post/:id', pagController.getPostDetail);

app.post('/addPost', postController.createPost);

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
