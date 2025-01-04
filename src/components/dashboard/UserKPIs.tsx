import React from 'react';
import { TrendingUp, TrendingDown, Minus, Target } from 'lucide-react';
import { UserKPI } from '../../types/metrics';

interface UserKPIsProps {
  kpis: UserKPI[];
}

const UserKPIs: React.FC<UserKPIsProps> = ({ kpis }) => {
  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{kpi.label}</h3>
            {getChangeIcon(kpi.change)}
          </div>
          
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {kpi.value}
              <span className="text-sm font-normal text-gray-500 ml-1">{kpi.unit}</span>
            </p>
            <span className={`ml-2 text-sm font-medium ${
              kpi.change > 0 ? 'text-green-600' : kpi.change < 0 ? 'text-red-600' : 'text-gray-500'
            }`}>
              {kpi.change > 0 ? '+' : ''}{kpi.change}%
            </span>
          </div>

          {kpi.target && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  Target
                </span>
                <span className="font-medium text-gray-900 dark:text-white">{kpi.target}{kpi.unit}</span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-indigo-600 rounded-full"
                  style={{ width: `${Math.min(100, (kpi.value / kpi.target) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserKPIs;