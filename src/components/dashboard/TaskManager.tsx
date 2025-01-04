import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Task } from '../../types/dashboard';

interface TaskManagerProps {
  tasks: Task[];
  onUpdateStatus: (taskId: string, status: Task['status']) => void;
}

const TaskManager: React.FC<TaskManagerProps> = ({ tasks, onUpdateStatus }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  };

  const priorityColors = {
    low: 'text-gray-600 dark:text-gray-400',
    medium: 'text-orange-600 dark:text-orange-400',
    high: 'text-red-600 dark:text-red-400'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{task.title}</h3>
              <select
                value={task.status}
                onChange={(e) => onUpdateStatus(task.id, e.target.value as Task['status'])}
                className={`px-3 py-1 rounded-full text-sm ${statusColors[task.status]}`}
              >
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-gray-600 dark:text-gray-400">{task.dueDate}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-gray-600 dark:text-gray-400">{task.assignedTo.length} assigned</span>
              </div>
              <div className={`flex items-center ${priorityColors[task.priority]}`}>
                <Clock className="w-4 h-4 mr-1" />
                <span>{task.priority} priority</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;