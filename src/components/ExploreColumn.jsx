import './exploreColumn.css'
import Post from './post.jsx'
import Button from './button.jsx'
import { TrendItem, FollowItem, NewsItem } from './RightPanel.jsx'
import { useState } from 'react'

function ExploreColumn({ posts, newsItems, trends, suggestions }) {
    const [activeTab, setActiveTab] = useState('Explore')
    const tabs = ['Explore', 'Trending', 'News', 'Entertainment']

    return (
        <div className="exploreColumn">
            <div className="exploreStickyHeader">
                <div className="exploreSearchRow">
                    <div className="exploreSearchBar">
                        <img className="exploreSearchIcon" src="" alt="" />
                        <input className="exploreSearchInput" placeholder="Search" />
                    </div>
                    <img className="exploreSettingsIcon" src="" alt="" />
                </div>

                <div className="exploreTabs">
                    {tabs.map(tab => (
                        <Button
                            key={tab}
                            className={activeTab === tab ? 'feedTabActive' : 'feedTab'}
                            onClick={() => setActiveTab(tab)}
                            extrastyles={{ fontSize: '15px' }}
                        >
                            <span className="feedTabInner" style={{ paddingBottom: '12px' }}>{tab}</span>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="panelCard" style={{ border: 'none', width: '100%' }}>
                <h3 className="panelCardTitle">Today's News</h3>
                {newsItems.map((item, index) => (
                    <NewsItem key={index} {...item} section="Explore" />
                ))}
            </div>


            <div className="panelCard" style={{ borderRadius: '0px', borderTop: '1px solid rgb(65, 65, 69)', borderLeft: 'none', borderRight: 'none', borderBottom: 'none', width: '100%', gap: '12px', display: 'flex', flexDirection: 'column', paddingTop: '4px', paddingBottom: '10px' }}>
                {trends.map((item, index) => (
                    <TrendItem key={index} {...item} section="Explore" />
                ))}
            </div>

            <div className="panelCard" style={{ borderRadius: '0px', borderTop: '1px solid rgb(65, 65, 69)', borderLeft: 'none', borderRight: 'none', width: '100%', borderTop: 'none' }}>
                <h3 className="panelCardTitle">Who to follow</h3>
                {suggestions.map((item, index) => (
                    <FollowItem key={index} {...item} />
                ))}
                <div className="showMoreLink">Show more</div>
            </div>

            <div className="explorePostsSection">
                <h2 className="exploreSectionTitle ">Posts For You</h2>
                <div className="explorePostList">
                    {posts.map((post, index) => (
                        <Post key={index} {...post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExploreColumn