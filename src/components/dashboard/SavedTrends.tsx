import React from 'react';
import { Star, TrendingUp, Trash2 } from 'lucide-react';
import { SavedTrend } from '../../types/saved';

interface SavedTrendsProps {
  trends: SavedTrend[];
  onRemove: (id: string) => void;
  onView: (id: string) => void;
}

const SavedTrends: React.FC<SavedTrendsProps> = ({ trends, onRemove, onView }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Saved Trends
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trends.map((trend) => (
          <div
            key={trend.id}
            className="group relative bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={trend.image}
                alt={trend.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white mb-1">{trend.title}</h3>
                <span className="text-sm text-gray-200">{trend.category}</span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+{trend.growth}%</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Added {new Date(trend.dateAdded).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => onView(trend.id)}
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  View Details
                </button>
                <button
                  onClick={() => onRemove(trend.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedTrends;