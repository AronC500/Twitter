import './button.css'

function Button({ text, onClick, img, buttonstyle, imgstyle }) {
  return (
    <button className="continueButton" style={buttonstyle} onClick={onClick}>
      <img src={img} style={imgstyle}/>
      <span>{text}</span>
    </button>
  )
}

export default Button