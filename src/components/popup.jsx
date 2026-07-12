import { useState } from 'react'
import './popup.css'
import ErrorMessage from './errorMessage.jsx'
import Input from './input.jsx'
import Button from './button.jsx'

function PopUp({ type, onClose }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const testpassword = 1

    function handleContinue() {
        if (password !== testpassword) {
            setInvalid(true)
            return
        }
        setInvalid(false)
    }

    return (
        <div className="overlaycontainer">
            {type === 'NormalLogin' &&
                <div className="overlay">
                    <Button img="/whitearrow.png" className="backButton" onClick={onClose} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Login</h1>
                    <div className="inputField">
                        <label>Username</label>
                        <Input className="userInput" type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="inputField">
                        <label>Password</label>
                        <Input className="userInput" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button className="eyeButton" img={!showPassword ? "/visible.png" : "/invisible.png"} onClick={() => setShowPassword(!showPassword)} />

                    </div>
                    <a className="forgot">Forgot password?</a>
                    <Button imgstyle={{ width: '0px', height: '0px' }} text="Continue" onClick={handleContinue} className={username.length === 0 || password.length === 0 ? 'invalidBlackContinueButton' : 'validBlackContinueButton'} extrastyles={{ marginTop: '150px' }} />
                    {invalid &&
                        <ErrorMessage image='/rederror.png' text='The password you entered is incorrect.' className='errorMessage' />
                    }
                    <p className="footerText">
                        By continuing, you agree to our <a>Terms of Service</a>, <a>Privacy Policy</a> and <a>Cookie Use</a>.
                    </p>
                </div>
            }
        </div >
    )
}

export default PopUp