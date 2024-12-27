import React from 'react'
import styles from './SecondSection.module.css'

const SecondSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.texts}>
            <h1>Latest News from all categories</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" alt="" />
                <p className={styles.january}>10 Jan 2018</p>
                <p className={styles.cardtitle}>It S Hurricane Season Visiting Hilton</p>
            </div>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" alt="" />
                <p className={styles.january}>10 Jan 2018</p>
                <p className={styles.cardtitle}>What Makes A Hotel Boutique</p>
            </div>
            <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg" alt="" />
                <p className={styles.january}>10 Jan 2018</p>
                <p className={styles.cardtitle}>Les Houches The Hidden Gem Valley</p>
            </div>
        </div>
    </div>
  )
}

export default SecondSection