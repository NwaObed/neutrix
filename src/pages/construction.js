import React from "react";
import { useSpring, animated } from '@react-spring/web';

const Construction = () => {
    const styles = useSpring({
        from: { transform: 'translateY(0px)' },
        to: async (next, cancel) => {
          while (1) {
            await next({ transform: 'translateY(-20px)' });
            await next({ transform: 'translateY(0px)' });
          }
        },
        config: { duration: 1000 }, // Duration of one bounce
        reset: true,
      });

    return <animated.h5 style={styles} className="construction-message">Site engineers at work. Please check back later.</animated.h5>;
}

export default Construction;