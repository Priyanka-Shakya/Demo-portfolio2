import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

function About() {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt='about Image' className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='cursor' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm Frontend Developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt=' server icon' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimised back-end systems and REST API's</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='coding' />
                        <div className={styles.aboutItemText}>
                            <h3>Competetive Programming</h3>
                            <p> I have good command in DSA by c++</p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default About;
