import { useState, useRef } from 'react'
import './popup.css'
import ErrorMessage from './errorMessage.jsx'
import Input from './input.jsx'
import Button from './button.jsx'
import { useNavigate } from 'react-router-dom'
import { isValidPhoneNumber } from 'libphonenumber-js'

const countries = [
    { name: 'United States', code: '+1', flag: '🇺🇸', isoCode: 'US' },
    { name: 'Afghanistan', code: '+93', flag: '🇦🇫', isoCode: 'AF' },
    { name: 'Albania', code: '+355', flag: '🇦🇱', isoCode: 'AL' },
    { name: 'Algeria', code: '+213', flag: '🇩🇿', isoCode: 'DZ' },
]

function PopUp({ type, onClose }) {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [phoneFocused, setPhoneFocused] = useState(false)

    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [search, setSearch] = useState('')

    const testpassword = '1'

    function handleContinue() {
        if (password !== testpassword) {
            setInvalid(true)
            return
        }
        navigate('/home')
        setInvalid(false)
    }

    function handlePhoneContinue() {
        const isValid = isValidPhoneNumber(phoneNumber, selectedCountry.isoCode)
        if (!isValid) {
            setInvalid(true)
            return
        }

        setInvalid(false)
    }

    function testNumber(e) {
        const onlyNumbers = /^[0-9]*$/
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab']

        if (allowedKeys.includes(e.key)) {
            return
        }
        if (onlyNumbers.test(e.target.value)) {
            setPhoneNumber(e.target.value)
        }
    }

    const filteredCountries = countries.filter((element) =>
        element.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="overlaycontainer">
            {type === 'NormalLogin' &&
                <div className="overlay">
                    <Button img="/whitearrow.png" className="backButton" onClick={onClose} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Login</h1>
                    <Input className="userInput" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div className="inputWrapper">
                        <Input className='userInput' type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button className="eyeButton" img={!showPassword ? "/visible.png" : "/invisible.png"} onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <a className="forgot">Forgot password?</a>
                    <Button imgstyle={{ width: '0px', height: '0px' }} text="Continue" onClick={password.length === 0 || username.length === 0 ? () => { } : handleContinue} className={username.length === 0 || password.length === 0 ? 'invalidBlackContinueButton' : 'validBlackContinueButton'} extrastyles={{ marginTop: '150px' }} />
                    {invalid &&
                        <ErrorMessage image='/rederror.png' text='The password you entered is incorrect.' className='errorMessage' />
                    }
                    <p className="footerText">
                        By continuing, you agree to our <a>Terms of Service</a>, <a>Privacy Policy</a> and <a>Cookie Use</a>.
                    </p>
                </div>
            }

            {type === 'phone' &&
                <div className="overlay">
                    <Button img="/whitearrow.png" className="backButton" onClick={onClose} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Enter your phone number</h1>
                    <div className="phoneFieldContainer" >
                        <div className={phoneFocused ? 'phoneFieldFocused' : !invalid ? 'phoneField' : 'phoneFieldError'}>
                            <Button className="countrySelector"
                                onClick={() => {
                                    setPhoneFocused(true)
                                    setShowDropdown(!showDropdown)
                                    if (showDropdown) {
                                        setPhoneFocused(false)

                                    }
                                }
                                } text={`${selectedCountry.flag} ${selectedCountry.code}`}>
                                <img src="/whitexpand.png" style={{ height: '12px', width: '12px' }} />
                            </Button>
                            <div className="phoneDivider" />
                            <Input type="tel" placeholder="Phone number" className="phoneInput" value={phoneNumber} onChange={testNumber} onFocus={() => { setPhoneFocused(true) }} onBlur={() => {
                                if (!showDropdown) {
                                    setPhoneFocused(false)
                                }
                            }} />
                        </div>
                        {showDropdown &&
                            <div className="countryDropdown">
                                <div className="countrySearchContainer">
                                    <img src="/magnify.png" />
                                    <Input type="text" placeholder='Search' className="countrySearchInput" value={search} onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                <div className="countryList">
                                    {filteredCountries.map((element) => (
                                        <Button key={element.name} className="countryOption"
                                            onClick={() => {
                                                setSelectedCountry(element)
                                                setShowDropdown(false)
                                                setSearch('')
                                            }}
                                        >
                                            <span className="countryOptionLeft">
                                                <span>{element.flag}</span>
                                                <span>{element.name}</span>
                                            </span>
                                            <span>{element.code}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        }

                    </div>
                    <p className="phoneDisclaimer">
                        We'll send an SMS verification code. By entering your number, you agree to receive
                        transactional messaging about your account. Others will be able to find you by phone number.
                    </p>
                    <a className="phonePrivacyLink">
                        <span>Privacy Options</span>
                        <img src='/grayexpand.png' style={{ width: '18px', height: '18px' }} />
                    </a>
                    {invalid &&
                        <ErrorMessage image='/rederror.png' text='Please enter a valid phone number.' className='errorMessage' />
                    }
                    <Button text="Continue" onClick={phoneNumber.length === 0 ? () => { } : handlePhoneContinue} imgstyle={{ width: '0px', height: '0px' }} className={phoneNumber.length === 0 ? 'invalidBlackContinueButton' : 'validBlackContinueButton'} extrastyles={{ marginTop: '5px' }}
                    />
                </div>
            }
        </div >
    )
}

export default PopUp