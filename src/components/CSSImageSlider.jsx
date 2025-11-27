import { useState } from 'react';

export const CSSImageSlider = ({ images, title, description, orientation = 'portrait' }) => {
  // Start at center for multi-image, or 0 for single image
  const [currentIndex, setCurrentIndex] = useState(images.length === 1 ? 0 : Math.floor(images.length / 2));

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate position relative to current index with infinite wrapping
  const getCardStyle = (index) => {
    const totalImages = images.length;
    let diff = index - currentIndex;

    // Wrap difference to create infinite effect
    if (diff > totalImages / 2) {
      diff -= totalImages;
    } else if (diff < -totalImages / 2) {
      diff += totalImages;
    }

    // Base styles for all cards
    let transform = '';
    let opacity = 1;
    let zIndex = 10;
    let filter = 'brightness(0.5)';

    if (diff === 0) {
      // Center card
      transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
      opacity = 1;
      zIndex = 50;
      filter = 'brightness(1)';
    } else if (diff === -1) {
      // One left
      transform = 'translateX(-45%) translateZ(-200px) rotateY(35deg) scale(0.85)';
      opacity = 0.7;
      zIndex = 20;
      filter = 'brightness(0.6)';
    } else if (diff === 1) {
      // One right
      transform = 'translateX(45%) translateZ(-200px) rotateY(-35deg) scale(0.85)';
      opacity = 0.7;
      zIndex = 20;
      filter = 'brightness(0.6)';
    } else {
      // Hidden
      transform = 'translateX(0) translateZ(-800px) scale(0.3)';
      opacity = 0;
      zIndex = 0;
      filter = 'brightness(0.2)';
    }

    return {
      transform,
      opacity,
      zIndex,
      filter,
    };
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-12">
      {/* Title and Description */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto">{description}</p>
      </div>

      {/* 3D Carousel Container */}
      <div className={`relative mt-10 sm:mt-12 mb-12 sm:mb-16 ${
        orientation === 'landscape'
          ? 'h-[360px] sm:h-[420px] md:h-[560px] lg:h-[620px] xl:h-[650px]'
          : 'h-[420px] sm:h-[500px] md:h-[640px] lg:h-[700px] xl:h-[720px]'
      }`}>
        {/* Perspective container */}
        <div
          className="relative w-full h-full"
          style={{
            perspective: '1200px',
            perspectiveOrigin: 'center center',
          }}
        >
          {/* Cards container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((image, index) => {
              const style = getCardStyle(index);
              // Card sizes tuned for full-image display and creative page requirements
              const cardClasses = orientation === 'landscape'
                ? 'w-[320px] h-[210px] sm:w-[520px] sm:h-[336px] md:w-[720px] md:h-[466px] lg:w-[860px] lg:h-[556px] xl:w-[900px] xl:h-[583px]'
                : 'w-[300px] h-[460px] sm:w-[380px] sm:h-[580px] md:w-[420px] md:h-[650px] lg:w-[480px] lg:h-[720px] xl:w-[500px] xl:h-[775px]';
              
              return (
                <div
                  key={index}
                  className={`absolute ${cardClasses} transition-all duration-700 ease-out ${style.opacity > 0 ? 'cursor-pointer' : 'pointer-events-none'}`}
                  style={{
                    transform: style.transform,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div
                    className="w-full h-full rounded-lg overflow-hidden border-4 border-border bg-card shadow-2xl"
                    style={{ filter: style.filter }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-contain p-2 bg-card"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Caption Section */}
      <div className="relative z-30 text-center mt-8 mb-8 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 transition-all duration-300">
          {images[currentIndex]?.title || ''}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground font-light transition-all duration-300 max-w-2xl mx-auto">
          {images[currentIndex]?.description || ''}
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-primary'
                : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={goToPrevious}
          className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-all duration-300 shadow-lg"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-all duration-300 shadow-lg"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
