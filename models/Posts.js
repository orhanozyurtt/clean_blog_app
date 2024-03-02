import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: String,
  title: String,
  content: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
