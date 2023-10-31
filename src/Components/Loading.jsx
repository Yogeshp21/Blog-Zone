import React from 'react'
import ReactLoading from "react-loading"

function Loading({type="cylon",color, height="10%" ,width="10%"}) {
  return (
    <div >
      <ReactLoading type={type} color={color} height={height} width={width}  />
    </div>
  )
}

export default Loading
