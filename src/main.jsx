import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { RequestProvider } from './providers/requestProvider/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RequestProvider> */}
      <App />
    {/* </RequestProvider> */}
  </React.StrictMode>,
)
