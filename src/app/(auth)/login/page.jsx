import { handelGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import React from "react";
import LoginFrom from "@/Components/loginForm/LoginFrom";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handelGithubLogin}>
          <button className={styles.github}>
            <Image src={"/github.png"} alt="" width={110} height={40} />
          </button>
        </form>
        <LoginFrom />
      </div>
    </div>
  );
};

export default LoginPage;
