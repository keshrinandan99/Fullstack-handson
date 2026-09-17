import React, { useState } from 'react'
const tabs=[
            { key: "active", label: "Open" },
            { key: "done", label: "Cleared" },
            { key: "all", label: "All" },
          ]
function Tabs() {
    const [filter,setFilter]=useState("active");
  return (
     <div style={{display:'flex', gap:4, marginBottom:16}}>
        {tabs.map((f)=>{
            return (
                <button key={f.key} style={{
                    padding:"6px 12px",
                    borderRadius:6,
                    marginTop:10,
                    border:'none',
                    fontFamily:'inherit',
                    fontWeight:500,
                    cursor:'pointer',
                    background:filter===f.key?"#2A2F38":"transparent",
                    color:filter===f.key?"#E8E6E1":"#6B7078"
                }} onClick={()=>setFilter(f.key)}>
                    {f.label}
                </button>
            )
        })}

        </div>
  )
}

export default Tabs