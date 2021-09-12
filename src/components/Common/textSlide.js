import './textSlide.scss';

const TextSlide = ({text}) => {
    return (
        <div className="text-slide-container">
            <p>
                {text}
            </p>
        </div>
    )
}

export default TextSlide;