import React from 'react';
import TrendSelector from '../components/analysis/TrendSelector';
import MetricSelector from '../components/analysis/MetricSelector';
import ComparisonChart from '../components/analysis/ComparisonChart';
import { TrendData, ComparisonMetric } from '../types/analysis';

const SAMPLE_TRENDS: TrendData[] = [
  {
    id: '1',
    name: 'Sustainable Denim',
    category: 'Sustainable Fashion',
    metrics: {
      growth: [10, 15, 25, 35, 45],
      engagement: [20, 25, 30, 40, 45],
      marketShare: [5, 7, 10, 12, 15],
      sustainability: [80, 82, 85, 87, 90]
    },
    timeframes: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  },
  {
    id: '2',
    name: 'Digital Fashion',
    category: 'Technology',
    metrics: {
      growth: [30, 45, 55, 65, 75],
      engagement: [40, 50, 60, 65, 70],
      marketShare: [8, 12, 15, 18, 22],
      sustainability: [60, 65, 70, 75, 78]
    },
    timeframes: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  }
];

const METRICS: ComparisonMetric[] = [
  {
    label: 'Growth',
    key: 'growth',
    description: 'Month-over-month growth rate',
    color: '#4F46E5'
  },
  {
    label: 'Engagement',
    key: 'engagement',
    description: 'User interaction and mentions',
    color: '#06B6D4'
  },
  {
    label: 'Market Share',
    key: 'marketShare',
    description: 'Percentage of market coverage',
    color: '#8B5CF6'
  },
  {
    label: 'Sustainability',
    key: 'sustainability',
    description: 'Environmental impact score',
    color: '#10B981'
  }
];

const AnalysisPage = () => {
  const [selectedTrends, setSelectedTrends] = React.useState<string[]>([]);
  const [selectedMetrics, setSelectedMetrics] = React.useState<string[]>(['growth']);

  const handleSelectTrend = (trendId: string) => {
    if (selectedTrends.length < 3) {
      setSelectedTrends([...selectedTrends, trendId]);
    }
  };

  const handleRemoveTrend = (trendId: string) => {
    setSelectedTrends(selectedTrends.filter(id => id !== trendId));
  };

  const handleToggleMetric = (metricKey: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metricKey)
        ? prev.filter(key => key !== metricKey)
        : [...prev, metricKey]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trend Analysis</h1>
        <p className="text-gray-600 dark:text-gray-400">Compare and analyze fashion trends</p>
      </div>

      <TrendSelector
        trends={SAMPLE_TRENDS}
        selectedTrends={selectedTrends}
        onSelectTrend={handleSelectTrend}
        onRemoveTrend={handleRemoveTrend}
      />

      {selectedTrends.length > 0 && (
        <>
          <MetricSelector
            metrics={METRICS}
            selectedMetrics={selectedMetrics}
            onToggleMetric={handleToggleMetric}
          />

          <ComparisonChart
            trends={SAMPLE_TRENDS}
            selectedTrends={selectedTrends}
            selectedMetrics={selectedMetrics}
            metrics={METRICS}
          />
        </>
      )}
    </div>
  );
};

export default AnalysisPage;