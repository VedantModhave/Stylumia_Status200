import React from 'react';
import { LineChart, Download } from 'lucide-react';

const TrendComparison = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trend Comparison</h2>
        <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </button>
      </div>
      
      <div className="relative h-96 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <LineChart className="w-12 h-12 text-gray-400" />
          <span className="ml-2 text-gray-500">Chart visualization would go here</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Market Impact', 'Consumer Interest', 'Growth Rate'].map((metric) => (
          <div key={metric} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{metric}</h3>
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {Math.floor(Math.random() * 100)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendComparison;