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
                  <h2>Celebrity Flora</h2>
                  <h4>7 Nights South America Criuse</h4>
                  <p>Sunday 11 Sept 2022</p>
                  <h3>£5500</h3>
          </div>

              <div className={styles.card}>
                  <Image src={cru2} alt="cruise" className={styles.img} />
                  <h2>Vision of the Seas</h2>
                  <h4>5 Nights Europe Criuse</h4>
            <p>Saturday 10 Sept 2022</p>
                  <h3>£700</h3>
          </div>

          <div
            className={styles.card}
              >
                  <Image src={cru3} alt="cruise" className={styles.img} />
            <h2>Celebrity Summit</h2>
            <h4>12 Nights North America Criuse</h4>
   <p>Monday 3 Sept 2022</p>
                  <h3>£640</h3>
          </div>

          <div
            className={styles.card}
              >
                  <Image src={cru4} alt="cruise" className={styles.img} />
                  <h2>Celebrity Apex</h2>
                  <h4>12 Nights Mediterranean Criuse</h4>
            <p>Monday 17 Oct 2022</p>
                  <h3>£975</h3>
          </div>
        </div></div>
  )
}

export default About;

