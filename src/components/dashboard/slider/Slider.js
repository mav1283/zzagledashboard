import React,{useState} from 'react';
import slides from './slides';
import SlideCard from './SlideCard';

function Slider(){
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handlePrevious = () => {
      if (currentSlideIndex > 0) {
        setCurrentSlideIndex((prevState) => prevState - 1);
      }
    };
  
    const handleNext = () => {
      if (currentSlideIndex < slides.length - 1) {
        setCurrentSlideIndex((prevState) => prevState + 1);
      }
    };
    return (
        <div className="rewards-slider">
            <h3>Rewards and Earn</h3>
            <div className="slide-container">
                <div
                className="slide-train"
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                {
                    slides.map((slide,i)=><SlideCard
                    currentSlideIndex={currentSlideIndex}
              slideIndex={i}
                     key={slide.id} {...slide}/>)
                }
                </div>
            </div>
            <div className="slider-buttons">
            <button onClick={handlePrevious}>&#10094;</button>
        <button onClick={handleNext}>&#10095;</button>
            </div>
        </div>
    )
}

export default Slider;