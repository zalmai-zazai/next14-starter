import React, { Suspense } from "react";
import style from "./admin.module.css";
import AdminPosts from "@/Components/adminPosts/AdminPosts";
import AdminPostForm from "@/Components/adminPostForm/AdminPostForm";
import AdminUsers from "@/Components/adminUsers/AdminUsers";
import AdminUserForm from "@/Components/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";
const AdminPage = async () => {
  const session = await auth();
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.col} id="adminPosts">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={style.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>

      <div className={style.row}>
        <div className={style.col} id="adminUsers">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={style.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
