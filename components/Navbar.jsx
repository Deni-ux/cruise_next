﻿import React from 'react'
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Link href="/" >⚓My Kind of Cruise</Link>
      
      
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">Guide</Link>
          </li>
        <li className={styles.listItem}>
          <Link href="/">Favourites</Link>
          </li>
        <li className={styles.listItem}>
          <Link href="/">Profile</Link>
          </li>
      
    </ul>
      </div>
    
  )
}

export default NavBar;