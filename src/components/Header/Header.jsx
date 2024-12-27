import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="https://preview.colorlib.com/theme/blogger/img/logo.png" alt="" />
        </div>
        <div className={styles.nav}>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">TRAVEL</a></li>
                <li><a href="#">FASHION</a></li>
                <li><a href="#">TEAM</a></li>
                <li><a href="#">PAGES</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header