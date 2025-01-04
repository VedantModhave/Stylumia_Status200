import React from 'react';
import TrendCard from './TrendCard';
import { trends } from './trendData';
import { Trend } from './types';

interface TrendGridProps {
  filters: {
    category: string;
    region: string;
    season: string;
    priceRange: string;
  };
}

const TrendGrid: React.FC<TrendGridProps> = ({ filters }) => {
  const filteredTrends = trends.filter((trend: Trend) => {
    return (
      (filters.category === 'All' || trend.category === filters.category) &&
      (filters.region === 'All' || trend.region === filters.region) &&
      (filters.season === 'All' || trend.season === filters.season) &&
      (filters.priceRange === 'All' || trend.priceRange === filters.priceRange)
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTrends.map((trend) => (
        <TrendCard key={trend.id} trend={trend} />
      ))}
    </div>
  );
};

export default TrendGrid;