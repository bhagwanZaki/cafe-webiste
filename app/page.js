// libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";

// css
import styles from "../css/page.module.css";

// imgs
import bg from "../assets/bg.png";
import c1 from "../assets/coffee-1.png";
import c2 from "../assets/coffee-2.png";
import c3 from "../assets/coffee-3.png";
import c4 from "../assets/coffee-4.png";
import logo2 from "../assets/logo2.png";

// icons
import icon1 from "../assets/wifi.png";
import icon2 from "../assets/cater.png";
import icon3 from "../assets/deliver.png";
import icon4 from "../assets/music.png";
import icon5 from "../assets/rent.png";

// react icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function page() {
  return (
    <>
      <section className={styles.landingSection}>
        <div className={styles.content}>
          <h1>
            Enjoy the most <span>satisfying </span>
            <br /> cup of{" "}
            <span>
              <u>coffee</u>
            </span>{" "}
            you've ever had.
          </h1>
          <Link href={"/"} className={styles.btn}>
            Visit Nearest Branch
          </Link>
        </div>
        <Image className={styles.bg} src={bg} />
      </section>
      <section className={styles.msection}>
        <div className={styles.leftpart}>
          <h1>
            Our Monthly
            <br />
            Top Pick
          </h1>
          <Link href={"/"} className={styles.browse}>
            Browse Our Menu
          </Link>
        </div>
        <div className={styles.rightpart}>
          <div className={styles.foodCard}>
            <Image src={c3} className={styles.foodImg1} />
            <h3>Dalgona</h3>
          </div>
          <div className={styles.foodCard}>
            <Image src={c4} className={styles.foodImg1} />
            <h3>Latte</h3>
          </div>
          <div className={styles.foodCard}>
            <Image src={c1} className={styles.foodImg1} />
            <h3>Capachino</h3>
          </div>
          <div className={styles.foodCard}>
            <Image src={c2} className={styles.foodImg1} />
            <h3>Coffee</h3>
          </div>
        </div>
      </section>
      <section className={styles.serviceSection}>
        <h1>
          What Sets Us <span>Apart</span>
        </h1>
        <div className={styles.serviceDiv}>
          <div className={styles.serviceCard}>
            <Image src={icon1} className={styles.sicon} />
            <h2>Free WIFI</h2>
          </div>
          <div className={styles.serviceCard}>
            <Image src={icon2} className={styles.sicon} />
            <h2>Catering</h2>
          </div>
          <div className={styles.serviceCard}>
            <Image src={icon3} className={styles.sicon} />
            <h2>Delivery</h2>
          </div>
          <div className={styles.serviceCard}>
            <Image src={icon4} className={styles.sicon} />
            <h2>Live Music</h2>
          </div>
          <div className={styles.serviceCard}>
            <Image src={icon5} className={styles.sicon} />
            <h2>
              Event Space
              <br />
              Rental
            </h2>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.leftpartfooter}>
          <Image src={logo2} />
          <h4>Cafe Coffee Day. All rights reserved.</h4>
        </div>
        <div className={styles.rightpartfooter}>
          <h4>Social Media Link</h4>
          <div className={styles.socialLink}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </>
  );
}

export default page;
