"use client";
import React, { useEffect } from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginFrom = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />

      <input type="password" placeholder="password" name="password" />

      <button>Login</button>
      {state?.error}
      <Link href={"/register"}>
        {" "}
        {" Don't have an account? "}
        <b>Signup</b>
      </Link>
    </form>
  );
};

export default LoginFrom;
