import React from 'react';
import styles from './Footer.module.css';
import CopyRight from '../Footer/Sources/CopyRight.png';
import LinkedIn from '../Footer/Sources/LinkedIn.png';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topPart}>
        <div className={styles.topLeft}>
          <h3>SAY HELLO</h3>
          <p>benediktschwaegerl@gmail.com</p>
        </div>

        <div className={styles.topRight}>
          <a href="/Projects">Projects</a>
          <a href="/CW">CW</a>
        </div>
      </div>
      <hr />
      <div className={styles.bot}>
        <div className={styles.botLeft}>
          <p><img src={CopyRight} alt="Copyright" /> Benedikt Schwägerl 2023</p>
          <a href="/Imprint">Imprint</a>
        </div>
        <div className={styles.botRight}>
          <a href="https://www.linkedin.com/in/benedikt-schwägerl-137a99283" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
