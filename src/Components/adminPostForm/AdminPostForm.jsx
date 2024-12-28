"use client";
import React from "react";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";
const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Slug" name="slug" />
      <input type="text" placeholder="Image" name="img" />
      <textarea type="text" placeholder="Description" name="desc" rows={10} />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
