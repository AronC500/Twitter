import './errorMessage.css'


function ErrorMessage({ image, text, className }) {
    return (
        <p className={className}>
            <img src={image}></img>
            <p>{text}</p>
        </p>
    )
}



export default ErrorMessage;