
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactLazyload from './ReactLazyload.jsx'
createRoot(document.getElementById('root')).render(
  // <App />
  <ReactLazyload/>
)
