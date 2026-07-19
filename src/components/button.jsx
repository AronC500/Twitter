import './button.css'

function Button({ text, onClick, img, className, extrastyles, children, onBlur }) {
  return (
    <button className={className} onClick={onClick} style={extrastyles} onBlur={onBlur}>
      {img && <img src={img} />}
      {text && <span>{text}</span>}
      {children}
    </button>
  )
}

export default Button 