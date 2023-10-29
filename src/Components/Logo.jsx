import React from 'react'
import Logo_img from "../Images/Logo_img.png"

function Logo({ width = "100px" }) {
  return (
    <div style={{ mixBlendMode: 'darken'}}>
      <img src={Logo_img} width={width} />
    </div>
  )
}

export default Logo
