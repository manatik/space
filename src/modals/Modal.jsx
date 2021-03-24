// packages
import React from "react";
// styles
import styles from "./modal.module.scss";
// pictures
import img from "../img/Modal/modalImg.png";

const Modal = ({children, isOpen, isClose}) => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.modal}>
          <div className={styles.band}/>
          <img className={styles.modalImg} src={img} alt={'modalImg'}/>
          <span className={styles.close} onClick={() => isClose(false)}>X</span>
          {children}
        </div>
      </div>
    </>
  )
}
export default Modal
