import React from 'react';
import styles from './Home.module.css';


export default function Home() {
    return (
        <div className={styles.home}>
            <h1>Welcome to my portfolio!</h1>
            <h2>I'm Bene, a Software Developer.</h2>
            <p className={styles.homeText}>I have robust experience with with the folowing programming laguages C#, React, Java, and other related technologies, including HTML, CSS, and JavaScript.</p>
            <p className={styles.homeText}>I also have experince with Springboot and .Net Core.</p>
            <p className={styles.homeText}>This portfolio showcases a collection of projects that I've contributed to, both individually and as part of a team. Each project demonstrates my ability to solve complex problems and deliver efficient, reliable software solutions.</p>
            <p className={styles.homeText}>Currently, I am seeking a student job where I can apply and grow my skills while I continue my studies. If you're looking for a diligent and versatile developer to join your team, let's chat about how my skills can meet your needs.</p>
        </div>
    );
}

