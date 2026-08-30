import './sidebar.css'
import Button from './button.jsx'
import { useNavigate } from 'react-router-dom'


function Sidebar({ activeLabel = 'Home', profileName, profileHandle, profileAvatar }) {
    const navigate = useNavigate()
    const navItems = [
        { label: 'Home', img: '', onClick: () => navigate('/home') },
        { label: 'Explore', img: '', onClick: () => navigate('/explore') },
        { label: 'Notifications', img: '', onClick: () => navigate('/notifications') },
        { label: 'Chat', img: '', onClick: () => navigate('/chat') },
        { label: 'Grok', img: '', onClick: () => navigate('/grok') },
        { label: 'History', img: '', onClick: () => navigate('/history') },
        { label: 'Premium', img: '', onClick: () => navigate('/premium', { state: { activeLabel } }) },
        { label: 'Profile', img: '', onClick: () => navigate('/profile') },
        { label: 'Settings', img: '', onClick: () => navigate('/settings') },
    ]
    return (
        <div className="sidebar" style={activeLabel === 'Chat' ? { marginRight: '3px' } : {}}>
            <Button className="homeLogo" onClick={() => navigate('/home')}>
                <img className="sidebarLogo" src="/xlogo.png" alt="" />
            </Button>

            <nav className="sidebarNav">
                {navItems.map(item => (
                    <Button key={item.label}
                        className={item.label === activeLabel ? 'sidebarItemActive' : 'sidebarItem'} onClick={item.onClick} extrastyles={activeLabel === 'Chat' ? { paddingRight: '15px' } : {}}>
                        <img className="sidebarIcon" src={item.img} alt="" />
                        {activeLabel !== 'Chat' && <span>{item.label}</span>}
                    </Button>
                ))}
            </nav>

            <Button className="sidebarPostButton" text={activeLabel === 'Chat' ? "" : "Post"} extrastyles={activeLabel === 'Chat' ? { marginRight: '0px', padding: '11px' } : {}}>
                {activeLabel === 'Chat' &&
                    <img src="/premiumicon.png" alt="" />
                }
            </Button>
            <Button className="sidebarProfile" extrastyles={activeLabel === 'Chat' ? { width: 'auto', paddingRight: '10px' } : {}}>
                <img className="sidebarProfileAvatar" src={profileAvatar} alt="" />
                {activeLabel !== 'Chat' &&
                    <>
                        <div className="sidebarProfileText">
                            <span className="sidebarProfileName">{profileName}</span>
                            <span className="sidebarProfileHandle">@{profileHandle}</span>
                        </div>
                        <img className="sidebarProfileDots" src="/whitedot.png" alt="" />
                    </>
                }
            </Button>
        </div>
    )
}

export default Sidebar