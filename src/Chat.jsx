import ChatList from './components/ChatList.jsx'
import ChatEmptyState from './components/ChatEmptyState.jsx'
import Sidebar from './components/Sidebar.jsx'

const chats = [
    { avatarSrc: '', name: 'Komar', time: '1h', preview: 'You: Yes' },
    { avatarSrc: '', name: 'Unemployment Inc.', time: '12h', preview: 'Dcmat: I made this feature for the Top ...', muted: true },
    { avatarSrc: '', name: 'TAA!', verified: true, time: '20h', preview: 'TAA: ok' },
    { avatarSrc: '', name: 'MEGAHIT I DEE', time: '1d', preview: 'Idk shirv account is yours or 74', unread: true },
    { avatarSrc: '', name: 'ark', verified: true, time: '1d', preview: "You: I'm down for coaching now anytime ..." },
    { avatarSrc: '', name: 'Jason Yang and クリント', time: '1d', preview: 'Jason Yang: We are indeed short of US ci...' },
    { avatarSrc: '', name: '❄', locked: true, time: '2d', preview: 'You: Da jelly' },
    { avatarSrc: '', name: 'Pedafromdagutter', time: '2d', preview: 'my ign is LukeCKM' },
]

function Chat() {
    return (
        <div className="appLayout">
            <Sidebar activeLabel="Chat" />
            <ChatList chats={chats} />
            <ChatEmptyState />
        </div>
    )
}

export default Chat