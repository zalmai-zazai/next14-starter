import Image from 'next/image';
import React from 'react';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>

        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better.
          Sunt iste iusto repellat qui ducimus praesentium illo nihil accusamus
          sequi perspiciatis? Eveniet accusantium odio tempora exercitationem
          expedita numquam ratione dolorem rerum.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experiance</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experiance</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experiance</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={'/about.png'} alt="aboutImage" fill />
      </div>
    </div>
  );
};

export default AboutPage;
