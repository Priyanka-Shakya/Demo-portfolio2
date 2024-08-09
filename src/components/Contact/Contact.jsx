import React from 'react';

import {getImageUrl} from '../../utils';
import styles from './Contact.module.css';

function Contact() {
    return (
        <footer id='contact' className={styles.container}>
            <div  className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt='Email icon'/>
                    <a href='mailto:priyankashakya1404@gmail.com'>priyankashakya1404@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn icon'/>
                    <a href='mailto:priyankashakya1404@gmail.com'>linkedin.com/Priyanka Shakya</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt='Github icon'/>
                    <a href='mailto:priyankashakya1404@gmail.com'>github.com/ Priyanka Shakya</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact;
