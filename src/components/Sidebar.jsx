import './sidebar.css'
import Button from './button.jsx'
import { useNavigate } from 'react-router-dom'


function Sidebar({ activeLabel = 'Home', profileName, profileHandle, profileAvatar }) {
    const navigate = useNavigate()
    const navItems = [
        { label: 'Home', img: '', onClick: () => navigate('/home') },
        { label: 'Explore', img: '', onClick: () => navigate('/explore') },
        { label: 'Notifications', img: '' },
        { label: 'Chat', img: '', onClick: () => navigate('/chat') },
        { label: 'Grok', img: '' },
        { label: 'History', img: '', onClick: () => navigate('/history') },
        { label: 'Premium', img: '' },
        { label: 'Profile', img: '', onClick: () => navigate('/profile') },
        { label: 'Settings', img: '' },
    ]
    return (
        <div className="sidebar">
            <img className="sidebarLogo" src="" alt="" />

            <nav className="sidebarNav">
                {navItems.map(item => (
                    <div

                        key={item.label}
                        className="sidebarItemHitbox"
                        onClick={item.onClick}
                    >
                        <Button className={item.label === activeLabel ? 'sidebarItemActive' : 'sidebarItem'}>
                            <img className="sidebarIcon" src={item.img} alt="" />
                            <span>{item.label}</span>
                        </Button>
                    </div>
                ))}
            </nav>

            <Button className="sidebarPostButton" text="Post" />

            <Button className="sidebarProfile">
                <img className="sidebarProfileAvatar" src={profileAvatar} alt="" />
                <div className="sidebarProfileText">
                    <span className="sidebarProfileName">{profileName}</span>
                    <span className="sidebarProfileHandle">@{profileHandle}</span>
                </div>
                <img className="sidebarProfileDots" src="/whitedot.png" alt="" />
            </Button>
        </div>
    )
}

export default Sidebar