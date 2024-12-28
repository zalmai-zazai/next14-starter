"use client";
import React from "react";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";
const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>

      <input type="text" placeholder="Title" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="text" placeholder="Image" name="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
