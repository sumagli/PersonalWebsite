import React from 'react';
import styles from './Home.module.css';
import LandingPageImage from "./LandingPage.jpg"

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.blurBackground} style={{ backgroundImage: `url(${LandingPageImage})` }}></div>
            <h1>Welcome to our Watchmaker's Site</h1>
            <p>Explore our exquisite collection of handcrafted watches.</p>
        </div>
    );
}
