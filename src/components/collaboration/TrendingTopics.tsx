import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Topic } from './types';

const TrendingTopics: React.FC = () => {
  const [topics] = React.useState<Topic[]>([
    {
      id: '1',
      title: 'Sustainable Fashion',
      participants: 128,
      growth: '+45%',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Digital Fashion Week',
      participants: 256,
      growth: '+67%',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Future of Retail',
      participants: 189,
      growth: '+23%',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    }
  ]);

  return (
    <div className="mb-8 overflow-hidden">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Trending Topics
      </h2>
      <div className="flex space-x-4 animate-scroll">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex-none w-72 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
          >
            <div className="relative h-40">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{topic.growth}</span>
                  </div>
                  <p className="text-sm mt-2">{topic.participants} participants</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;