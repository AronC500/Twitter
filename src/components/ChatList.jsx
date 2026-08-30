import { useState } from 'react'
import './chatlist.css'
import Button from './button.jsx'
import Input from './input.jsx'

function ChatListItem({ avatarSrc, name, verified, time, preview, unread, muted, isActive, onClick }) {
    return (
        <div className={isActive ? 'chatListItemActive' : 'chatListItem'} onClick={onClick}>
            <img className="chatListAvatar" src={avatarSrc} alt="" />
            <div className="chatListBody">
                <div className="chatListTopRow">
                    <div className="chatListName">
                        <span>{name}</span>
                        {verified && <img className="chatListVerified" src="" alt="" />}
                    </div>
                    <span className="chatListTime">{time}</span>
                </div>
                <div className="chatListBottomRow">
                    <span className="chatListPreview">{preview}</span>
                    {muted && <img className="chatListMuted" src="" alt="" />}
                    {unread && <span className="chatListUnreadDot" />}
                </div>
            </div>
        </div>
    )
}

function ChatList({ chats }) {
    const [activeChatName, setActiveChatName] = useState(null)

    return (
        <div className="chatList">
            <div className="chatListHeader">
                <h2 className="chatListTitle">Chat</h2>
                <div className="chatListHeaderActions">
                    <Button className="chatListAllButton">
                        All
                        <img src="" alt="" />
                    </Button>
                    <Button className="chatListNewButton">
                        <img src="" alt="" />
                    </Button>
                </div>
            </div>

            <div className="chatListSearchBar">
                <img className="chatListSearchIcon" src="" alt="" />
                <Input className="chatListSearchInput" placeholder="Search" />
            </div>

            <div className="chatListItems">
                {chats.map((element, index) => (
                    <ChatListItem
                        key={index}
                        {...element}
                        isActive={activeChatName === element.name}
                        onClick={() => {
                            setActiveChatName(element.name)
                        }} />
                ))}
            </div>
        </div>
    )
}

export default ChatList