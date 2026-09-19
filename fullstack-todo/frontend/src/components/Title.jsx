import React, { useState } from 'react'

function Title() {
    const [openCount, setOpenCount] = useState(0)
    const [clearedCount, setClearedCount] = useState(0)
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 42,
        display: 'flex',
        alignItems: 'baseline',
        color: '#F2F1EC',
        gap: 14,
      }}>
        Deck
        <span style={{ color: '#4FA8A0' }}>/</span>
        <span style={{
          fontSize: 22,
          color: '#8B8F97',
          display: 'flex',
          gap: 18,
        }}>
          {new Date().toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      </div>
      <div style={{
        fontSize: 16,
        marginTop: 14,
        color: '#8B8F97',
        display: 'flex',
        gap: 24,
      }}>
        <span style={{ display: 'flex', gap: 8 }}>
          <strong style={{ color: '#D4A24C' }}>{openCount}</strong>
          Open
        </span>
        <span style={{ display: 'flex', gap: 8 }}>
          <strong style={{ color: '#5B8A72' }}>{clearedCount}</strong>
          Cleared
        </span>
      </div>
    </div>
  )
}

export default Title
