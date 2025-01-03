import RegisterForm from "@/Components/registerForm/RegisterForm";
import styles from "./register.module.css";
import React from "react";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
