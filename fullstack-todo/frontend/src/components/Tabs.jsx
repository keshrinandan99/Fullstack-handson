import React, { useState } from 'react'

const tabs = [
  { key: "active", label: "Open" },
  { key: "done", label: "Cleared" },
  { key: "all", label: "All" },
]

function Tabs() {
  const [filter, setFilter] = useState("active")

  return (
    <div style={{ display: 'flex', gap: 6, marginBottom: 24, marginTop: 8 }}>
      {tabs.map((f) => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          style={{
            padding: "9px 18px",
            borderRadius: 8,
            border: 'none',
            fontFamily: 'inherit',
            fontSize: 15,
            fontWeight: 500,
            cursor: 'pointer',
            background: filter === f.key ? "#2A2F38" : "transparent",
            color: filter === f.key ? "#E8E6E1" : "#6B7078",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default Tabs
