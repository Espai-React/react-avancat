import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [comptador, setComptador] = useState<number>(0)
  const data = useRef<string | null>(null)
  console.log('Comptador: ', comptador)

  const handleClick = (): void => {
    setComptador(comptador + 1)
  }

  useEffect(() => {
    data.current = new Date().toLocaleTimeString()
  }, [comptador])

  return (
    <div>
      {!comptador ? (
        <h3>Bon dia. Esperant comptador</h3>
      ) : (
        <h3>Comptador a les {data.current}</h3>
      )}
      <input
        type="button"
        value={`Clica! ${comptador}`}
        onClick={handleClick}
      />
      <p>Comptador: {comptador}</p>
    </div>
  )
}

export default App
