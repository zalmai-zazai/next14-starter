"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import connectDB from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState, fromData) => {
  //   const title= fromData.get('title')
  //   const desc= fromData.get('desc')
  //   const slug= fromData.get('slug')

  const { title, desc, slug, userId } = Object.fromEntries(fromData);
  try {
    connectDB;
    const newPost = Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Post Inserted to Db!");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somthing went Wrong!" };
  }
};

export const deletePost = async (fromData) => {
  //   const title= fromData.get('title')
  //   const desc= fromData.get('desc')
  //   const slug= fromData.get('slug')

  const { id } = Object.fromEntries(fromData);
  try {
    await connectDB;

    await Post.findByIdAndDelete(id);
    console.log("Post Deleted!");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somthing went Wrong!" };
  }
};

export const addUser = async (prevState, fromData) => {
  const { username, email, password, img } = Object.fromEntries(fromData);
  try {
    connectDB;
    const newPost = User({
      username,
      email,
      password,
      img,
    });

    await newPost.save();
    console.log("User Inserted to Db!");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somthing went Wrong!" };
  }
};
export const deleteUser = async (fromData) => {
  const { id } = Object.fromEntries(fromData);
  try {
    connectDB;
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User Deleted!");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somthing went Wrong!" };
  }
};

export const handelGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handelLogout = async () => {
  "use server";

  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Password dosen't match" };
  }
  try {
    await connectDB();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("user inserted");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    // await signIn("credentials", { username, password, redirect: false }); redirect prvent from default behavior
    await signIn("credentials", { username, password });
  } catch (err) {
    // console.log("This is the errorrrr", err.message);

    if (err.message.includes("credentialssignin")) {
      return { error: "Wrong Username or password!" };
    }
    // return { error: "Somthing went wrong" };
    // }
    throw err;
  }
};
