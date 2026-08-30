import './chatemptystate.css'
import Button from './button.jsx'

function ChatEmptyState() {
    return (
        <div className="chatEmptyState">
            <div className="chatEmptyIconCircle">
                <img src="/xlogo.png" alt="" />
            </div>
            <h2 className="chatEmptyTitle">Start Conversation</h2>
            <p className="chatEmptySubtitle">Choose from your existing conversations, or start a new one.</p>
            <Button className="chatEmptyNewButton">New chat
                <div className="innerBackground">
                </div>
            </Button>
        </div>
    )
}

export default ChatEmptyState