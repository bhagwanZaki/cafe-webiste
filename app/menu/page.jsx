import React from "react";
import styles from "../../css/menu.module.css";
import Image from "next/image";
import card  from "../../assets/dummy.json";

function page() {
  return (
    <div className={styles.mainSection}>
      <h1>Our MENU</h1>
      <div className={styles.container}>
        {card.map((item, index) => (
          <div key={index} className={styles.box}>
            <img src={item.img} className={styles.bg} />
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.date}>Price : {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
