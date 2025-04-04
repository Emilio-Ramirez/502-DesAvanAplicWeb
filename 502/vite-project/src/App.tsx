import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginFooter from './class1/A01783980/LoginFooter.tsx' // We'll create this component

function App() {
  const [count, setCount] = useState(0)
  const [showLoginInfo, setShowLoginInfo] = useState(false)
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      {/* Login button */}
      <div className="card">
        <button onClick={() => setShowLoginInfo(!showLoginInfo)}>
          {showLoginInfo ? 'Hide Login Info' : 'Show Login Info'}
        </button>
        <a href="/login" className="login-link">Go to Login Page</a>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* Footer with ES6+ examples */}
      {showLoginInfo && <LoginFooter />}
    </>
  )
}

export default App
