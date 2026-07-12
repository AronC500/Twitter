import './input.css'

function Input({ className, placeholder, value, onChange, type }) {
    return (
        <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} />
    )

}

export default Input;