import React from 'react';
import { Search, X } from 'lucide-react';
import { TrendData } from '../../types/analysis';

interface TrendSelectorProps {
  trends: TrendData[];
  selectedTrends: string[];
  onSelectTrend: (trendId: string) => void;
  onRemoveTrend: (trendId: string) => void;
}

const TrendSelector: React.FC<TrendSelectorProps> = ({
  trends,
  selectedTrends,
  onSelectTrend,
  onRemoveTrend,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredTrends = trends.filter(trend => 
    trend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trend.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search trends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedTrends.map(trendId => {
          const trend = trends.find(t => t.id === trendId);
          if (!trend) return null;
          return (
            <div
              key={trend.id}
              className="flex items-center bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full"
            >
              <span className="text-sm">{trend.name}</span>
              <button
                onClick={() => onRemoveTrend(trend.id)}
                className="ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTrends.map(trend => (
          <button
            key={trend.id}
            onClick={() => onSelectTrend(trend.id)}
            disabled={selectedTrends.includes(trend.id)}
            className={`p-4 rounded-lg border text-left transition-colors ${
              selectedTrends.includes(trend.id)
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-indigo-500'
            }`}
          >
            <h3 className="font-medium text-gray-900 dark:text-white">{trend.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{trend.category}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendSelector;