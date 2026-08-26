import Sidebar from './components/Sidebar.jsx'
import SettingsColumn from './components/SettingsColumn.jsx'
import { profile } from './data.js'

function Settings() {
    return (
        <div className="appLayout" style={{ paddingRight: '29px' }}>
            <Sidebar
                activeLabel="Settings"
                profileName={profile.name}
                profileHandle={profile.handle}
                profileAvatar={profile.avatarSrc}
            />
            <SettingsColumn />
        </div>
    )
}

export default Settings