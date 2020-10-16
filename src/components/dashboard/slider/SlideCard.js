import React from 'react';

function SlideCard({
    currentSlideIndex,
  slideIndex,
    icon,title,cta
}){
    return (
        <div className={slideIndex === currentSlideIndex ? "slide active" : "slide"}>
            <div className="slide--icon">
                {icon}
            </div>
            <div className="slide--details">
                <h3>{title}</h3>
                <button>{cta}</button>
            </div>
        </div>
    )
}

export default SlideCard;