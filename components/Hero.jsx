import React from 'react'
import Image from 'next/dist/client/image'
import styles from '../styles/Hero.module.css'
import cruiseship from '../public/img/cruiseship.jpg'

const Hero = () => {
  return (
      <div className={styles.containerHero}>
          <Image src={cruiseship} alt="sea" className={styles.imgBg} />
          <div className={styles.cards}>
              <h1 className={styles.bgText}> <span className={styles.hblue}>Book</span> Your <span className={styles.hblue}>Holiday</span>  Now</h1>
          <input type='search' name="search-form" placeholder='Start searching..' className={styles.input} />
        </div>
          
      </div>
  )
}

export default Hero;