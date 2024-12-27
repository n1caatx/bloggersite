import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footertext}>
            <p>Copyright ©2024 All rights reserved | This template is made with <p id={styles.heart}>♡</p> by <a href="https://preview.colorlib.com/theme/blogger">Colorlib</a></p>
        </div>
        <div className={styles.icons}>
            <ul>
                <li><a href="https://www.facebook.com/"><FaFacebookF/></a></li>
                <li><a href="https://x.com/"><FaTwitter/></a></li>
                <li><a href="https://instagram.com/"><FaInstagram/></a></li>
                <li><a href="https://linkedin.com/"><FaLinkedinIn/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer