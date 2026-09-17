import React from 'react'
import Composer from './Composer.jsx'
import Title from './Title'

function Main() {
  return (
    <div style={{display:"flex", justifyContent:"center", padding:"40px 20px",  minHeight: "100vh",
        background: "#14171C",
        color: "#E8E6E1",
         color: "#8B8F97",
              display: "flex",
              gap: 18}}>
              <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #4FA8A033; }
        input::placeholder { color: #6B7078; }
        button:focus-visible, input:focus-visible {
          outline: 2px solid #4FA8A0;
          outline-offset: 2px;
        }
        .task-row:hover .del-btn { opacity: 1; }
      `}</style>
        <div style={{width:"100%",maxWidth:640}}>
          <Title/>
        <Composer/>
        </div>

    </div>
  )
}

export default Main