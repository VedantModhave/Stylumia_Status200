import React from 'react';
import { Filter } from 'lucide-react';
import FilterButton from './FilterButton';
import { TrendCategory, Region, Season, PriceRange } from './types';

interface TrendFiltersProps {
  filters: {
    category: TrendCategory;
    region: Region;
    season: Season;
    priceRange: PriceRange;
  };
  onFilterChange: (key: string, value: string) => void;
}

const TrendFilters: React.FC<TrendFiltersProps> = ({ filters, onFilterChange }) => {
  const categories: TrendCategory[] = ['All', 'Emerging', 'Hot', 'Sustainable', 'Luxury', 'Streetwear'];
  const regions: Region[] = ['All', 'Global', 'Asia', 'Europe', 'Americas'];
  const seasons: Season[] = ['All', 'Spring/Summer', 'Fall/Winter', 'Resort', 'Pre-Fall'];
  const priceRanges: PriceRange[] = ['All', 'Budget', 'Mid-Range', 'Premium', 'Luxury'];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="flex items-center">
        <Filter className="w-5 h-5 mr-2 text-gray-500" />
        <span className="text-gray-700 dark:text-gray-300">Filters:</span>
      </div>
      
      <FilterButton
        label="Category"
        value={filters.category}
        options={categories}
        onChange={(value) => onFilterChange('category', value)}
      />
      <FilterButton
        label="Region"
        value={filters.region}
        options={regions}
        onChange={(value) => onFilterChange('region', value)}
      />
      <FilterButton
        label="Season"
        value={filters.season}
        options={seasons}
        onChange={(value) => onFilterChange('season', value)}
      />
      <FilterButton
        label="Price Range"
        value={filters.priceRange}
        options={priceRanges}
        onChange={(value) => onFilterChange('priceRange', value)}
      />
    </div>
  );
};

export default TrendFilters;