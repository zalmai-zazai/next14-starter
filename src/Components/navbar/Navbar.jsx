import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import styles from "../navbar/navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  // console.log(session);
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.log}>
        Logo
      </Link>
      <div className="">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
