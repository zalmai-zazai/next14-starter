import { Post, User } from "./models";
import connectDB from "./utils";
import { unstable_noStore as noStore } from "next/cache";

const users = [
  { id: 1, name: "Ahmad" },
  { id: 2, name: "Mahmood" },
];
const posts = [
  { id: 1, title: "Post 1", body: ".....", userId: 1 },
  { id: 2, title: "Post 2", body: ".....", userId: 1 },
  { id: 3, title: "Post 3", body: ".....", userId: 2 },
  { id: 4, title: "Post 4", body: ".....", userId: 2 },
];

export const getPosts = async () => {
  // return posts;
  try {
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Faild Fetching data");
  }
};

export const getPost = async (slug) => {
  // return posts.find((post) => post.id === parseInt(slug));
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Faild Fetching data");
  }
};

// export const getUser = async (id) => {
//   // return users.find((user) => user.id === parseInt(id));
//   noStore();
//   try {
//     connectDB();
//     const user = await User.findById({ id });
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Faild Fetching data");
//   }
// };
export const getUser = async (id) => {
  noStore();
  try {
    await connectDB(); // Ensure the database connection
    const user = await User.findById(id); // Correct querying method
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed Fetching data");
  }
};

export const getUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faild Fetching data");
  }
};
