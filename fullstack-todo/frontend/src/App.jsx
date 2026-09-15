
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
function App() {
 
  return (
    <div style={  { fontFamily: "'JetBrains Mono', 'Courier New', monospace",}}>
    <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
`}
</style> 
    <Header/>
    <Main/>

     
    </div>
  )
}

export default App
