import React from 'react'
import Composer from './composer'

function Main() {
  return (
    <div style={{display:"flex", justifyContent:"center", padding:"40px 20px, "}}>
        <div style={{width:"100%",maxWidth:640}}>
        <Composer/>
        </div>

    </div>
  )
}

export default Main