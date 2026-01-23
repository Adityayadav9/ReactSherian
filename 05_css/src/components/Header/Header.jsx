import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
        <h1 className={styles.head1}>Mai hu gian</h1>
        <button className={styles.btn}> LogOut</button>
      
    </div>
  )
} 

export default Header
