import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const trends = [
  {
    id: 1,
    title: "Sustainable Fashion",
    description: "Eco-friendly materials and ethical production are reshaping the industry",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    stats: "+125% Growth"
  },
  {
    id: 2,
    title: "Digital Fashion",
    description: "Virtual clothing and NFTs are creating new revenue streams",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    stats: "+200% Growth"
  },
  {
    id: 3,
    title: "Adaptive Fashion",
    description: "Inclusive design is becoming a priority for major brands",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    stats: "+80% Growth"
  }
];

const TrendCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trends.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trends.length) % trends.length);
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Trending Now
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-96">
              <div
                className="absolute inset-0 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {trends.map((trend) => (
                    <div
                      key={trend.id}
                      className="w-full flex-shrink-0"
                    >
                      <div className="relative h-96">
                        <img
                          src={trend.image}
                          alt={trend.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{trend.title}</h3>
                                <p className="text-gray-200 mb-4">{trend.description}</p>
                              </div>
                              <div className="bg-indigo-600 px-4 py-2 rounded-full">
                                <span className="text-white font-semibold">{trend.stats}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600 dark:text-gray-200" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ArrowRight className="h-6 w-6 text-gray-600 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendCarousel;