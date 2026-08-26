import Sidebar from './components/Sidebar.jsx'
import GrokColumn from './components/GrokColumn.jsx'
import { profile } from './data.js'
function Grok() {
    return (
        <div className="appLayout" style={{ paddingRight: '105px' }}>
            <Sidebar
                activeLabel="Grok"
                profileName={profile.name}
                profileHandle={profile.handle}
                profileAvatar={profile.avatarSrc}
            />

            <GrokColumn />
        </div>
    )
}

export default Grok