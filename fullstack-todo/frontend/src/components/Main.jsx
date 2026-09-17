import React from 'react'
import Composer from './Composer.jsx'
import Title from './Title'
import Tabs from './Tabs.jsx'
import Footer from './Footer.jsx'

function Main() {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 20px',
      background: '#14171C',
      color: '#8B8F97',
    }}>
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
      <div style={{ width: '100%', maxWidth: 720, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Title />
        <Composer />
        <Tabs />
        <div style={{ marginTop: 'auto' }}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Main