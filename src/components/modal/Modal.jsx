// packages
import React from 'react'
import PropTypes from 'prop-types'
// styles
import styles from './modal.module.css'
// pictures
import img from '../../assets/modalImg.png'

const Modal = ({ children, isClose, isOpen }) => {
  return (
      <>
          { isOpen &&
          <div className={ styles.main }>
              <div className={ styles.modal }>
                  <div className={ styles.band }/>
                  <img alt={ 'modalImg' } className={ styles.modalImg } src={ img }/>
                  <span className={ styles.close } onClick={ () => isClose(false) }>&times;</span>
                  { children }
              </div>
          </div> }
      </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isClose: PropTypes.func,
  isOpen: PropTypes.bool
}
export default Modal
