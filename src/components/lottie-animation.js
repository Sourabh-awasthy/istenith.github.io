import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animationInstance.destroy(); // Clean up on unmount
    };
  }, [animationData]);

  return <div ref={animationContainer} style={{ width: '100%', height: '100%' }} />;
};

export default LottieAnimation;
