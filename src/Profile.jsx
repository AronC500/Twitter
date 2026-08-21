import Sidebar from './components/Sidebar.jsx'
import ProfileColumn from './components/ProfileColumn.jsx'
import RightPanel from './components/RightPanel.jsx'
import { trends, suggestions, profileBio, posts } from './data.js'



function Profile() {
    return (
        <div className="appLayout">
            <Sidebar
                activeLabel="Profile"
                profileName={profileBio.name}
                profileHandle={profileBio.handle}
                profileAvatar={profileBio.avatarSrc}
            />

            <ProfileColumn profile={profileBio} posts={posts} />

            <RightPanel
                suggestions={suggestions}
                trends={trends}
                section='Profile'
            />
        </div>
    )
}

export default Profile