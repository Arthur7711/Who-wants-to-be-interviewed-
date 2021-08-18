import React from "react";
import styles from "./Answers.module.css";

export default function Answers({ item, trueAnswer }) {
  return (
    <div className={styles.answers}>
      {item &&
        item.map((el, i) => (
          <div onClick={() => trueAnswer(i)} key={i} className={styles.answer}>
            <p>{el}</p>
          </div>
        ))}
    </div>
  );
}
