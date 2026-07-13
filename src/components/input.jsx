import './input.css'

function Input({ className, placeholder, value, onChange, type, onFocus, onBlur }) {
    return (
        <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFocus}
            onBlur={onBlur} />
    )

}

export default Input;