import React, { useState } from "react";

const useSlider = (adRef, totalSlides) => {
  const [sliderTranslate, setSliderTranslate] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [disabledForward, setDisabledForward] = useState(false);
  const [disabledBackward, setDisabledBackward] = useState(true);

  const handleClick = (forward) => {
    setDisabledBackward(false);
    if (currentSlide < totalSlides && forward) {
      setDisabledForward(() => currentSlide === totalSlides - 1);
      setSliderTranslate(
        () =>
          `${Number(sliderTranslate) + Number(adRef.current.clientWidth) + 16}`
      );
      setCurrentSlide(() => currentSlide + 1);
    } else if (currentSlide > 1 && !forward) {
      setDisabledForward(false);
      setDisabledBackward(() => currentSlide === 2);
      setSliderTranslate(
        () =>
          `${Number(sliderTranslate) - Number(adRef.current.clientWidth) - 16}`
      );
      setCurrentSlide(() => currentSlide - 1);
    }
  };

  return { sliderTranslate, handleClick, disabledForward, disabledBackward };
};

export default useSlider;
