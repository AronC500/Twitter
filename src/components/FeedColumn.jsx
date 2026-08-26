import './feedColumn.css'
import Post from './post.jsx'
import Button from './button.jsx'
import { useState, useRef } from 'react'

function FeedColumn({ posts, composeAvatarSrc }) {
    const [text, setText] = useState('')
    const textareaRef = useRef(null)
    const [activeTab, setActiveTab] = useState('foryou')

    function handleChange(e) {
        setText(e.target.value)
        const textarea = textareaRef.current
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
    }

    return (
        <div className="feedColumn">
            <div className="feedTabs">
                <Button onClick={() => setActiveTab('foryou')} className={activeTab === 'foryou' ? "feedTabActive" : "feedTab"}>
                    <span className="feedTabInner">For you</span>
                </Button>
                <Button onClick={() => setActiveTab('following')} className={activeTab === 'following' ? "feedTabActive" : "feedTab"}>
                    <span className="feedTabInner">Following</span>
                </Button>
            </div>

            <div className="composeBox">
                <img className="composeAvatar" src={composeAvatarSrc} alt="" />
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
    )
}

export default FeedColumn