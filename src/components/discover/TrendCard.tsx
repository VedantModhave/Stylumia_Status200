import React from 'react';
import { Sparkles, TrendingUp, Star } from 'lucide-react';
import { Trend } from './types';

interface TrendCardProps {
  trend: Trend;
}

const TrendCard: React.FC<TrendCardProps> = ({ trend }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <img src={trend.image} alt={trend.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-600 text-white">
            {trend.category === "Hot" ? <TrendingUp className="w-4 h-4 mr-1" /> : <Sparkles className="w-4 h-4 mr-1" />}
            {trend.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{trend.title}</h3>
          <span className="text-green-500 font-semibold">{trend.growth}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{trend.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">{trend.region}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{trend.season}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{trend.priceRange}</span>
        </div>
        <button className="inline-flex items-center text-indigo-600 dark:text-indigo-400">
          <Star className="w-4 h-4 mr-1" />
          Save Trend
        </button>
      </div>
    </div>
  );
};

export default TrendCard;