import React from 'react';
import { MessageSquare, Heart, Share2, Filter } from 'lucide-react';
import ChatMessage from './ChatMessage';
import CreatePost from './CreatePost';
import { Message } from './types';

interface CommunityFeedProps {
  messages: Message[];
  onReply: (messageId: string) => void;
  onReact: (messageId: string, reaction: string) => void;
  onPost: (content: string, image?: string) => void;
}

const CommunityFeed: React.FC<CommunityFeedProps> = ({
  messages,
  onReply,
  onReact,
  onPost,
}) => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('latest');

  const filteredMessages = React.useMemo(() => {
    let filtered = [...messages];

    // Apply filters
    if (activeFilter !== 'all') {
      filtered = filtered.filter(message => {
        switch (activeFilter) {
          case 'trending':
            return message.reactions.reduce((sum, r) => sum + r.count, 0) > 5;
          case 'discussions':
            return message.replies.length > 0;
          case 'media':
            return message.content.includes('http');
          default:
            return true;
        }
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          const aReactions = a.reactions.reduce((sum, r) => sum + r.count, 0);
          const bReactions = b.reactions.reduce((sum, r) => sum + r.count, 0);
          return bReactions - aReactions;
        case 'discussed':
          return b.replies.length - a.replies.length;
        case 'latest':
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
    });

    return filtered;
  }, [messages, activeFilter, sortBy]);

  return (
    <div>
      <CreatePost onPost={onPost} />

      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex space-x-2">
              {['all', 'trending', 'discussions', 'media'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    activeFilter === filter
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <option value="latest">Latest</option>
            <option value="popular">Most Popular</option>
            <option value="discussed">Most Discussed</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onReply={onReply}
            onReact={onReact}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;