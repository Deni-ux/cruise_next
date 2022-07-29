import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import cru1 from '../public/img/cru1.jpg'
import cru2 from '../public/img/cru2.jpg'
import cru3 from '../public/img/cru3.jpg'
import cru4 from '../public/img/cru4.jpg'



const About = () => {
    
  return (
      <div className={styles.about}>
          <h1>Adventures to have</h1>
      <div className={styles.grid}>
              <div className={styles.card}>
                  <Image src={cru1} alt="cruise" className={styles.img} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

              <div className={styles.card}>
                  <Image src={cru2} alt="cruise" className={styles.img} />
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>

          <div
            className={styles.card}
              >
                  <Image src={cru3} alt="cruise" className={styles.img} />
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div
            className={styles.card}
              >
                  <Image src={cru4} alt="cruise" className={styles.img} />
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div></div>
  )
}

export default About;

