import { useState } from 'react'
import './History.css'
import Sidebar from './components/Sidebar.jsx'
import RightPanel from './components/RightPanel.jsx'
import HistoryEmptyState from './components/HistoryEmptyState.jsx'
import Button from './components/button.jsx'
import { trends, suggestions, profile } from './data.js'

function History() {
    const [activeTab, setActiveTab] = useState('bookmarks')
    const [showLikesModal, setShowLikesModal] = useState(false)

    function handleTabClick(tab) {
        setActiveTab(tab)
    }

    return (
        <div className="appLayout">
            <Sidebar
                activeLabel="History"
                profileName={profile.name}
                profileHandle={profile.handle}
                profileAvatar={profile.avatarSrc}
            />

            <div className="historyColumn">
                <div className="historyHeader">
                    <img className="historyBackIcon" src="" alt="" />
                    <h1 className="historyTitle">History</h1>
                    {activeTab === 'bookmarks' &&
                        <img className="historySearchIcon" src="" alt="" />

                    }
                    {activeTab === 'likes' &&
                        <Button className="likesInfoButton" onClick={() => setShowLikesModal(true)}>
                            <img className="historySearchIcon" src="" alt="" />
                        </Button>

                    }
                </div>

                <div className="historyTabs">
                    <Button
                        className={activeTab === 'bookmarks' ? 'historyTabActive' : 'historyTab'}
                        onClick={() => handleTabClick('bookmarks')}
                    >
                        <div className="historyTabsInner">
                            <img className="historyTabIcon" src="" alt="" />
                            <span>Bookmarks</span>
                        </div>
                    </Button>
                    <Button
                        className={activeTab === 'likes' ? 'historyTabActive' : 'historyTab'}
                        onClick={() => handleTabClick('likes')}
                    >
                        <div className="historyTabsInner">
                            <img className="historyTabIcon" src="" alt="" />
                            <span>Likes</span>
                        </div>
                    </Button>
                </div>

                {activeTab === 'bookmarks' && (
                    <HistoryEmptyState
                        title="Save posts for later"
                        description="Bookmark posts to easily find them again in the future."
                    />
                )}

                {activeTab === 'likes' && (
                    <HistoryEmptyState
                        title="Like some posts"
                        description="Tap the heart on any post to show it some love. When you do, it'll show up here."
                    />
                )}
                {activeTab === 'likes' && showLikesModal && (
                    <div className="likesModalOverlay">
                        <div className="likesModal">
                            <Button className="likesModalClose" onClick={() => setShowLikesModal(false)}>
                                <img src="/whitex.png" alt="" />
                            </Button>
                            <h2 className="likesModalTitle">Likes</h2>
                            <p className="likesModalText">Your likes are private. Only you can see them.</p>
                            <Button className="likesModalButton" onClick={() => setShowLikesModal(false)}>Got it</Button>
                        </div>
                    </div>
                )}
            </div>

            <RightPanel trends={trends} suggestions={suggestions} section="History" />
        </div>
    )
}

export default History