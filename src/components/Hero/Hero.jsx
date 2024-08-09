import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Priyanka Shakya</h1>
                <p className={styles.description}>I'm a Full Stack Developer with 5 years of experience in Nodejs, Reach Out if you'd like to learn more!!</p>
                <a href='mailto:priyankashakya1404@gmail.com' className={styles.contactBtn} >Contact me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt='hero image of me' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero;
