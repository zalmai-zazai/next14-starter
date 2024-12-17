import Link from 'next/link';
import React from 'react';
import Links from './links/Links';
import styles from '../navbar/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.log}>
        Logo
      </Link>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
