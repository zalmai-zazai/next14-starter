import Link from 'next/link';
import React from 'react';
import Links from './links/Links';
import styles from '../navbar/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.log}>Logo</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
