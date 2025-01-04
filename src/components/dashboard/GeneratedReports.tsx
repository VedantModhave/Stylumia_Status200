import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { GeneratedReport } from '../../types/saved';

interface GeneratedReportsProps {
  reports: GeneratedReport[];
  onDownload: (id: string) => void;
  onView: (id: string) => void;
}

const GeneratedReports: React.FC<GeneratedReportsProps> = ({
  reports,
  onDownload,
  onView,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <FileText className="w-5 h-5 mr-2 text-indigo-500" />
          Generated Reports
        </h2>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={report.thumbnail}
                alt={report.title}
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {report.title}
                </h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(report.date).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {report.trends.length} trends analyzed
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => onView(report.id)}
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Eye className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDownload(report.id)}
                className="p-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneratedReports;