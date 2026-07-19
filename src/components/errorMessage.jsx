import './errorMessage.css'


function ErrorMessage({ image, text, className, extrastyles }) {
    return (
        <div className={className} style={extrastyles}>
            {image && <img src={image} alt="" />}
            {text && <p>{text}</p>}
        </div>
    )
}


export default ErrorMessage;