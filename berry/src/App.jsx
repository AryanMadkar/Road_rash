import React from 'react'
import GameCanvas from './components/world/GameCanvas'

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#87ceeb' }}>
      <GameCanvas />
    </div>
  )
}

export default App
