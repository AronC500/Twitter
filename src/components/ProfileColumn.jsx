import './profileColumn.css'
import Post from './post.jsx'
import Button from './button.jsx'
import { useState } from 'react'

function ProfileColumn({ profile, posts = [] }) {
    const [activeTab, setActiveTab] = useState('Posts')
    const tabs = ['Posts', 'Replies', 'Reposts', 'Media']

    return (
        <div className="profileColumn">
            <div className="profileHeader">
                <img className="profileBackIcon" src="" alt="" />
                <div className="profileHeaderText">
                    <h1 className="profileHeaderName">{profile.name}</h1>
                    <span className="profileHeaderCount">{profile.postCount} posts</span>
                </div>
                <div className="profileHeaderIcons">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>

            <div className="profileBannerWrap">
                <img className="profileBanner" src='' alt="" />
                <img className="profileAvatar" src='' alt="" />
                <Button className="editProfileButton" text="Edit profile" />
            </div>

            <div className="profileInfo">
                <div className="profileNameRow">
                    <span className="profileName">{profile.name}</span>
                    <Button className="getVerifiedButton" img="/bluecheckmark.png" text="Get verified" />
                </div>
                <span className="profileHandle">@{profile.handle}</span>

                {profile.bio && (
                    <p className="profileBio">
                        <a className="profileBioLink" href={profile.bioLink}>{profile.bioLink.replace('https://', '')}</a>
                        {' '}{profile.bio}
                    </p>
                )}

                <Button className="profileJoined">
                    <img src="/graycalendar.png" alt="" />
                    <span>Joined {profile.joined}</span>
                    <img className="profileJoinedArrow" src="/grayexpandss.png" alt="" />
                </Button>

                <div className="profileStatsRow">
                    <span><strong>{profile.following}</strong> Following</span>
                    <span><strong>{profile.followers}</strong> Followers</span>
                </div>
            </div>

            <div className="profileTabs">
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

            <div className="profilePostList">
                {posts.map((post, index) => (
                    <div key={index}>
                        <Post {...post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileColumn