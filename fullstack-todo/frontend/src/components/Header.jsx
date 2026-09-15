
import  { Terminal } from 'lucide-react'

function Header() {
  return (
    <header style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'16px 20px',
        borderBottom:"1px solid #2A2F38",
        position:"sticky",
        top:"0px",
        zIndex:10,
        backdropFilter:"blur(6px)",
        background:"#1B1F26"
    }}>
        <span style={{display:"flex", alignItems:"center", gap:8,fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 18,
  letterSpacing: "-0.01em", color: "#F2F1EC",cursor:"pointer"}}>
        <Terminal size={16} color='#4FA8A0'/>
        Deck
        
        </span>
        <nav style={{display:"flex", gap:"18px",  fontSize: 14,
  color: "#8B8F97",alignItems:"center",cursor:"pointer"}}>
            <a>Archive</a>
            <a>Profile</a>
        </nav>
    </header>
  )
}

export default Header