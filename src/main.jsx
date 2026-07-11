import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Login.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENTID}>
    <Home />
  </GoogleOAuthProvider>
)
