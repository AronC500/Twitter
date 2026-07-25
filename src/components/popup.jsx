import { useState, useEffect } from 'react'
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

const topics = [
    { name: 'News', icon: '/whitenews.png' },
    { name: 'Sports', icon: '/whiteball.png' },
    { name: 'Business & Finance', icon: '/whitebusiness.png' },
    { name: 'Technology', icon: '/whitetechnology.png' },
    { name: 'Politics', icon: '/whitepodium.png' },
    { name: 'Memes', icon: '/whitememe.png' },
    { name: 'Cryptocurrency', icon: '/whitecurrency.png' },
    { name: 'Financial Markets & Insights', icon: '/whitechart.png' },
    { name: 'Fashion', icon: '/whitefashion.png' },
    { name: 'Gaming', icon: '/whitecontroller.png' },
    { name: 'Movies & TV', icon: '/whitefilm.png' },
    { name: 'Music', icon: '/whitemusical.png' },
    { name: 'Travel', icon: '/whiteairplane.png' },
    { name: 'Food', icon: '/whiteburger.png' },
    { name: 'Science', icon: '/whitecell.png' },
    { name: 'Health & Fitness', icon: '/whitehealth.png' },
    { name: 'Basketball', icon: '/whitebasketball.png' },
    { name: 'Baseball', icon: '/whitebaseball.png' },
    { name: 'American Football', icon: '/whiteamericanfootball.png' },
    { name: 'Soccer', icon: '/whitesoccer.png' },
    { name: 'Celebrity', icon: '/whitecelebrity.png' },
    { name: 'Pets', icon: '/whitepaw.png' },
]
function PopUp({ type, onClose, userInput }) {
    const navigate = useNavigate()
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [showInterests, setShowInterests] = useState(false)
    const [selectedTopics, setSelectedTopics] = useState([])
    const [showProfilePicture, setShowProfilePicture] = useState(true)

    const [showNotifications, setShowNotifications] = useState(false)
    const RequiredTopicCount = 3

    const [username, setUsername] = useState(userInput || '')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [phoneFocused, setPhoneFocused] = useState(false)
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])
    const [usePasswordForPhone, setUsePasswordForPhone] = useState(false)
    const [showNormalLogin, setShowNormalLogin] = useState(type === 'NormalLogin' || false)
    const [recoveryInput, setRecoveryInput] = useState('')
    const maskedEmail = 'ar**********@*****.com'
    const maskedPhone = '**********85'
    const [showFindAccount, setShowFindAccount] = useState(false)
    const [showRecoveryMethod, setShowRecoveryMethod] = useState(false)
    const [recoveryMethod, setRecoveryMethod] = useState('')

    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneLoginValue, setPhoneLoginValue] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [showVerification, setShowVerification] = useState(false)
    const [search, setSearch] = useState('')
    const identifierEmpty = usePasswordForPhone ? phoneLoginValue.length === 0 : username.length === 0
    const isFormInvalid = identifierEmpty || password.length === 0

    const testpassword = '1'
    const testverification = '111111'

    function handleContinue() {
        if (password !== testpassword) {
            setInvalid(true)
            return
        }
        navigate('/home')
        setInvalid(false)
    }
    function handlekeyPress(e) {
        if (e.key >= "0" && e.key <= "9") {
            setVerificationCode((prev) => {
                const next = [...prev];
                for (let i = 0; i < next.length; i++) {
                    if (next[i] === "") {
                        next[i] = e.key;
                        break;
                    }
                }
                return next;
            });
        }
        if (e.key === 'Backspace') {
            if (invalid) {
                setInvalid(false)
            }
            setVerificationCode((prev) => {
                const next = [...prev];
                for (let i = next.length - 1; i >= 0; i--) {
                    if (next[i] !== "") {
                        next[i] = "";
                        break;
                    }
                }
                return next;
            });
        }


    }
    useEffect(() => {
        if (!showVerification) {
            return
        }

        window.addEventListener('keydown', handlekeyPress)
        return () => {
            window.removeEventListener('keydown', handlekeyPress)
        }
    }, [verificationCode, showVerification, invalid])
    function handlePhoneContinue() {
        const isValid = isValidPhoneNumber(phoneNumber, selectedCountry.isoCode)
        if (!isValid) {
            setInvalid(true)
            setShowDropdown(false)
            return
        }

        setInvalid(false)
        setShowVerification(true)

    }
    function enterCode() {
        if (verificationCode[0] === '') {
            return
        }
        if (verificationCode.join('') !== testverification) {
            setInvalid(true)
        }

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
    function usePasswordInstead() {
        setUsePasswordForPhone(true)
        setShowVerification(false)
        setShowNormalLogin(true)
        setInvalid(false)
        setPhoneLoginValue(
            phoneNumber.includes(selectedCountry.code) ? phoneNumber : selectedCountry.code + phoneNumber
        )
    }
    function findAccount() {
        if (recoveryInput.length === 0) {
            return
        }
        if (recoveryInput !== 'b') {
            setInvalid(true)
        }
        else {
            setInvalid(false)
            setShowRecoveryMethod(true)
            setShowFindAccount(false)

        }
    }
    function checkNewPassword() {
        if (newPassword.length === 0) {
            return
        }
        if (newPassword.length < 8) {
            setInvalid(true)
        }
        else {
            setNewPassword(newPassword)
            setInvalid(false)
        }
    }
    function RecoveryMethod(method) {
        if (method === 'email') {
            setRecoveryMethod('email')
        }
        else {
            setRecoveryMethod('phone')
        }
        setShowVerification(true)
        setShowRecoveryMethod(false)
    }
    function openForgotPasswordView() {
        setShowFindAccount(true)
        setShowNormalLogin(false)
        setRecoveryInput(phoneNumber === '' ? username : phoneNumber)
        setInvalid(false)
    }
    function backToLoginFromFindAccount() {
        setShowFindAccount(false)
        setShowNormalLogin(true)
        setInvalid(false)
        setRecoveryInput('')
    }
    function backToPhoneEntry() {
        setShowNewPassword(false)
        setShowRecoveryMethod(false)
        setShowFindAccount(false)
        setShowVerification(false)
        setShowNormalLogin(false)
        setInvalid(false)
    }
    function toggleTopic(name) {
        if (selectedTopics.includes(name)) {
            setSelectedTopics(selectedTopics.filter((topic) => topic !== name))
        } else {
            setSelectedTopics([...selectedTopics, name])
        }
    }
    function uploadPicture() {

    }

    const filteredCountries = countries.filter((element) =>
        element.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="overlaycontainer">
            {showNormalLogin &&
                <div className="overlay">
                    <Button img="/whitearrow.png" className="backButton" onClick={usePasswordForPhone ? () => {
                        setShowNormalLogin(false)
                        setUsePasswordForPhone(false)
                        setShowVerification(false)
                        setInvalid(false)
                        setVerificationCode(['', '', '', '', '', ''])
                    }
                        : onClose} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Login</h1>
                    <Input className="userInput" type="text" placeholder={usePasswordForPhone ? "Phone" : "Username"} value={usePasswordForPhone ? phoneLoginValue : username} onChange={(e) => {
                        if (usePasswordForPhone) {
                            setPhoneLoginValue(e.target.value)
                        }
                        else {
                            setUsername(e.target.value)
                        }

                    }
                    } />
                    <div className="inputWrapper">
                        <Input
                            className={invalid ? 'userInputInvalid' : 'userInput'}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button className="eyeButton" img={!showPassword ? "/visible.png" : "/invisible.png"} onClick={() => setShowPassword(!showPassword)} />

                    </div>
                    {invalid &&
                        <ErrorMessage image='/rederror.png' text='The password you entered is incorrect.' className='errorMessage' />
                    }

                    <div style={{ width: '394px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Button onClick={openForgotPasswordView} className="forgot" text="Forgot password?" />
                    </div>

                    <Button
                        imgstyle={{ width: '0px', height: '0px' }}
                        text="Continue"
                        onClick={isFormInvalid ? () => { } : handleContinue}
                        className={isFormInvalid ? 'invalidBlackContinueButton' : 'validBlackContinueButton'}
                        extrastyles={{ marginTop: '150px' }}
                    />

                    <p className="footerText">
                        By continuing, you agree to our <a>Terms of Service</a>, <a>Privacy Policy</a> and <a>Cookie Use</a>.
                    </p>
                </div>
            }

            {type === 'phone' && !showVerification && !showNormalLogin && !showFindAccount && !showRecoveryMethod && !showNewPassword && !showInterests && !showNotifications && !showProfilePicture &&
                < div className="overlay">
                    <Button img="/whitearrow.png" className="backButton" onClick={onClose} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Enter your phone number</h1>
                    <div className="phoneFieldContainer" >
                        <div className={phoneFocused && !invalid ? 'phoneFieldFocused' : !invalid ? 'phoneField' : 'phoneFieldError'}>
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
                    {invalid &&
                        <ErrorMessage image='/rederror.png' text='Please enter a valid phone number.' className='errorMessage' />
                    }

                    <p className="phoneDisclaimer">
                        We'll send an SMS verification code. By entering your number, you agree to receive
                        transactional messaging about your account. Others will be able to find you by phone number.
                    </p>
                    <a className="phonePrivacyLink">
                        <span>Privacy Options</span>
                        <img src='/grayexpand.png' style={{ width: '18px', height: '18px' }} />
                    </a>

                    <Button text="Continue" onClick={phoneNumber.length === 0 ? () => { } : handlePhoneContinue} imgstyle={{ width: '0px', height: '0px' }} className={phoneNumber.length === 0 ? 'invalidBlackContinueButton' : 'validBlackContinueButton'} extrastyles={{ marginTop: '5px' }}
                    />
                </div>
            }
            {
                showVerification &&
                <div className="overlay" style={{ gap: '17px' }}>
                    <Button img="/whitearrow.png" className="backButton" onClick={() => {
                        setShowVerification(false)
                        setInvalid(false)
                        setVerificationCode(['', '', '', '', '', ''])
                    }} />
                    {recoveryMethod === '' ? <Button className="passwordLink" text='Use password' onClick={usePasswordInstead}></Button> : <div></div>}
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">We sent you a security code</h1>
                    <p className="verificationSubtext">
                        {recoveryMethod === 'email' ? `The code was sent to ${maskedEmail}` : recoveryMethod === 'phone' ? `The code was sent to ${maskedPhone}` : 'The code was sent to your phone'}
                    </p>
                    <div className="verificationContainer">
                        {verificationCode.map((element, index) => {
                            const nextEmptyIndex = verificationCode.findIndex((element) => element === '')
                            const isActive = index === nextEmptyIndex

                            return (
                                <div key={index} className='codeBox'>
                                    {element}
                                    {isActive && <div className="codeBoxAnimation" style={{ fontSize: '30px' }}>|</div>}
                                </div>
                            )
                        })}
                    </div>

                    {invalid &&
                        <ErrorMessage image='/rederror.png' text='Invalid code. Double-check and enter it again.' className='errorMessage' extrastyles={{ marginTop: '-8px' }} />
                    }

                    <p className="footerText" style={{ textAlign: 'left', fontSize: '14px' }} >
                        Didn't receive a code? <a style={{ fontWeight: 'bold' }}>Send again</a>
                    </p>

                    <Button text="Continue" className={verificationCode[0] === '' ? 'invalidBlackContinueButton verificationContinueButton' : 'validBlackContinueButton verificationContinueButton'} extrastyles={{ marginTop: '200px' }} onClick={enterCode} />
                </div>
            }
            {
                showFindAccount &&
                <div className="overlay" style={{ gap: '15px' }}>
                    <Button img="/whitearrow.png" className="backButton" onClick={backToLoginFromFindAccount} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Find your account</h1>
                    <p className="footerText" style={{ textAlign: 'left', fontSize: '13px', marginTop: '-7px' }}>Enter your email or username to reset your password.</p>

                    <Input
                        className={invalid ? 'userInputInvalid' : 'userInput'}
                        type="text"
                        placeholder="Email or username"
                        value={recoveryInput}
                        onChange={(e) => setRecoveryInput(e.target.value)}
                    />

                    {invalid &&
                        <ErrorMessage image='/rederror.png' text="We couldn't find an active X account with that username." className='errorMessage' extrastyles={{ marginTop: '-8px' }} />
                    }

                    <Button
                        text="Continue"
                        className={recoveryInput.length === 0 ? 'invalidBlackContinueButton' : 'validBlackContinueButton'}
                        extrastyles={{ marginTop: '285px' }}
                        onClick={findAccount}
                    />
                </div>
            }

            {
                showRecoveryMethod &&
                <div className="overlay" style={{ height: '630px', gap: '10px' }}>
                    <Button img="/whitearrow.png" className="backButton" onClick={() => {
                        setShowRecoveryMethod(false)
                        setShowFindAccount(true)
                    }} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Where should we send a code?</h1>
                    <p className="footerText" style={{ textAlign: 'left', fontSize: '13.5px', marginTop: '-5px', paddingBottom: '20px' }}>Choose a recovery method to continue.</p>

                    <Button className="recoveryOption" text="Email" onClick={() => RecoveryMethod('email')}>
                        <div className="recoveryOptionValue">{maskedEmail}</div>
                    </Button>

                    <Button className="recoveryOption" text="Text message" onClick={() => RecoveryMethod('phone')}>
                        <div className="recoveryOptionValue">{maskedPhone}</div>
                    </Button>
                </div>
            }
            {
                showNewPassword &&
                <div className="overlay" style={{ gap: '10px' }} >
                    <Button img="/whitearrow.png" className="backButton" onClick={backToPhoneEntry} />
                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading">Choose a new password</h1>
                    <p className="footerText" style={{ textAlign: 'left', fontSize: '13.5px', margin: '0px', paddingBottom: '8px' }}>Make sure it is at least 8 characters.</p>

                    <div className="inputWrapper">
                        <Input
                            className={invalid ? 'userInputInvalid' : 'userInput'}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="New password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <Button className="eyeButton" img={!showPassword ? "/visible.png" : "/invisible.png"} onClick={() => setShowPassword(!showPassword)} />
                    </div>

                    {invalid &&
                        <ErrorMessage image='/rederror.png' text='Please enter a password with at least 8 characters.' className='errorMessage' extrastyles={{ marginTop: '-3px' }} />
                    }

                    <Button
                        text="Continue"
                        className={newPassword.length === 0 ? 'invalidBlackContinueButton' : 'validBlackContinueButton'}
                        extrastyles={{ marginTop: '290px' }}
                        onClick={checkNewPassword}
                    />
                </div>
            }
            {
                showInterests &&
                <div className="interestsOverlay ">
                    <h1 className="heading" >Pick your interests</h1>
                    <p className="interestsSubtext">Select {RequiredTopicCount} topics to continue</p>

                    <div className="topicGrid">
                        {topics.map((element) => (
                            <Button
                                key={element.name}
                                className={selectedTopics.includes(element.name) ? 'topicSelected' : 'topic'}
                                onClick={() => toggleTopic(element.name)}
                            >
                                <img src={element.icon} />
                                <span>{element.name}</span>
                            </Button>
                        ))}
                    </div>

                    <Button
                        text="Continue"
                        className={selectedTopics.length >= RequiredTopicCount ? 'validBlackContinueButton' : 'invalidBlackContinueButton'}
                        onClick={selectedTopics.length >= RequiredTopicCount ? () => navigate('/home') : () => { }}
                        extrastyles={{ marginTop: '24px' }}
                    />
                </div>
            }
            {
                showNotifications &&
                <div className="overlay" style={{ gap: '10px' }} >
                    <Button img="/whitearrow.png" className="backButton" onClick={() => { }} />
                    <Button className="notNow" text='Not now' onClick={() => navigate('/home')}></Button>

                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading" style={{ textAlign: 'center', marginTop: '75px' }}>Never miss a moment </h1>
                    <p className="footerText" style={{ textAlign: 'center', fontSize: '13.5px', margin: '0px', paddingBottom: '8px', width: '600px' }}>Get notified when your posts go viral, people follow you or send you messages.</p>
                    <img src='/notificationimage.jpeg' style={{ width: '600px' }} />

                    <Button
                        text="Enable Notifications"
                        className='notification'
                        extrastyles={{ marginTop: '75px' }}
                        onClick={() => navigate('/home')}
                        img='/blacknotification.png'
                    />
                </div>
            }
            {
                showProfilePicture &&
                <div className="overlay" style={{ gap: '10px' }} >
                    <Button img="/whitearrow.png" className="backButton" onClick={() => { }} />

                    <img className="xlogo" src="/xlogo.png" />
                    <h1 className="heading" >Set a profile picture </h1>
                    <p className="footerText" style={{ textAlign: 'left', fontSize: '13.5px', margin: '0px', paddingBottom: '8px' }}>Have a favorite selfie? Upload it now.</p>
                    <div style={{ width: '180px', height: '180px', marginTop: '50px', position: 'relative', borderRadius: '9999px' }}>
                        <img src='/userr.png' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '9999px'
                        }} />
                        <Button className="changeProfilePic" >
                            <img src='/whitecamera.png' style={{ width: '25px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />


                        </Button>
                    </div>
                    <Button
                        text="Upload a profile photo"
                        className='notification'
                        extrastyles={{ width: '300px', marginTop: '15px' }}
                        onClick={uploadPicture}
                    />
                    <Button
                        text="Skip for now"
                        className='notification'
                        extrastyles={{ marginTop: '100px', color: 'white', backgroundColor: 'rgb(38, 38, 39)' }}
                    />
                </div>}
        </div >
    )
}

export default PopUp