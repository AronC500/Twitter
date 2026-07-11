import { useState } from 'react'
import Button from './components/button'
import './Login.css'
import { useGoogleLogin } from '@react-oauth/google'

function Login() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      const user = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${response.access_token}`
        }
      })
      const data = await user.json()
      console.log("success")

    },
    onError: (error) => {
      console.log(error)
    }
  })
  function continuePhone() {
    return
  }
  function continueEmail() {
    googleLogin()
    return
  }
  function continueApple() {
    return
  }

  function normalContinue() {
    return
  }

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="loginHeading">Happening now.</h1>
        <Button img="/phoneimg.png" text="Continue with phone" onClick={continuePhone} />
        <Button img="/google.png" text="Continue with Google" onClick={continueEmail} />
        <Button img="/apple.png" text="Continue with Apple" onClick={continueApple} />
        <div className="loginDivider">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <input className="loginInput" placeholder="Email or username" />
        <Button imgstyle={{ width: '0px', height: '0px' }} text="Continue" onClick={normalContinue} buttonstyle={{ backgroundColor: 'rgb(38, 38, 39)', color: 'rgb(98, 98, 108)', border: 'none', fontWeight: 'bold', fontSize: '17px', paddingTop: '15px', paddingBottom: '15px' }} />
        <p className="byContinuing">
          By continuing, you agree to our <a>Terms of Service</a>, <a>Privacy Policy</a>, and <a>Cookie Use</a>.
        </p>
      </div>
      <div className="loginLogo">
        <svg fill="none" viewBox="0 0 480 490" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '480px', height: 'auto' }}><defs><radialGradient cx="376.24350003533004" cy="183.9050180348408" gradientUnits="userSpaceOnUse" id="heroHighlight" r="200"><stop stopColor="#ffffff" /><stop offset="1" stopColor="#5F5F5F" stopOpacity="0" /></radialGradient></defs><path d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z" fill="black" /><path d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z" stroke="#222222" strokeLinejoin="round" strokeWidth="3" /><path d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z" stroke="url(#heroHighlight)" strokeLinejoin="round" strokeWidth="3" /></svg>
      </div>

      <div className="footer">
        <a>About</a>
        <span className="dot">·</span>
        <a>Get App</a>
        <span className="dot">·</span>
        <a>Yan</a>
        <span className="dot">·</span>
        <a>Help</a>
        <span className="dot">·</span>
        <a>Terms</a>
        <span className="dot">·</span>
        <a>Privacy</a>
        <span className="dot">·</span>
        <a>Cookies</a>
        <span className="dot">·</span>
        <a>Careers</a>
        <span className="dot">·</span>
        <a>Ads & Business</a>
        <span className="dot">·</span>
        <a>Developers</a>
        <span className="dot">·</span>
        <a>News</a>
        <span className="dot">·</span>
        <a>US TIDA</a>
        <span className="dot">·</span>
        <a>Accessibility</a>
        <span className="dot">·</span>
        <span>© 2026 Aron Corp.</span>
      </div>
    </div>
  )
}

export default Login