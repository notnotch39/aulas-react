import { useEffect, useState } from "react"

function App() {
  const [contador, setContador] = useState(0)
  const [contador2, setContador2] = useState(0)

  useEffect(() => {
    console.log("Roodu")
  }, [])
  
  return (
    <>
      <h1>Contador</h1>
      <button onClick={() => setContador(atual => atual + 1)}>{contador}</button>
      <button onClick={() => setContador2(atual => atual + 1)}>{contador2}</button>
    </>
  )
}

export default App
