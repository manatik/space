// packages
import React from 'react'
import PropTypes from 'prop-types'
// styles
import styles from './modal.module.css'
// pictures
const img = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Modal%2FmodalImg.png?alt=media&token=5c9c0459-0651-4b02-866e-7c4b9e1b9742'

// eslint-disable-next-line react/prop-types
const Modal = ({ children, isClose, isOpen }) => {
  return (
      <>
          {isOpen &&
          <div className={styles.main}>
              <div className={styles.modal}>
                  <div className={styles.band}/>
                  <img alt={'modalImg'} className={styles.modalImg} src={img}/>
                  <span className={styles.close} onClick={() => isClose(false)}>&times;</span>
                  {children}
              </div>
          </div>}
      </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool
}
export default Modal
