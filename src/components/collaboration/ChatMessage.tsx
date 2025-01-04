import React from 'react';
import { MessageSquare, Heart, Share2, Smile } from 'lucide-react';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
  onReply: (messageId: string) => void;
  onReact: (messageId: string, reaction: string) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onReply, onReact }) => {
  const [showReactions, setShowReactions] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={message.author.avatar}
          alt={message.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900 dark:text-white">
              {message.author.name}
            </span>
            {message.author.badges.map((badge) => (
              <span
                key={badge}
                className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-1 text-gray-600 dark:text-gray-300">{message.content}</p>
          
          <div className="mt-3 flex items-center space-x-4">
            <button
              onClick={() => onReply(message.id)}
              className="flex items-center text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {message.replies.length > 0 && <span>{message.replies.length}</span>}
            </button>
            <button
              onClick={() => setShowReactions(!showReactions)}
              className="flex items-center text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Smile className="w-4 h-4 mr-1" />
              {message.reactions.length > 0 && <span>{message.reactions.length}</span>}
            </button>
            <button className="flex items-center text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Share2 className="w-4 h-4 mr-1" />
            </button>
          </div>

          {showReactions && (
            <div className="mt-2 flex space-x-2">
              {['❤️', '👍', '🎉', '🤔', '👏'].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => onReact(message.id, emoji)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          {message.replies.length > 0 && (
            <div className="mt-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              {message.replies.map((reply) => (
                <ChatMessage
                  key={reply.id}
                  message={reply}
                  onReply={onReply}
                  onReact={onReact}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;