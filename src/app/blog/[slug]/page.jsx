import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/Components/postUser/PostUser";
import { getPost } from "@/lib/data";

///*** Fetch Data With API */
const getData = async (slug) => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;

  //////** Fetch Data with Api */
  const post = await getData(slug);

  /////** Fetch Data without API */
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          className={styles.img}
          src={`${
            post.img
              ? post.img
              : "https://images.pexels.com/photos/5507254/pexels-photo-5507254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }`}
          alt="blog image"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loadding ...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
