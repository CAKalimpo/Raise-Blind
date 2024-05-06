import { useState } from 'react';

const States = () => {
  const [raiseBlind, setRaiseBlind] = useState(false);
  const [raiseBlindInterval, setRaiseBlindInterval] = useState(3);
  const [isSliding, setIsSliding] = useState(false);

  const toggleBlind = () => setRaiseBlind(prevState => !prevState);

  const handleSliderComplete = (value) => {
    setRaiseBlindInterval(value);
    setIsSliding(false);
  };

  return {
    raiseBlind,
    raiseBlindInterval,
    isSliding,
    toggleBlind,
    handleSliderComplete,
    setRaiseBlindInterval,
    setIsSliding
  };
};

export default States;
