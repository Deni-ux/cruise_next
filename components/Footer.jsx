import React from 'react'
import Image from "next/image"
import Link from 'next/dist/client/link'
import appscreen from '../public/img/appscreen.png'

import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
      <div className={styles.containerFooter}>
          <div className={styles.cardLg}>
              <h2>My Kind of Cruise</h2>
              
              <h2>Book with Us 
              </h2>
              <Image src={appscreen} alt="" width='60px' height='60px' className={styles.img} /> 
              
          </div>
          <div className={styles.cardSm}>
              <h3 className={styles.info}>Contact Us</h3>
          <Link href="/"><p className={styles.mail}>info@mykindofcruise</p></Link>
              <h3 className={styles.info}>Follow Us</h3>
          <Link href="/"><p className={styles.mail}>Instagram</p></Link>
          <Link href="/"><p className={styles.mail}>Facebook</p></Link></div>
          
          <div className={styles.cardSm}>
              <h3 className={styles.info}>Our Partners</h3>
              <Link href="/"><p className={styles.mail}>Travel Trust Association</p></Link>
          <Link href="/"><p className={styles.mail}>worldpay</p></Link></div>
          </div>
  )
}

export default Footer;