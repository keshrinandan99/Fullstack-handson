import { Terminal, CheckSquare, Zap, Shield } from 'lucide-react'

function Landing({ onLaunch }) {
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

      {/* Header */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        borderBottom: '1px solid #2A2F38',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(6px)',
        background: '#1B1F26',
      }}>
        <span style={{
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
        <button onClick={onLaunch} style={{
          background: '#4FA8A0',
          border: 'none',
          color: '#0F1216',
          borderRadius: 7,
          padding: '8px 16px',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: 14,
        }}>
          Launch App
        </button>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '120px 20px 80px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{
          maxWidth: 720,
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1.1,
            color: '#F2F1EC',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}>
            Task management
            <br />
            <span style={{ color: '#4FA8A0' }}>without the ceremony</span>
          </h1>
          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: '#8B8F97',
            marginBottom: 40,
            maxWidth: 560,
            margin: '0 auto 40px',
          }}>
            Deck is a focused workspace for people who need to track work without fighting their tools. Open tasks, set priority, mark done.
          </p>
          <div style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <button onClick={onLaunch} style={{
              background: '#4FA8A0',
              border: 'none',
              color: '#0F1216',
              borderRadius: 8,
              padding: '14px 28px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: 16,
            }}>
              Get Started
            </button>
            <button style={{
              background: 'transparent',
              border: '1px solid #2A2F38',
              color: '#E8E6E1',
              borderRadius: 8,
              padding: '14px 28px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: 16,
            }}>
              View Demo
            </button>
          </div>
        </div>

        {/* App Preview */}
        <div style={{
          marginTop: 80,
          maxWidth: 800,
          margin: '80px auto 0',
        }}>
          <div style={{
            background: '#1B1F26',
            border: '1px solid #2A2F38',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}>
            <div style={{
              display: 'flex',
              gap: 6,
              marginBottom: 20,
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#C86B4A' }}></div>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#D4A24C' }}></div>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#5B8A72' }}></div>
            </div>
            <div style={{
              background: '#14171C',
              border: '1px solid #2A2F38',
              borderRadius: 8,
              padding: 16,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 0',
                borderBottom: '1px solid #2A2F38',
              }}>
                <div style={{
                  width: 18,
                  height: 18,
                  border: '2px solid #4FA8A0',
                  borderRadius: 4,
                }}></div>
                <span style={{ fontSize: 14, color: '#E8E6E1' }}>Review landing page design</span>
                <div style={{
                  marginLeft: 'auto',
                  fontSize: 11,
                  padding: '3px 8px',
                  borderRadius: 4,
                  border: '1px solid #D4A24C',
                  background: '#D4A24C22',
                  color: '#D4A24C',
                }}>Mid</div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 0',
                borderBottom: '1px solid #2A2F38',
              }}>
                <div style={{
                  width: 18,
                  height: 18,
                  border: '2px solid #4FA8A0',
                  borderRadius: 4,
                }}></div>
                <span style={{ fontSize: 14, color: '#E8E6E1' }}>Ship new composer component</span>
                <div style={{
                  marginLeft: 'auto',
                  fontSize: 11,
                  padding: '3px 8px',
                  borderRadius: 4,
                  border: '1px solid #C86B4A',
                  background: '#C86B4A22',
                  color: '#C86B4A',
                }}>High</div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 0',
                opacity: 0.5,
              }}>
                <CheckSquare size={18} color='#4FA8A0' />
                <span style={{ fontSize: 14, color: '#8B8F97', textDecoration: 'line-through' }}>Update dependencies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '80px 20px',
        borderTop: '1px solid #2A2F38',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          maxWidth: 920,
          margin: '0 auto',
        }}>
          <div style={{
            background: '#1B1F26',
            border: '1px solid #2A2F38',
            borderRadius: 10,
            padding: 24,
          }}>
            <Zap size={24} color='#4FA8A0' style={{ marginBottom: 16 }} />
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              color: '#F2F1EC',
              marginBottom: 8,
            }}>Fast by default</h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: '#8B8F97',
            }}>
              Keyboard shortcuts, instant updates, no loading spinners. Built for people who value their time.
            </p>
          </div>

          <div style={{
            background: '#1B1F26',
            border: '1px solid #2A2F38',
            borderRadius: 10,
            padding: 24,
          }}>
            <Terminal size={24} color='#4FA8A0' style={{ marginBottom: 16 }} />
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              color: '#F2F1EC',
              marginBottom: 8,
            }}>Developer friendly</h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: '#8B8F97',
            }}>
              API access, webhook support, self-hosting options. Your data stays under your control.
            </p>
          </div>

          <div style={{
            background: '#1B1F26',
            border: '1px solid #2A2F38',
            borderRadius: 10,
            padding: 24,
          }}>
            <Shield size={24} color='#4FA8A0' style={{ marginBottom: 16 }} />
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              color: '#F2F1EC',
              marginBottom: 8,
            }}>Privacy first</h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: '#8B8F97',
            }}>
              No tracking, no analytics, no third-party scripts. Just your tasks and nothing else.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        borderTop: '1px solid #2A2F38',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: 640,
          margin: '0 auto',
        }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 42,
            color: '#F2F1EC',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}>Ready to focus?</h2>
          <p style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: '#8B8F97',
            marginBottom: 32,
          }}>
            Start managing your tasks without the overhead.
          </p>
          <button onClick={onLaunch} style={{
            background: '#4FA8A0',
            border: 'none',
            color: '#0F1216',
            borderRadius: 8,
            padding: '14px 32px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontWeight: 600,
            fontSize: 16,
          }}>
            Create Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #2A2F38',
        padding: '24px 20px',
        textAlign: 'center',
        fontSize: 12,
        color: '#5A5E66',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 14,
          }}>
            <Terminal size={14} color='#4FA8A0' />
            Deck
          </span>
          <nav style={{
            display: 'flex',
            gap: 20,
            fontSize: 13,
            color: '#8B8F97',
          }}>
            <a style={{ cursor: 'pointer' }}>Docs</a>
            <a style={{ cursor: 'pointer' }}>GitHub</a>
            <a style={{ cursor: 'pointer' }}>Support</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Landing
