import './post.css'
import Button from './button.jsx'
import { useState } from 'react'

function Post({ avatarSrc, name, handle, verified, time, text, imageSrc }) {
    const [ButtonImg, setButtonImg] = useState('/grayheart.png')

    return (
        <div className="post">
            <img className="postAvatar" src={avatarSrc} alt="" />

            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeader1">
                        <span className="postName">{name}</span>
                        {verified && <img style={{ width: '20px' }} src='/bluecheckmark.png' />}
                        <span className="postHandle">@{handle}</span>
                        <span className="postDot">·</span>
                        <span className="postTime">{time}</span>
                    </div>

                    <Button className="postHeader2" img="/graydots.png" />
                </div>

                <div className="postText" style={{ marginBottom: imageSrc ? '10px' : '5px' }}>{text}</div>

                {imageSrc &&
                    <div className="imgcontainer">
                        <img className="postImage" src={imageSrc} alt="" />
                    </div>
                }

                <div className="postStats">
                    <div className="postStatsFirst">
                        <div className="statInfo">
                            <Button className="chatButton" img="/graychat.png" />
                            <div className="statNumber">1</div>
                        </div>
                        <div className="statInfo">
                            <Button className="repostButton" img="/grayrepost.png" />
                            <div className="statNumber"></div>
                        </div>
                        <div className="statInfo" onClick={() => ButtonImg === '/redfilledheart.png' ? setButtonImg('/redheart.png') : setButtonImg('/redfilledheart.png')} onMouseEnter={() => ButtonImg !== '/redfilledheart.png' ? setButtonImg('/redheart.png') : {}} onMouseLeave={() => ButtonImg !== '/redfilledheart.png' ? setButtonImg('/grayheart.png') : {}} >
                            <Button className="heartButton" img={ButtonImg} />
                            <div className="statNumber" style={ButtonImg === '/redheart.png' || ButtonImg === '/redfilledheart.png' ? { color: 'red' } : {}}>1</div>
                        </div>
                        <div className="statInfo">
                            <Button className="statButton" img="/graybars.png" />
                            <div className="statNumber"></div>
                        </div>
                    </div>

                    <div className="postStatsSecond">
                        <div className="statInfo">
                            <Button className="bookmarkButton" img="/GRAYBOOKMARK.png" />
                            <div className="statNumber"></div>
                        </div>
                        <div className="statInfo">
                            <Button className="shareButton" img="/grayshare.png" />
                            <div className="statNumber"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post