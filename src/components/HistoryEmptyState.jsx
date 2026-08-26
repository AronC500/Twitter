import './historyEmptyState.css'

function HistoryEmptyState({ title, description, section }) {
    return (
        <div className="historyEmptyState">
            <h2 className="historyEmptyTitle" style={section === 'Notifications' ? { width: '330px' } : {}}>{title}</h2>
            <p className="historyEmptyDescription" style={section === 'Notifications' ? { paddingRight: '10px' } : {}}>{description}</p>
        </div>
    )
}

export default HistoryEmptyState