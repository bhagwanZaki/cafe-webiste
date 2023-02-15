import React from 'react'
import Image from 'next/image'

import bg from "../../assets/contact.svg"
import styles from "../../css/contact.module.css"

function page() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.content}>
        <h1>
          How can we help you
        </h1>
        <form className={styles.form}>
          <input type='email' className={styles.input} placeholder="Email" required />
          <input type='text' className={styles.input} placeholder="Subject" required />
          <textarea placeholder='Message' className={styles.input} rows={10} />
          <input type={"submit"} value="send us mail" className={styles.btn} />
        </form>
      </div>
      <Image src={bg} className={styles.bg} />
    </div>
  )
}

export default page