import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Chat from './Chat.jsx'
import History from './History.jsx'
import Profile from './Profile.jsx'
import Explore from './Explore.jsx'
import Notifications from './Notifications.jsx'
import Grok from './Grok.jsx'
import Premium from './Premium.jsx'
import Setting from './Setting.jsx'
import Help from './Help.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENTID}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/history' element={<History />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/grok' element={<Grok />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/settings' element={<Setting />} >
          <Route path='help' element={<Help />} />
        </Route>




      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
)
