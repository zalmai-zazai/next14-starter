import React from 'react';
import styles from './postUser.module.css';

const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new error('Error fetching data');
  }
  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);

  return (
    <div className={styles.container}>
      <span className={styles.author}>Author</span>
      <span className={styles.user}>{user.username}</span>
    </div>
  );
};

export default PostUser;
