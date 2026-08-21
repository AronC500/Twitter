import './historyEmptyState.css'

function HistoryEmptyState({ title, description }) {
    return (
        <div className="historyEmptyState">
            <h2 className="historyEmptyTitle">{title}</h2>
            <p className="historyEmptyDescription">{description}</p>
        </div>
    )
}

export default HistoryEmptyState