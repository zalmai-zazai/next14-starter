import { Post, User } from '../../lib/models';
import { connectDB } from '../../lib/utils';

export const getPosts = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Faild Fetching data');
  }
};

export const getPost = async (slug) => {
  try {
    connectDB();
    const post = await Post.find({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Faild Fetching data');
  }
};

export const getUser = async (id) => {
  try {
    connectDB();
    const user = await User.find(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Faild Fetching data');
  }
};

export const getUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Faild Fetching data');
  }
};
