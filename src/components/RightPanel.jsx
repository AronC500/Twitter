import './rightpanel.css'
import Button from './button.jsx'
import Input from './input.jsx'

function TrendItem({ context, topic, section }) {
    return (
        <Button className="trendItem" extrastyles={section === 'Explore' ? { padding: '0px 16px', paddingTop: '12px' } : {}}>
            <div className="trendItemText">
                <span className="trendContext" >{context}</span>
                <span className="trendTopic" >{topic}</span>
            </div>
            <img className="trendDots" src="/graydots.png" alt="" />
        </Button>
    )
}
function FollowItem({ avatarSrc, name, handle, followsYou, followingBack }) {
    return (
        <Button className="followItem">
            <img className="followAvatar" src={avatarSrc} alt="" />
            <div className="followText">
                <span className="followName">{name}</span>
                <div className="followHandleRow">
                    <span className="followHandle">@{handle}{followsYou ? '...' : ''}</span>
                    {followsYou && <span className="followsYouTag">Follows you</span>}
                </div>
            </div>
            <Button
                className={followingBack ? 'followBackButton' : 'followButton'}
                text={followingBack ? 'Follow back' : 'Follow'}
            />
        </Button>
    )
}

function NewsItem({ headline, meta, avatars, section }) {
    return (
        <Button className="newsItem">
            <div className="newsHeadline" style={section === 'Explore' ? { fontSize: '17.5px' } : {}}>{headline}</div>
            <div className="newsMetaRow">
                <div className="newsAvatars">
                    {avatars.map((src, index) => (
                        <img key={index} className="newsAvatar" src={src} alt="" />
                    ))}
                </div>
                <span className="newsMeta">{meta}</span>
            </div>
        </Button>
    )
}

function RightPanel({ trends, suggestions, newsItems, section }) {
    return (
        <div className="rightPanel">
            {section !== 'Explore' &&
                <div className="searchBarContainer" >
                    <div className="searchBar">
                        <img className="searchIcon" src="" alt="" />
                        <Input className="searchInput" placeholder="Search" />
                    </div>
                </div>
            }
            {section === 'Profile' &&
                <>
                    <div className="stickyGroup" style={{ top: '0px' }}>

                        <div className="panelCard">
                            <h3 className="panelCardTitle">You might like</h3>
                            {suggestions.map((element, index) => (
                                <FollowItem key={index} {...element} />
                            ))}
                            <div className="showMoreLink">Show more</div>
                        </div>

                        <div className="panelCard">
                            <h3 className="panelCardTitle">What's happening</h3>
                            {trends.map((element, index) => (
                                <TrendItem key={index} {...element} />
                            ))}
                            <div className="showMoreLink">Show more</div>
                        </div>
                        <div className="panelFooter">
                            <span>Terms</span> · <span>Privacy</span> · <span>Cookies</span> · <span>Accessibility</span><br />
                            <span>Ads Info</span> · <span>More</span> · <span>© 2026 Aron Corp.</span>
                        </div>
                    </div>

                </>
            }
            {section === 'Home' &&
                <>
                    <div className="panelCard">
                        <div className="premiumBox">
                            <h3 className="panelCardTitle">Subscribe to Premium</h3>
                            <p className="panelCardText">
                                Get rid of ads, see your analytics, boost your replies and unlock 20+ features.
                            </p>
                            <Button className="subscribeButton" text="Subscribe" />
                        </div>
                    </div>
                    <div className="panelCard">
                        <div className="panelCardHeader">
                            <h3 className="panelCardTitle">Today's News</h3>
                            <img className="panelCardClose" src="" alt="" />
                        </div>
                        {newsItems.map((item, index) => (
                            <NewsItem key={index} {...item} />
                        ))}
                    </div>
                    <div className="stickyGroup">
                        <div className="panelCard">
                            <h3 className="panelCardTitle">What's happening</h3>
                            {trends.map((element, index) => (
                                <TrendItem key={index} {...element} />
                            ))}
                            <div className="showMoreLink">Show more</div>
                        </div>
                        <div className="panelCard">
                            <h3 className="panelCardTitle">Who to follow</h3>
                            {suggestions.map((element, index) => (
                                <FollowItem key={index} {...element} />
                            ))}
                            <div className="showMoreLink">Show more</div>
                        </div>
                        <div className="panelFooter">
                            <span>Terms</span> · <span>Privacy</span> · <span>Cookies</span> · <span>Accessibility</span><br />
                            <span>Ads Info</span> · <span>More</span> · <span>© 2026 Aron Corp.</span>
                        </div>
                    </div>
                </>
            }
            {section === 'History' &&
                <div className="stickyGroup">
                    <div className="panelCard">
                        <h3 className="panelCardTitle">What's happening</h3>
                        {trends.map((element, index) => (
                            <TrendItem key={index} {...element} />
                        ))}
                        <div className="showMoreLink">Show more</div>
                    </div>
                    <div className="panelCard">
                        <h3 className="panelCardTitle">Who to follow</h3>
                        {suggestions.map((element, index) => (
                            <FollowItem key={index} {...element} />
                        ))}
                        <div className="showMoreLink">Show more</div>
                    </div>
                    <div className="panelFooter">
                        <span>Terms</span> · <span>Privacy</span> · <span>Cookies</span> · <span>Accessibility</span><br />
                        <span>Ads Info</span> · <span>More</span> · <span>© 2026 Aron Corp.</span>
                    </div>
                </div>

            }
            {section === 'Explore' &&
                <>
                    <hr>
                    </hr>

                    <div className="stickyGroup" style={{ top: '-50px' }}>

                        <div className="panelCard">
                            <div className="panelCardHeader">
                                <h3 className="panelCardTitle">Today's News</h3>
                            </div>
                            {newsItems.map((item, index) => (
                                <NewsItem key={index} {...item} />
                            ))}
                        </div>
                        <div className="panelCard">
                            <h3 className="panelCardTitle">Who to follow</h3>
                            {suggestions.map((element, index) => (
                                <FollowItem key={index} {...element} />
                            ))}
                            <div className="showMoreLink">Show more</div>
                        </div>

                        <div className="panelFooter">
                            <span>Terms</span> · <span>Privacy</span> · <span>Cookies</span> · <span>Accessibility</span><br />
                            <span>Ads Info</span> · <span>More</span> · <span>© 2026 Aron Corp.</span>
                        </div>
                    </div>

                </>
            }
        </div>
    )
}

export default RightPanel
export { TrendItem, FollowItem, NewsItem }