import { useState } from 'react'
import { Terminal, Mail, Lock, User, ArrowRight } from 'lucide-react'

function Auth({ onAuth, onBack }) {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    onAuth({ email, name: name || 'User' })
    setLoading(false)
  }

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#14171C',
      color: '#E8E6E1',
      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #4FA8A033; }
      `}</style>

      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px 20px',
        borderBottom: '1px solid #2A2F38',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: '#1B1F26',
      }}>
        <span onClick={onBack} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: '-0.01em',
          color: '#F2F1EC',
          cursor: 'pointer',
        }}>
          <Terminal size={16} color='#4FA8A0' />
          Deck
        </span>
      </header>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 65px)',
        padding: '40px 20px',
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 32,
              color: '#F2F1EC',
              marginBottom: 8,
              letterSpacing: '-0.02em',
            }}>
              {mode === 'signin' ? 'Welcome back' : 'Create account'}
            </h1>
            <p style={{ fontSize: 14, color: '#8B8F97' }}>
              {mode === 'signin' ? 'Sign in to access your tasks' : 'Start managing your tasks today'}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {mode === 'signup' && (
              <div>
                <label style={{ display: 'block', fontSize: 12, color: '#8B8F97', marginBottom: 6 }}>Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color='#5A5E66' style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required={mode === 'signup'}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      background: '#1B1F26',
                      border: '1px solid #2A2F38',
                      borderRadius: 8,
                      color: '#E8E6E1',
                      fontFamily: 'inherit',
                      fontSize: 14,
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: 12, color: '#8B8F97', marginBottom: 6 }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color='#5A5E66' style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    background: '#1B1F26',
                    border: '1px solid #2A2F38',
                    borderRadius: 8,
                    color: '#E8E6E1',
                    fontFamily: 'inherit',
                    fontSize: 14,
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12, color: '#8B8F97', marginBottom: 6 }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color='#5A5E66' style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    background: '#1B1F26',
                    border: '1px solid #2A2F38',
                    borderRadius: 8,
                    color: '#E8E6E1',
                    fontFamily: 'inherit',
                    fontSize: 14,
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {mode === 'signin' && (
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="button" style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#4FA8A0',
                  fontSize: 13,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}>
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" disabled={loading} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              background: '#4FA8A0',
              border: 'none',
              color: '#0F1216',
              borderRadius: 8,
              padding: '14px 20px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: 15,
              opacity: loading ? 0.7 : 1,
            }}>
              {loading ? (
                <span style={{
                  width: 18,
                  height: 18,
                  border: '2px solid #0F1216',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                }}></span>
              ) : (
                <>{mode === 'signin' ? 'Sign in' : 'Create account'} <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <p style={{ fontSize: 14, color: '#8B8F97' }}>
              {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
              {' '}
              <button onClick={toggleMode} style={{
                background: 'transparent',
                border: 'none',
                color: '#4FA8A0',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 500,
              }}>
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #2A2F38' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, height: 1, background: '#2A2F38' }}></div>
              <span style={{ fontSize: 12, color: '#5A5E66' }}>Or continue with</span>
              <div style={{ flex: 1, height: 1, background: '#2A2F38' }}></div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 16px',
                background: '#1B1F26',
                border: '1px solid #2A2F38',
                borderRadius: 8,
                color: '#E8E6E1',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 13,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </button>
              <button style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 16px',
                background: '#1B1F26',
                border: '1px solid #2A2F38',
                borderRadius: 8,
                color: '#E8E6E1',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 13,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer style={{
        borderTop: '1px solid #2A2F38',
        padding: '16px 20px',
        textAlign: 'center',
        fontSize: 11,
        color: '#5A5E66',
      }}>
        By continuing, you agree to our <span style={{ color: '#8B8F97', cursor: 'pointer' }}>Terms</span> and <span style={{ color: '#8B8F97', cursor: 'pointer' }}>Privacy Policy</span>
      </footer>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

export default Auth
