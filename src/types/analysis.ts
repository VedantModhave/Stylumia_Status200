export interface TrendData {
  id: string;
  name: string;
  category: string;
  metrics: {
    growth: number[];
    engagement: number[];
    marketShare: number[];
    sustainability: number[];
  };
  timeframes: string[];
}

export interface ComparisonMetric {
  label: string;
  key: keyof TrendData['metrics'];
  description: string;
  color: string;
}