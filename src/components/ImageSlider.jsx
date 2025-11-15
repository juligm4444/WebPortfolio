import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageSlider = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('right');

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-4xl md:text-6xl text-primary">{title.split(' ').slice(-1)}</span>
        </h2>
        <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Slider Container */}
      <div className="relative px-4 md:px-12 lg:px-20">
        {/* Main Image with 3D Shadow Effect */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Previous Card Preview */}
          <div className="hidden lg:block w-32 xl:w-40 flex-shrink-0 opacity-40 hover:opacity-60 transition-all duration-700 ease-in-out transform">
            <div className="rounded-lg overflow-hidden bg-card border border-border shadow-xs">
              <div className="aspect-[16/10] relative">
                <img
                  src={images[(currentIndex - 1 + images.length) % images.length].src}
                  alt="Previous"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="relative flex-1 max-w-4xl transition-all duration-700 ease-in-out transform">
            {/* Blur Shadow Layers for 3D Effect */}
            <div className="absolute inset-0 -z-10 translate-y-4 translate-x-2 blur-2xl opacity-40 bg-primary/30 rounded-lg transition-all duration-700"></div>
            <div className="absolute inset-0 -z-20 translate-y-8 translate-x-4 blur-3xl opacity-20 bg-primary/20 rounded-lg transition-all duration-700"></div>

            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden bg-card border border-border shadow-xs card-hover">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                  }`}
                />
              </div>

              {/* Caption Section - Separate from image */}
              <div className="bg-card border-t border-border p-6 md:p-8 transition-all duration-700">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 transition-all duration-700">
                  {images[currentIndex].title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-light transition-all duration-700">
                  {images[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Next Card Preview */}
          <div className="hidden lg:block w-32 xl:w-40 flex-shrink-0 opacity-40 hover:opacity-60 transition-all duration-700 ease-in-out transform">
            <div className="rounded-lg overflow-hidden bg-card border border-border shadow-xs">
              <div className="aspect-[16/10] relative">
                <img
                  src={images[(currentIndex + 1) % images.length].src}
                  alt="Next"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-all duration-300 shadow-lg z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full hover:bg-card transition-all duration-300 shadow-lg z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
