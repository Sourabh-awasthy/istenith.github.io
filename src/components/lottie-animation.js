import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Check if we're running in the browser before using lottie-web
    if (typeof window !== 'undefined' && animationContainer.current) {
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
    }
  }, [animationData]);

  return <div ref={animationContainer} style={{ width: '100%', height: '100%' }} />;
};

export default LottieAnimation;
