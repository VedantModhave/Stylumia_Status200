import React from 'react';
import { UserPlus, Mail, Award } from 'lucide-react';
import { User } from './types';

interface ProfileCardProps {
  user: User;
  onFollow: (userId: string) => void;
  onMessage: (userId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, onFollow, onMessage }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full border-2 border-indigo-500"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
            {user.name}
            {user.verified && (
              <Award className="w-4 h-4 ml-1 text-indigo-500" />
            )}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.role}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {user.badges.map((badge) => (
          <span
            key={badge}
            className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex space-x-2">
          <button
            onClick={() => onFollow(user.id)}
            className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Follow
          </button>
          <button
            onClick={() => onMessage(user.id)}
            className="flex-1 flex items-center justify-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900"
          >
            <Mail className="w-4 h-4 mr-2" />
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;