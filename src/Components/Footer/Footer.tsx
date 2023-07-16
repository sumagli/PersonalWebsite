import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <a href="www.linkedin.com/in/benedikt-schwägerl-137a99283" target="_blank" rel="noopener noreferrer">LinkedIn </a>
        <a href="/impressum">Impressum</a>
      </div>
    </div>
  );
}
