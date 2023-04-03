import React from "react";
import ReactDOM  from "react-dom";
import './Model.css'
import { CSSTransition } from "react-transition-group";
import BackDrop from './BackDrop'

const ModalOverLay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`model__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={
        props.onSubmit ? props.onSubmit : event => event.preventDefault
      }>
        <div className={`mode__content ${props.contentClass}`}>
          {props.childern}
        </div>
        <footer className={`model__footer ${props.footerClass}`}>
        {props.footer}
        </footer>
      </form>

    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = props => {
  <>
  {props.show && <BackDrop onClick ={props.onCancel} />}
  <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames='model'>
    <ModalOverLay {...props} />
  </CSSTransition>
  </>

}
export default Modal