import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Projekte">Projekte</a>
        </li>
        <li>
          <a href="/CW">CW</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
