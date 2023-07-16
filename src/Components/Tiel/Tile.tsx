import React from "react";
import { Link } from "react-router-dom";
import styles from './Tile.module.css';

export default function Tile(props: any) {
    const sectionClass = props.isUniProject ? styles.uniProjects : styles.ownProjects;

    return (
        <div className={`${styles.card} ${sectionClass}`}>
            <Link to={`/Project/${props.title}`} className={styles.link}>
                <div className={styles.imageWrapper}>
                    <img src={require(`./Sources/${props.coverImg}`)} alt={props.title} />
                </div>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.description}>{props.description}</p>
            </Link>
        </div>
    );
}
