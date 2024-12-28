import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/Components/postCard/PostCard";
import TestComponent from "@/Components/TestComponent";
import { getPosts } from "@/lib/data";

// import { getPosts } from '@/lib/data.js';

const getData = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
};

const BlogPage = async () => {
  //  * Fetch data with an API *//
  const posts = await getData();

  ///*** Fetch Data without API */
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      <TestComponent />
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
