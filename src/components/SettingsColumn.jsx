import './settingsColumn.css'
import { useState } from 'react'
import Input from './input.jsx'
import { useNavigate } from 'react-router-dom'
import Button from './button.jsx'

//need to do help and privacy.
const settingsItems = [
    { key: 'account', label: 'Your account' },
    { key: 'premium', label: 'Premium' },
    { key: 'security', label: 'Security and account access' },
    { key: 'privacy', label: 'Privacy and safety' },
    { key: 'notifications', label: 'Notifications' },
    { key: 'accessibility', label: 'Accessibility, display, and languages' },
    { key: 'help', label: 'Help Center', external: true }
]

const accountDetailItems = [
    {
        icon: '',
        title: 'Account information',
        description: 'See your account information like your phone number and email address.',
    },
    {
        icon: '',
        title: 'Change your password',
        description: 'Change your password at any time.',
    },
    {
        icon: '',
        title: 'Download an archive of your data',
        description: 'Get insights into the type of information stored for your account.',
    },
    {
        icon: '',
        title: 'Deactivate your account',
        description: 'Find out how you can deactivate your account.',
    },
]

const securityDetailItems = [
    {
        icon: '',
        title: 'Security',
        description: "Manage your account's security.",
    },
    {
        icon: '',
        title: 'Apps and sessions',
        description: 'See information about when you logged into your account and the apps you connected to your account.',
    },
    {
        icon: '',
        title: 'Connected accounts',
        description: 'Manage Google or Apple accounts connected to X to log in.',
    },
    {
        icon: '',
        title: 'Delegate',
        description: 'Manage your shared accounts.',
    },
]

const notificationsDetailItems = [
    {
        icon: '',
        title: 'Filters',
        description: "Choose the notifications you'd like to see — and those you don't.",
    },
    {
        icon: '',
        title: 'Preferences',
        description: 'Select your preferences by notification type.',
    },
]

const accessibilityDetailItems = [
    {
        icon: '',
        title: 'Accessibility',
        description: 'Manage aspects of your X experience such as limiting color contrast and motion.',
    },
    {
        icon: '',
        title: 'Display',
        description: 'Manage your font size, color, and background. These settings affect all the X accounts on this browser.',
    },
    {
        icon: '',
        title: 'Languages',
        description: 'Manage which languages are used to personalize your X experience.',
    },
    {
        icon: '',
        title: 'Data usage',
        description: 'Limit how X uses some of your network data on this device.',
    },
    {
        icon: '',
        title: 'Keyboard shortcuts',
        description: '',
    },
]

function SettingsColumn() {
    const [activeItem, setActiveItem] = useState('account')
    const navigate = useNavigate()
    function listClick(key) {
        if (key === 'premium') {
            navigate('/premium', { state: { activeLabel: 'settings' } })
        }
        if (key === 'help') {
            navigate('/help')
        }
        setActiveItem(key)
    }

    return (
        <div className="settingsLayout">
            <div className="settingsListColumn">
                <h1 className="settingsTitle">Settings</h1>

                <div className="searchBarContainer" style={{ width: '430px', padding: '10px', paddingBottom: '8px', backgroundColor: 'transparent' }}>
                    <div className="searchBar">
                        <img className="searchIcon" src="" alt="" />
                        <Input className="searchInput" placeholder="Search Settings" />
                    </div>
                </div>

                <div className="settingsList">
                    {settingsItems.map(item => (
                        <Button
                            key={item.key}
                            className={activeItem === item.key ? 'settingsItemActive' : 'settingsItem'}
                            onClick={() => listClick(item.key)}
                        >
                            <span>{item.label}</span>
                            <img
                                className={item.key === 'help' ? "helparrow" : "settingsItemArrow"}
                                src={item.key === 'help' ? '/grayarrow.png' : '/grayexpandss.png'}
                                alt=""
                            />
                        </Button>
                    ))}
                </div>
            </div>

            {activeItem === 'account' && (
                <div className="settingsDetailColumn">
                    <h2 className="settingsDetailTitle">Your Account</h2>
                    <p className="settingsDetailIntro">
                        See information about your account, download an archive of your data, or learn about your
                        account deactivation options
                    </p>

                    <div className="settingsDetailList">
                        {accountDetailItems.map((item, index) => (
                            <Button className="settingsDetailItem" key={index}>
                                <img className="settingsDetailIcon" src={item.icon} alt="" />
                                <div className="settingsDetailText">
                                    <span className="settingsDetailItemTitle">{item.title}</span>
                                    <span className="settingsDetailItemDescription">{item.description}</span>
                                </div>
                                <img
                                    className="settingsDetailArrow"
                                    src="/grayexpandss.png"
                                    alt=""
                                />
                            </Button>
                        ))}
                    </div>
                </div>
            )}

            {activeItem === 'security' && (
                <div className="settingsDetailColumn">
                    <h2 className="settingsDetailTitle">Security and account access</h2>
                    <p className="settingsDetailIntro">
                        Manage your account's security and keep track of your account's usage including apps that
                        you have connected to your account.
                    </p>

                    <div className="settingsDetailList">
                        {securityDetailItems.map((item, index) => (
                            <Button className="settingsDetailItem" key={index}>
                                <img className="settingsDetailIcon" src={item.icon} alt="" />
                                <div className="settingsDetailText">
                                    <span className="settingsDetailItemTitle">{item.title}</span>
                                    <span className="settingsDetailItemDescription">{item.description}</span>
                                </div>
                                <img
                                    className="settingsDetailArrow"
                                    src="/grayexpandss.png"
                                    alt=""
                                />
                            </Button>
                        ))}
                    </div>
                </div>
            )}

            {activeItem === 'notifications' && (
                <div className="settingsDetailColumn">
                    <h2 className="settingsDetailTitle">Notifications</h2>
                    <p className="settingsDetailIntro">
                        Select the kinds of notifications you get about your activities, interests, and
                        recommendations.
                    </p>

                    <div className="settingsDetailList">
                        {notificationsDetailItems.map((item, index) => (
                            <Button className="settingsDetailItem" key={index}>
                                <img className="settingsDetailIcon" src={item.icon} alt="" />
                                <div className="settingsDetailText">
                                    <span className="settingsDetailItemTitle">{item.title}</span>
                                    <span className="settingsDetailItemDescription">{item.description}</span>
                                </div>
                                <img
                                    className="settingsDetailArrow"
                                    src="/grayexpandss.png"
                                    alt=""
                                />
                            </Button>
                        ))}
                    </div>
                </div>
            )}

            {activeItem === 'accessibility' && (
                <div className="settingsDetailColumn">
                    <h2 className="settingsDetailTitle">Accessibility, display and languages</h2>
                    <p className="settingsDetailIntro">
                        Manage how X content is displayed to you.
                    </p>

                    <div className="settingsDetailList">
                        {accessibilityDetailItems.map((item, i) => (
                            <Button className="settingsDetailItem" key={i}>
                                <img className="settingsDetailIcon" src={item.icon} alt="" />
                                <div className="settingsDetailText">
                                    <span className="settingsDetailItemTitle">{item.title}</span>
                                    <span className="settingsDetailItemDescription">{item.description}</span>
                                </div>
                                <img
                                    className="settingsDetailArrow"
                                    src="/grayexpandss.png"
                                    alt=""
                                />
                            </Button>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default SettingsColumn