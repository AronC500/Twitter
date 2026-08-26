import './NotificationColumn.css'
import { useState } from 'react'
import HistoryEmptyState from './HistoryEmptyState.jsx'
import Button from './button.jsx'


function NotificationColumn() {
    const [activeTab, setActiveTab] = useState('all')

    function handleTabClick(tab) {
        setActiveTab(tab)
    }

    return (
        <div className="notificationColumn">
            <div className="notificationHeader">
                <h1 className="notificationTitle">Notifications</h1>
                <img className="notificationSearchIcon" src="" alt="" />
            </div>

            <div className="notificationTabs">
                <Button
                    className={activeTab === 'all' ? 'notificationTabActive' : 'notificationTab'}
                    onClick={() => handleTabClick('all')}
                >
                    <div className="notificationTabsInner">
                        <span>All</span>
                    </div>
                </Button>
                <Button
                    className={activeTab === 'mentions' ? 'notificationTabActive' : 'notificationTab'}
                    onClick={() => handleTabClick('mentions')}
                >
                    <div className="notificationTabsInner">
                        <span>Mentions</span>
                    </div>
                </Button>
            </div>

            {activeTab === 'all' && (
                <HistoryEmptyState
                    title="Nothing to see here — yet"
                    description="From likes to reposts and a whole lot more, this is where all the action happens."
                    section="Notifications"
                />
            )}

            {activeTab === 'mentions' && (
                <HistoryEmptyState
                    title="Nothing to see here — yet"
                    description="When someone mentions you, you'll find it here."
                    section="Notifications"
                />
            )}
        </div>
    )
}

export default NotificationColumn