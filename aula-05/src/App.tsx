import { useEffect, useRef, useState } from "react"

function App() {
  const nomeRef = useRef<any>()

  function handleImprimirNome() {
    const nome = nomeRef.current?.value
    
    console.log(nome)
  }
  
  return (
    <>
      {/* <input type="text" ref={nomeRef}/> */}
      <button onClick={handleImprimirNome}>Imprimir</button>
    </>
  )
}

export default App
