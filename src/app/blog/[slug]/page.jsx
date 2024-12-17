import React, { Suspense } from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/Components/postUser/PostUser';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new error('Error fetching data');
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          className={styles.img}
          src={
            'https://images.pexels.com/photos/5507254/pexels-photo-5507254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          alt="blog image"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            height={50}
            width={50}
            alt="avtar image"
            className={styles.avatar}
            src={
              'https://images.pexels.com/photos/5507254/pexels-photo-5507254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          />
          <Suspense fallback={<div>Loadding ...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
