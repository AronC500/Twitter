import Sidebar from './components/Sidebar.jsx'
import ExploreColumn from './components/ExploreColumn.jsx'
import RightPanel from './components/RightPanel.jsx'
import { trends, suggestions, posts, newsItems, profileBio } from './data.js'


function Explore() {
    return (
        <div className="appLayout">
            <Sidebar
                activeLabel="Explore"
                profileName={profileBio.name}
                profileHandle={profileBio.handle}
                profileAvatar={profileBio.avatarSrc}
            />

            <ExploreColumn
                posts={posts}
                newsItems={newsItems}
                trends={trends}
                suggestions={suggestions}
            />

            <RightPanel
                suggestions={suggestions}
                trends={trends}
                newsItems={newsItems}
                section='Explore'
            />
        </div>
    )
}

export default Explore