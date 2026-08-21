import './Home.css'
import Sidebar from './components/Sidebar.jsx'
import FeedColumn from './components/FeedColumn.jsx'
import RightPanel from './components/RightPanel.jsx'
import { trends, suggestions, newsItems, profile, posts } from './data.js'

function Home() {
    return (
        <div className="appLayout">
            <Sidebar
                activeLabel="Home"
                profileName={profile.name}
                profileHandle={profile.handle}
                profileAvatar={profile.avatarSrc}
            />

            <FeedColumn posts={posts} composeAvatarSrc={profile.avatarSrc} />

            <RightPanel
                newsItems={newsItems}
                trends={trends}
                suggestions={suggestions}
                section="Home"
            />
        </div>
    )
}

export default Home