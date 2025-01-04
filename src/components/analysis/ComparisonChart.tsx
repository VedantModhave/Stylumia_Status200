import React from 'react';
import { TrendData, ComparisonMetric } from '../../types/analysis';

interface ComparisonChartProps {
  trends: TrendData[];
  selectedTrends: string[];
  selectedMetrics: string[];
  metrics: ComparisonMetric[];
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({
  trends,
  selectedTrends,
  selectedMetrics,
  metrics,
}) => {
  // This is a placeholder for chart visualization
  // In a real implementation, you would use a charting library like Chart.js or Recharts
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trend Comparison</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Comparing {selectedTrends.length} trends across {selectedMetrics.length} metrics
        </p>
      </div>

      <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">
          Chart visualization would go here
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {selectedMetrics.map(metricKey => {
          const metric = metrics.find(m => m.key === metricKey);
          if (!metric) return null;
          return (
            <div key={metric.key} className="text-center">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric.label}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{metric.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonChart;