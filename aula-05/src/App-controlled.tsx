import { useEffect, useState } from "react"

function App() {
  const [nome, setNome] = useState<string>()
  
  return (
    <>
      <p>{nome}</p>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
    </>
  )
}

export default App
