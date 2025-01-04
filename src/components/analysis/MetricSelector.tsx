import React from 'react';
import { ComparisonMetric } from '../../types/analysis';

interface MetricSelectorProps {
  metrics: ComparisonMetric[];
  selectedMetrics: string[];
  onToggleMetric: (metricKey: string) => void;
}

const MetricSelector: React.FC<MetricSelectorProps> = ({
  metrics,
  selectedMetrics,
  onToggleMetric,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {metrics.map((metric) => (
        <button
          key={metric.key}
          onClick={() => onToggleMetric(metric.key)}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            selectedMetrics.includes(metric.key)
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <span className="text-sm font-medium">{metric.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MetricSelector;