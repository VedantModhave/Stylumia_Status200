import React from 'react';
import { TrendingUp, Leaf } from 'lucide-react';
import { TrendHighlight } from '../../types/dashboard';

interface TrendHighlightsProps {
  highlights: TrendHighlight[];
}

const TrendHighlights: React.FC<TrendHighlightsProps> = ({ highlights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {highlights.map((highlight) => (
        <div key={highlight.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48">
            <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 flex space-x-2">
              <span className="px-2 py-1 bg-indigo-600 text-white text-sm rounded-full">
                +{highlight.growth}%
              </span>
              <span className="px-2 py-1 bg-green-600 text-white text-sm rounded-full flex items-center">
                <Leaf className="w-3 h-3 mr-1" />
                {highlight.sustainabilityScore}
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{highlight.title}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{highlight.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Relevance Score: {highlight.relevanceScore}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendHighlights;