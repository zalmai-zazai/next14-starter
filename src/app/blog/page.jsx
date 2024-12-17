import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/Components/postCard/PostCard';
import TestComponent from '@/Components/TestComponent';
// import { getPosts } from '@/lib/data.js';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new error('Error fetching data');
  }
  return res.json();
};

const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();

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
