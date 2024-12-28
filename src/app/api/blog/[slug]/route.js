import { Post } from "@/lib/models";
import connectDB from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const slug = params.slug;
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch post!");
  }
};
