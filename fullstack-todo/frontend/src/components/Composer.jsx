import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'

const PRIORITIES = [
  { key: "low", label: "Low", color: "#5B8A72" },
  { key: "mid", label: "Mid", color: "#D4A24C" },
  { key: "high", label: "High", color: "#C86B4A" },
]

function Composer() {
  const [input, setInput] = useState("")
  const [priority, setPriority] = useState("mid")

  return (
    <div style={{
      background: "#1B1F26",
      border: "1px solid #2A2F38",
      borderRadius: 12,
      padding: 20,
      marginBottom: 24,
    }}>
      <div style={{ display: "flex", gap: 12 }}>
        <input
          placeholder="New task — what needs doing?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            color: "#E8E6E1",
            fontSize: 17,
            fontFamily: "inherit",
            padding: "10px 6px",
            outline: "none",
          }}
        />
        <button style={{
          background: "#4FA8A0",
          border: "none",
          color: "#0F1216",
          borderRadius: 9,
          width: 46,
          height: 46,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}>
          <PlusIcon size={22} strokeWidth={2.5} />
        </button>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        {PRIORITIES.map((p) => (
          <button
            key={p.key}
            onClick={() => setPriority(p.key)}
            style={{
              fontSize: 13,
              padding: "6px 14px",
              borderRadius: 6,
              border: `1px solid ${priority === p.key ? p.color : "#2A2F38"}`,
              background: priority === p.key ? `${p.color}22` : "transparent",
              color: priority === p.key ? p.color : "#7A7E86",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Composer
