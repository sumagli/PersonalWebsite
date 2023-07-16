import React from 'react';
import styles from './CW.module.css';

export default function CW() {
    return (
        <div className={styles.CWContainer}>
            <div className={styles.Leftsidebar}>
                <div className={styles.SidbarHeader}>
                    <h2>Personal Information</h2>
                    <p>Stuttgart, Germany</p>
                    <p>benediktschwaegerl@gmail.com</p>
                </div>
                <div className={styles.SidbarBody}>
                    <h2>Core Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Springboot</li>
                        <li>.Net Core</li>
                        <li>SRUM</li>
                        <li>CSS</li>
                        <li>SQL</li>
                        <li>Git</li>
                    </ul>
                </div>

            </div>

            <div className={styles.MainContent}>
                <div className={styles.TopSection}>
                    <h1>Benedikt Schwägerl</h1>
                    <h2>Student / Intern</h2>
                </div>


                <div className={styles.Scools}>
                    <h2>Education</h2>

                    <h3>Hochschule der Medien - University student / May 2021 - Present</h3>
                    <p>I am currently studying media informatics at the Media University (HdM) in Stuttgart. In the first two semesters of my undergraduate studies, I took a wide range of subjects, including software development, mathematics, web development and digital media technology, and was able to achieve excellent grades in most subjects. </p>
                    <p>I am particularly proud of my achievements in programming. I was able to achieve the top mark of 1.0 in "Software Development 1", "Software Development 2" and "Software Development 3", which underlines my skills and my passion for programming. This is also reflected in my outstanding performance in the "Software Project", where I also achieved a 1.0. </p>
                    <p>I am currently in my main studies, where I continue to get excellent grades and continue to expand my skills in areas such as theoretical computer science, algorithms and data structures and IT security.</p>

                    <h3>it.schule Stuttgart - Student / May 2017 - June 2020</h3>
                    <p>At the IT.Schule Stuttgart, a technical high school with a strong focus on computer science, I had the opportunity to complete my Abitur and build a solid foundation of technical skills.</p>
                    <p>In addition to the traditional majors such as mathematics, German and history, I received intensive training in computer science, which was an integral part of the curriculum. With eight hours of computer science lessons per week, we were intensively prepared for the challenges of the digital age. This in-depth knowledge enabled me to excel verbally in programming and secured a strong background in the field.</p>
                    <p>My time at the IT.Schule Stuttgart sparked my passion for technology and computer science and inspired me to continue my career in this exciting and ever-changing field.</p>

                    <hr />
                </div>

                <div className={styles.WorkExperience}>
                    <h2>Working Experience</h2>

                    <h3>Dymatrix - Internship / May 2023 - Present</h3>
                    <p>As an intern at Dymatrix, a renowned IT company, I have the opportunity to gain practical experience in the role of a full stack developer and to apply the knowledge I have acquired from studying media informatics in practice.</p>
                    <p>In a six-month internship, I not only develop myself technically, but also learn how agile working methods are implemented in a real business environment. At Dymatrix we work according to the Scrum methodology, which allows us to work in iterative processes and constantly optimize product development.</p>
                    <p>As part of the development team, I am involved in the entire development cycle - from conception to development to testing. For backend development we mainly use C# while React is our first choice for frontend.</p>
                    <p>This internship allowed me to acquire valuable skills and deepen my existing knowledge in different technologies. It has also inspired me to constantly seek improvements, explore new solutions and embrace the challenges of the digital world.</p>
                    <p>I am grateful for this great opportunity to start my professional career at Dymatrix, where I have the freedom to learn, grow while realizing real projects that make a difference.</p>

                    <h3>Nickolauspflege - FSJ / August 2020 - February 2021</h3>
                    <p>During my voluntary social year (FSJ) at Nikolauspflege, a renowned competence center for blind and visually impaired people, I was able to take on an important and fulfilling role. Here I mainly focused on supporting the basic training in blind technology, where I gained valuable insight into the specific challenges and successes in this area.</p>
                    <p>In my role I was responsible for driving services for the participants, keyboard training and supporting teachers as part of the basic training. In addition, I conducted in-depth lessons in Braille and supported individual learning support in German and IT basics. I also took on general administrative tasks and worked with Excel spreadsheets and macros.</p>
                    <p>The FSJ was a valuable opportunity to expand my social and professional skills and I am proud of the support and contribution I was able to make during this time. It was an experience that greatly increased my understanding and appreciation of working with visually impaired people.</p>
                </div>
            </div>

        </div>
    );
}
