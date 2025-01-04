export type TrendCategory = 'All' | 'Emerging' | 'Hot' | 'Sustainable' | 'Luxury' | 'Streetwear';
export type Region = 'All' | 'Global' | 'Asia' | 'Europe' | 'Americas';
export type Season = 'All' | 'Spring/Summer' | 'Fall/Winter' | 'Resort' | 'Pre-Fall';
export type PriceRange = 'All' | 'Budget' | 'Mid-Range' | 'Premium' | 'Luxury';

export interface Trend {
  id: number;
  title: string;
  category: TrendCategory;
  region: Region;
  season: Season;
  priceRange: PriceRange;
  image: string;
  growth: string;
  description: string;
}