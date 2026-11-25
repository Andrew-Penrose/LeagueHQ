import { useState, useEffect } from 'react'
import './App.css'

function App()
{
  const [backendStatus, setBackendStatus] = useState("Checking...")
  useEffect(() => {
    const controller = new AbortController()
    async function checkBackend() {
      try {
        const response = await fetch("http://localhost:5198/api/health", {
          signal: controller.signal
        })
        if (!response.ok) {
          throw new Error("Backend health request failed")
        }
        const data = await response.json()
        setBackendStatus(data.status)
      }
      catch (error) {
        if (controller.signal.aborted) {
          return
        }

        console.error("Failed to check backend health:", error);
        setBackendStatus("Unavailable")
      }
    }

    checkBackend()

    return () => {
      controller.abort()
    }
  }, [])
  return (
    <div className="Intro">
      <h1>LeagueHQ</h1>
      <p>Your fantasy league, beyond the game</p>
      <p>Backend Status: {backendStatus}</p>
    </div>
  )
}

export default App
