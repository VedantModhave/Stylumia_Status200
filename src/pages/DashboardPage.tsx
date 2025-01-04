import React from 'react';
import TrendMetrics from '../components/dashboard/TrendMetrics';
import UserKPIs from '../components/dashboard/UserKPIs';
import MetricsOverview from '../components/dashboard/MetricsOverview';
import SavedTrends from '../components/dashboard/SavedTrends';
import GeneratedReports from '../components/dashboard/GeneratedReports';
import { UserKPI, UserMetric } from '../types/metrics';
import { SavedTrend, GeneratedReport } from '../types/saved';

const DashboardPage = () => {
  const [userKPIs] = React.useState<UserKPI[]>([
    {
      id: '1',
      label: 'Trend Accuracy',
      value: 92,
      change: 5,
      target: 95,
      unit: '%',
      category: 'performance'
    },
    {
      id: '2',
      label: 'Insights Generated',
      value: 128,
      change: 12,
      unit: '',
      category: 'contribution'
    },
    {
      id: '3',
      label: 'Community Impact',
      value: 4.8,
      change: 0.3,
      target: 5,
      unit: '',
      category: 'impact'
    },
    {
      id: '4',
      label: 'Trend Discoveries',
      value: 37,
      change: -2,
      unit: '',
      category: 'performance'
    }
  ]);

  const [userMetrics] = React.useState<UserMetric[]>([
    {
      id: '1',
      name: 'Trend Predictions',
      value: 45,
      trend: [32, 36, 40, 38, 42, 45],
      timeframe: 'weekly',
      status: 'increasing'
    },
    {
      id: '2',
      name: 'Collaboration Score',
      value: 8.5,
      trend: [7.8, 8.0, 8.2, 8.3, 8.4, 8.5],
      timeframe: 'monthly',
      status: 'stable'
    },
    {
      id: '3',
      name: 'Market Analysis',
      value: 92,
      trend: [85, 88, 90, 89, 91, 92],
      timeframe: 'monthly',
      status: 'increasing'
    }
  ]);

  const [savedTrends] = React.useState<SavedTrend[]>([
    {
      id: '1',
      title: 'Sustainable Denim',
      category: 'Eco Fashion',
      dateAdded: '2024-02-28',
      image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&q=80&w=800',
      growth: 45,
      relevanceScore: 92
    },
    {
      id: '2',
      title: 'Digital Fashion',
      category: 'Tech Wear',
      dateAdded: '2024-02-27',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
      growth: 67,
      relevanceScore: 88
    }
  ]);

  const [reports] = React.useState<GeneratedReport[]>([
    {
      id: '1',
      title: 'Q1 2024 Trend Analysis',
      date: '2024-02-28',
      trends: ['Sustainable Fashion', 'Digital Wear'],
      metrics: ['growth', 'engagement'],
      insights: ['Rising demand for eco-friendly materials'],
      thumbnail: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Sustainability Report',
      date: '2024-02-25',
      trends: ['Eco Materials', 'Circular Fashion'],
      metrics: ['sustainability', 'marketShare'],
      insights: ['Increasing adoption of recycled fabrics'],
      thumbnail: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800'
    }
  ]);

  const handleRemoveTrend = (id: string) => {
    // Implement remove logic
    console.log('Removing trend:', id);
  };

  const handleViewTrend = (id: string) => {
    // Implement view logic
    console.log('Viewing trend:', id);
  };

  const handleDownloadReport = (id: string) => {
    // Implement download logic
    console.log('Downloading report:', id);
  };

  const handleViewReport = (id: string) => {
    // Implement view logic
    console.log('Viewing report:', id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your performance and impact</p>
      </div>

      <div className="space-y-8">
        <UserKPIs kpis={userKPIs} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TrendMetrics />
          </div>
          <div className="lg:col-span-1">
            <MetricsOverview metrics={userMetrics} />
          </div>
        </div>

        <SavedTrends
          trends={savedTrends}
          onRemove={handleRemoveTrend}
          onView={handleViewTrend}
        />

        <GeneratedReports
          reports={reports}
          onDownload={handleDownloadReport}
          onView={handleViewReport}
        />
      </div>
    </div>
  );
};

export default DashboardPage;