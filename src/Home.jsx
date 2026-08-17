import './Home.css'
import Post from './components/post.jsx'
import Sidebar from './components/Sidebar.jsx'
import RightPanel from './components/RightPanel.jsx'
import Button from './components/button.jsx'
import { useState, useRef } from 'react'



const posts = [
    {
        avatarSrc: '/avatar1.jpeg',
        name: 'rron Chen',
        handle: 'rronchen',
        verified: true,
        time: '7h',
        text: 'this gotta be a movie plot where the underdog is the only one who can wld',
        imageSrc: '/luffy.jpeg',
    },
]


const trends = [
    { context: 'Trending in United States', topic: 'Coco 2' },
    { context: 'Trending in United States', topic: 'Incredibles 3' },
    { context: 'Entertainment · Trending', topic: 'Princess Diaries 3' },
]

const suggestions = [
    { avatarSrc: '', name: 'Mohamed Light', handle: 'MohamedLight3' },
    { avatarSrc: '', name: 'Rennegade', handle: 'Renne', followsYou: true, followingBack: true },
    { avatarSrc: '', name: 'DiegoB', handle: 'DiegoB_CR' },
]



const newsItems = [
    {
        headline: 'Home team wins in World Cup semi-final',
        meta: '3 hours ago · Sports · 74.2K posts',
        avatars: [''],
    },
    {
        headline: 'Fan-favorite manga chapter returns',
        meta: 'Trending now · Entertainment · 290 posts',
        avatars: [''],
    },
    {
        headline: 'Streamer begs star player to lead team to victory',
        meta: '3 hours ago · Sports · 7,377 posts',
        avatars: ['', ''],
    },
]

const scores = [
    { flag: '', team: 'France', score: 0 },
    { flag: '', team: 'Spain', score: 2 },
]

function Home() {
    const [text, setText] = useState('')
    const textareaRef = useRef(null)

    function handleChange(e) {
        setText(e.target.value)
        const textarea = textareaRef.current
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
    }

    return (
        <div className="appLayout">
            <Sidebar
                activeLabel="Home"
                profileName="rron Chen"
                profileHandle="rronchen"
                profileAvatar=""
            />

            <div className="feedColumn">
                <div className="feedTabs">
                    <div className="feedTabActive">
                        <span className="feedTabInner">For you</span>
                    </div>
                    <div className="feedTab">
                        <span className="feedTabInner">Following</span>
                    </div>
                </div>

                <div className="composeBox">
                    <img className="composeAvatar" src="" alt="" />
                    <div className="composeBody">
                        <textarea
                            ref={textareaRef}
                            className="composeInput"
                            placeholder="What's happening?"
                            value={text}
                            onChange={handleChange}
                        />
                        <div className="composeToolbar">
                            <div className="composeIcons">
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                            <Button className="postSubmitButton" text="Post" />
                        </div>
                    </div>
                </div>

                <div className="showPostsLink">Show 35 posts</div>

                <div className="feedList">
                    {posts.map((element, index) => (
                        <Post key={index} {...element} />
                    ))}
                </div>
            </div>

            <RightPanel
                newsItems={newsItems}
                scores={scores}
                trends={trends}
                suggestions={suggestions}
            />
        </div>
    )
}

export default Home