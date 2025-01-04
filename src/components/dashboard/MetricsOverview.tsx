import React from 'react';
import { UserMetric } from '../../types/metrics';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface MetricsOverviewProps {
  metrics: UserMetric[];
}

const MetricsOverview: React.FC<MetricsOverviewProps> = ({ metrics }) => {
  const getStatusIcon = (status: UserMetric['status']) => {
    switch (status) {
      case 'increasing':
        return <ArrowUp className="w-4 h-4 text-green-500" />;
      case 'decreasing':
        return <ArrowDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Metrics Overview</h2>
      
      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white">{metric.name}</span>
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {metric.timeframe}
                </span>
              </div>
              {getStatusIcon(metric.status)}
            </div>
            
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </span>
              <div className="flex-1 h-8">
                {/* Mini sparkline chart would go here */}
                <div className="h-full flex items-end space-x-1">
                  {metric.trend.map((value, index) => (
                    <div
                      key={index}
                      className="w-2 bg-indigo-600 dark:bg-indigo-500 rounded-t"
                      style={{ height: `${(value / Math.max(...metric.trend)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsOverview;