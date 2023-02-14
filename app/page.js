// libraries
import React from "react";
import Image from "next/image";

// css
import styles from "../css/page.module.css";

// assets
import bg from "../assets/bg.png";
import c1 from "../assets/coffee-1.png";
import c2 from "../assets/coffee-2.png";
import c3 from "../assets/coffee-3.png";
import c4 from "../assets/coffee-4.png";
import logo2 from "../assets/logo2.png";
import Link from "next/link";

function page() {
  return (
    <>
      <section className={styles.landingSection}>
        <div className={styles.content}>
          <h1>
            Enjoy the most <span>satisfying </span>
            <br/> cup of <span><u>coffee</u></span> you've ever had.
          </h1>
          <Link href={"/"} className={styles.btn}>
              Visit Nearest Branch
          </Link>
        </div>  
        <Image className={styles.bg} src={bg} />
      </section>
      <section className={styles.msection}>
        <div className={styles.leftpart} >
          <h1>
            Our Monthly<br/>Top Pick
          </h1>
          <Link href={"/"} className={styles.browse}>
            Browse Our Menu
          </Link>
        </div>
        <div className={styles.rightpart} >
            <div className={styles.foodCard}>
              <Image src={c3} className={styles.foodImg1} />
              <h3>
              Dalgona 
              </h3>
            </div>
            <div className={styles.foodCard}>
              <Image src={c4} className={styles.foodImg1} />
              <h3>
                Latte
              </h3>
            </div>
            <div className={styles.foodCard}>
              <Image src={c1} className={styles.foodImg1} />
              <h3>
                Capachino
              </h3>
            </div>
            <div className={styles.foodCard}>
              <Image src={c2} className={styles.foodImg1} />
              <h3>
                Coffee
              </h3>
            </div>
        </div>
      </section>
      <section className={styles.serviceSection}>
        <h1>
          What Sets Us <span>Apart</span>
        </h1>
        <div className={styles.serviceDiv}>
          <div className={styles.serviceCard}>
            <h2>
              Free WIFI
            </h2>
          </div>
          <div className={styles.serviceCard}>
            <h2>
              Free WIFI
            </h2>
          </div>
          <div className={styles.serviceCard}>
            <h2>
              Free WIFI
            </h2>
          </div>
          <div className={styles.serviceCard}>
            <h2>
              Free WIFI
            </h2>
          </div>
          <div className={styles.serviceCard}>
            <h2>
              Free WIFI
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
