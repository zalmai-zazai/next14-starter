import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Zazai</div>
      <div className={styles.text}>
        zaz Creative thoughts agency @ All right reserved.
      </div>
    </div>
  );
};

export default Footer;
