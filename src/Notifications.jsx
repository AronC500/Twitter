
import Sidebar from './components/Sidebar.jsx'
import RightPanel from './components/RightPanel.jsx'
import { trends, suggestions, profile } from './data.js'
import NotificationColumn from './components/NotificationColumn.jsx'

function Notifications() {


    return (
        <div className="appLayout">
            <Sidebar
                activeLabel="Notifications"
                profileName={profile.name}
                profileHandle={profile.handle}
                profileAvatar={profile.avatarSrc}
            />

            <NotificationColumn />


            <RightPanel trends={trends} suggestions={suggestions} section="History" />
        </div>
    )
}

export default Notifications