// Carousel/Carousel.jsx
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'; // Import useRef, forwardRef, useImperativeHandle
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';

// Import your custom navigation buttons
import LeftNavButton from './LeftnavButton/LeftnavButton';
import RightNavButton from './RightnavButton/RightnavButton';

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(true);

  useEffect(() => {
    // Set initial state
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    // Listen for slide changes to update button visibility
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', handleSlideChange);
    // Clean up the event listener when the component unmounts
    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]); // Depend on swiper instance

  return (
    <>
      {!isBeginning && <LeftNavButton onClick={() => swiper.slidePrev()} />}
      {!isEnd && <RightNavButton onClick={() => swiper.slideNext()} />}
    </>
  );
};

// Wrap your Carousel component with forwardRef
const Carousel = forwardRef(({ data, renderComponent, settings = {} }, ref) => {
  const swiperInstanceRef = useRef(null); // Create a ref to hold the Swiper instance directly

  // Expose methods to the parent component via the ref
  useImperativeHandle(ref, () => ({
    updateSwiper: () => {
      if (swiperInstanceRef.current) {
        // Swiper's update method recalculates its layout
        swiperInstanceRef.current.update();
        // console.log("Swiper layout updated!"); // For debugging
      }
    },
    // You can expose other Swiper methods if needed, e.g., slideTo, etc.
  }));

  // Use useEffect to ensure Swiper updates when the data prop changes
  // This is crucial if the number of slides or their content changes
  useEffect(() => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.update();
      // console.log("Swiper updated due to data change.");
    }
  }, [data]); // Re-run this effect when 'data' prop changes

  // Default Swiper settings, highly customizable
  const defaultSettings = {
    modules: [Navigation],
    slidesPerView: 'auto', // Auto-adjust based on slide width/breakpoints
    spaceBetween: 30,
    navigation: {
      // These are for Swiper's internal navigation, which our custom buttons will control
      // We don't need to specify nextEl/prevEl if we're using custom buttons that directly call swiper.slidePrev/Next
      // However, keeping them here won't hurt if you ever decide to use default Swiper navigation.
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
    ...settings, // Merge default settings with any custom settings passed via props
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        {...defaultSettings}
        onSwiper={(swiper) => {
          // Store the swiper instance when it's initialized
          swiperInstanceRef.current = swiper;
          // console.log("Swiper initialized:", swiper); // For debugging
        }}
      >
        <SwiperNavButtons /> {/* Our custom navigation buttons */}
        {data.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default Carousel;