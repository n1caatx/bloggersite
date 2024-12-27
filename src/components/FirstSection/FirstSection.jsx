import React from 'react'
import styles from './FirstSection.module.css'
import image from '../../img/header-bg.jpg'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";


const FirstSection = () => {
  return (
    <div className={styles.container}>
        <div>
            <img src={image} alt="" />
        </div>
        <div className={styles.text}>
            <h1>A Discount Toner Cartridge Is Better Than Ever.</h1>
        </div>
        <div className={styles.bottomfirst}>
            <div className={styles.likecomment}>
                <p><FaRegHeart /> 15 Likes</p>
                <p><FaRegComment /> 02 Comments</p>
            </div>
            <div className={styles.user}>
                <div className={styles.usertext}>
                    <h1>Mark wiens</h1>
                    <p>12 Dec, 2017 11:21 am</p>
                </div>
                <div className={styles.userimage}>
                    <img src="https://preview.colorlib.com/theme/blogger/img/user.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstSection