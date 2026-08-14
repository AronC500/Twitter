import './input.css'

function Input({ className, placeholder, value, onChange, type, onFocus, onBlur, onClick, extrastyles }) {
    return (
        <input type={type} className={className} placeholder={placeholder} onClick={onClick} value={value} onChange={onChange} onFocus={onFocus} style={extrastyles}
            onBlur={onBlur} />
    )

}

export default Input;