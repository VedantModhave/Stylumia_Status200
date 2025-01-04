export interface UserKPI {
  id: string;
  label: string;
  value: number;
  change: number;
  target?: number;
  unit: string;
  category: 'engagement' | 'performance' | 'impact' | 'contribution';
}

export interface UserMetric {
  id: string;
  name: string;
  value: number;
  trend: number[];
  timeframe: 'daily' | 'weekly' | 'monthly';
  status: 'increasing' | 'decreasing' | 'stable';
}