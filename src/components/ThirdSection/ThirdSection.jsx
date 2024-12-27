import React from "react";
import styles from "./ThirdSection.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";


const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headtext}>
        <h1>Hot topics from Travel Section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.date}>
              <span>20</span>
              <small>Dec</small>
            </div>
            <div className={styles.image}>
              <img src="https://preview.colorlib.com/theme/blogger/img/t1.jpg" alt="Blog" />
            </div>
            <div className={styles.content}>
              <h3>Addiction When Gambling Becomes A Problem</h3>
              <p>
                Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className={styles.meta}>
                <span><FaRegHeart /> 15 Likes</span>
                <span><FaRegComment /> 02 Comments</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.date}>
              <span>20</span>
              <small>Dec</small>
            </div>
            <div className={styles.image}>
              <img src="https://preview.colorlib.com/theme/blogger/img/t2.jpg" alt="Blog" />
            </div>
            <div className={styles.content}>
              <h3>Addiction When Gambling Becomes A Problem</h3>
              <p>
                Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className={styles.meta}>
                <span><FaRegHeart /> 15 Likes</span>
                <span> <FaRegComment /> 02 Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.date}>
              <span>20</span>
              <small>Dec</small>
            </div>
            <div className={styles.image}>
              <img src="https://preview.colorlib.com/theme/blogger/img/t3.jpg" alt="Blog" />
            </div>
            <div className={styles.content}>
              <h3>Addiction When Gambling Becomes A Problem</h3>
              <p>
                Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className={styles.meta}>
                <span><FaRegHeart /> 15 Likes</span>
                <span><FaRegComment /> 02 Comments</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.date}>
              <span>20</span>
              <small>Dec</small>
            </div>
            <div className={styles.image}>
              <img src="https://preview.colorlib.com/theme/blogger/img/t4.jpg" alt="Blog" />
            </div>
            <div className={styles.content}>
              <h3>Addiction When Gambling Becomes A Problem</h3>
              <p>
                Inappropriate behavior Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className={styles.meta}>
                <span><FaRegHeart /> 15 Likes</span>
                <span><FaRegComment /> 02 Comments</span>
              </div>
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

export default ThirdSection;
