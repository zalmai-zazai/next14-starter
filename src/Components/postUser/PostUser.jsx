import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new error("Error fetching data");
//   }
//   return res.json();
// };

// const PostUser = async ({ userId }) => {
//   // const user = await getData(userId);
//   const user = await getUser(userId);
//   console.log(user);

//   return (
//     <div className={styles.container}>
//       <Image
//         height={50}
//         width={50}
//         alt="avtar image"
//         className={styles.avatar}
//         src={`${user.img ? user.img : "/avatar.png"}`}
//       />
//       <div className={styles.texts}>
//         <span className={styles.author}>Author</span>
//         <span className={styles.user}>{user.username}</span>
//       </div>
//     </div>
//   );
// };

const PostUser = async ({ userId }) => {
  try {
    const user = await getUser(userId);

    return (
      <div className={styles.container}>
        <Image
          height={50}
          width={50}
          alt="avatar image"
          className={styles.avatar}
          src={`${user.img ? user.img : "/avatar.png"}`}
        />
        <div className={styles.texts}>
          <span className={styles.author}>Author</span>
          <span className={styles.user}>{user.username}</span>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load user:", error);
    return <div>Error loading user data.</div>;
  }
};

export default PostUser;
