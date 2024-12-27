import React from "react";
import styles from "./FourthSection.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const FourthSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headtext}>
        <h1>Fashion News This Week</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/f1.jpg"
            alt="Fashion"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.date}>10 Jan 2018</span>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</p>
            <div className={styles.meta}>
              <span>
                <FaRegHeart /> 15 Likes
              </span>
              <span>
                <FaRegComment /> 02 Comments
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/f2.jpg"
            alt="Fashion"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.date}>10 Jan 2018</span>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</p>
            <div className={styles.meta}>
              <span>
                <FaRegHeart /> 15 Likes
              </span>
              <span>
                <FaRegComment /> 02 Comments
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/f3.jpg"
            alt="Fashion"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.date}>10 Jan 2018</span>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</p>
            <div className={styles.meta}>
              <span>
                <FaRegHeart /> 15 Likes
              </span>
              <span>
                <FaRegComment /> 02 Comments
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/f4.jpg"
            alt="Fashion"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.date}>10 Jan 2018</span>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</p>
            <div className={styles.meta}>
              <span>
                <FaRegHeart /> 15 Likes
              </span>
              <span>
                <FaRegComment /> 02 Comments
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button>LOAD MORE</button>
      </div>
    </div>
  );
};

export default FourthSection;
