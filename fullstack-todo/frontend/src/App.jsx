import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Landing from './components/Landing'
import Auth from './components/Auth'

function App() {
  const [view, setView] = useState('landing')
  const [user, setUser] = useState(null)

  const handleAuth = (userData) => {
    setUser(userData)
    setView('app')
  }

  const handleLogout = () => {
    setUser(null)
    setView('landing')
  }

  if (view === 'auth') {
    return <Auth onAuth={handleAuth} onBack={() => setView('landing')} />
  }

  if (view === 'app') {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        `}</style>
        <Header onLogout={handleLogout} user={user} />
        <Main />
      </div>
    )
  }

  return <Landing onLaunch={() => setView('auth')} />
}

export default App
