import React from 'react'
import Button from './Button'
import { ModalStyle } from './styles/ModalStyle'

export default function Modal({ title, text, loginEvent, cancelEvent }) {
  return (
    <ModalStyle>
    <div className="modal-content fadeIn-2ms">
    <h1>
    {title}
    </h1>
    <p>{text ? text:"Modal content goes here! "}</p>
    <div>
    <Button classes={"btn-primary"} text={"Login"} onClick={loginEvent} />
    <Button classes={"btn-primary"} text={"Close"} onClick={cancelEvent} />
    </div>
    </div>
    </ModalStyle>
  )
}
