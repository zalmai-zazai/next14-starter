import { Post } from "@/lib/models";
import connectDB from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch posts!");
  }
};
