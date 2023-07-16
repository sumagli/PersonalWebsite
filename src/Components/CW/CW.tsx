import React from 'react';
import styles from './CW.module.css';

export default function CW() {
    return (
        <div className={styles.CWContainer}>
            <div className={styles.CWContent}>
                <h1>Willkommen auf der CW-Seite!</h1>
                <p>Hallo, mein Name ist Max und ich bin 50 Jahre alt.</p>
                <p>Ich interessiere mich für Reisen, Fotografie und Wandern.</p>
                <h2>Einige meiner Hobbys:</h2>
                <ul>
                    <li>Reisen und neue Orte entdecken</li>
                    <li>Wandern in der Natur</li>
                    <li>Fotografie, besonders Landschaftsfotografie</li>
                    <li>Kochen und neue Rezepte ausprobieren</li>
                </ul>
            </div>
        </div>
    );
}
