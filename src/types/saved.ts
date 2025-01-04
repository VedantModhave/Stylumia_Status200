export interface SavedTrend {
  id: string;
  title: string;
  category: string;
  dateAdded: string;
  image: string;
  growth: number;
  relevanceScore: number;
  notes?: string;
}

export interface GeneratedReport {
  id: string;
  title: string;
  date: string;
  trends: string[];
  metrics: string[];
  insights: string[];
  thumbnail: string;
}