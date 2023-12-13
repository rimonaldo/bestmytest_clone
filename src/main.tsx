import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/main.scss'
import useStore from './store/testStore.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // load test on mount

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
