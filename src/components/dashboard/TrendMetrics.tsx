import React from 'react';
import { TrendingUp, Users, Eye, Clock } from 'lucide-react';

const metrics = [
  {
    id: 1,
    name: 'Saved Trends',
    value: '24',
    change: '+12%',
    icon: TrendingUp
  },
  {
    id: 2,
    name: 'Collaborators',
    value: '156',
    change: '+8%',
    icon: Users
  },
  {
    id: 3,
    name: 'Trend Views',
    value: '2.4K',
    change: '+23%',
    icon: Eye
  },
  {
    id: 4,
    name: 'Watch Time',
    value: '12h',
    change: '+15%',
    icon: Clock
  }
];

const TrendMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{metric.value}</p>
                  <span className="ml-2 text-sm font-medium text-green-500">{metric.change}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendMetrics;