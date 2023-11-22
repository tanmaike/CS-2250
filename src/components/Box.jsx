import React from 'react'
import "./Box.css"; 

export const Box = (props) => {
  return (
    <div className="Box" style={{backgroundColor: props.background, border: `2px solid ${props.borderColor}` }}><h1>{props.text}</h1></div>
  )
}
