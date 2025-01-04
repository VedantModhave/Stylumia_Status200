import React from 'react';
import TrendFilters from '../components/discover/TrendFilters';
import TrendGrid from '../components/discover/TrendGrid';
import { TrendCategory, Region, Season, PriceRange } from '../components/discover/types';

const DiscoverPage = () => {
  const [filters, setFilters] = React.useState({
    category: 'All' as TrendCategory,
    region: 'All' as Region,
    season: 'All' as Season,
    priceRange: 'All' as PriceRange,
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Discover Trends</h1>
        <p className="text-gray-600 dark:text-gray-400">Explore the latest and emerging trends in fashion</p>
      </div>
      <TrendFilters filters={filters} onFilterChange={handleFilterChange} />
      <TrendGrid filters={filters} />
    </div>
  );
};

export default DiscoverPage;