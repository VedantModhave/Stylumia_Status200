import React from 'react';
import TrendingTopics from '../components/collaboration/TrendingTopics';
import CommunityFeed from '../components/collaboration/CommunityFeed';
import ProfileCard from '../components/collaboration/ProfileCard';
import { useWebSocket } from '../components/collaboration/useWebSocket';
import { Message, User } from '../components/collaboration/types';

const CollaborationPage = () => {
  const { sendMessage } = useWebSocket('wss://api.example.com/ws');
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      content: "The rise of digital fashion is transforming how we think about clothing. What are your thoughts on virtual wardrobes?",
      author: {
        id: '1',
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
        role: 'Fashion Designer',
        badges: ['Top Contributor', 'Verified Designer'],
        verified: true
      },
      timestamp: '2024-02-28T10:00:00Z',
      reactions: [
        { emoji: '❤️', count: 12, users: [] },
        { emoji: '👏', count: 8, users: [] }
      ],
      replies: [],
      badges: ['Trending']
    },
    {
      id: '2',
      content: "Just spotted an amazing sustainable denim collection! Check it out: https://images.unsplash.com/photo-1582418702059-97ebafb35d09",
      author: {
        id: '2',
        name: 'Marcus Rivera',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        role: 'Trend Analyst',
        badges: ['Data Expert'],
        verified: true
      },
      timestamp: '2024-02-28T09:30:00Z',
      reactions: [
        { emoji: '❤️', count: 15, users: [] },
        { emoji: '🔥', count: 10, users: [] }
      ],
      replies: [],
      badges: ['Featured']
    }
  ]);

  const [users] = React.useState<User[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      role: 'Fashion Designer',
      badges: ['Top Contributor', 'Verified Designer'],
      verified: true
    },
    {
      id: '2',
      name: 'Marcus Rivera',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      role: 'Trend Analyst',
      badges: ['Data Expert', 'Rising Star'],
      verified: true
    }
  ]);

  const handleReply = (messageId: string) => {
    sendMessage({
      type: 'reply',
      payload: { messageId }
    });
  };

  const handleReact = (messageId: string, reaction: string) => {
    setMessages(prevMessages => 
      prevMessages.map(msg => {
        if (msg.id === messageId) {
          const existingReaction = msg.reactions.find(r => r.emoji === reaction);
          if (existingReaction) {
            return {
              ...msg,
              reactions: msg.reactions.map(r => 
                r.emoji === reaction ? { ...r, count: r.count + 1 } : r
              )
            };
          } else {
            return {
              ...msg,
              reactions: [...msg.reactions, { emoji: reaction, count: 1, users: [] }]
            };
          }
        }
        return msg;
      })
    );
  };

  const handlePost = (content: string, image?: string) => {
    const newMessage: Message = {
      id: String(Date.now()),
      content: image ? `${content}\n${image}` : content,
      author: users[0], // Using first user as the current user
      timestamp: new Date().toISOString(),
      reactions: [],
      replies: [],
      badges: []
    };
    
    setMessages(prev => [newMessage, ...prev]);
  };

  const handleFollow = (userId: string) => {
    console.log('Following user:', userId);
  };

  const handleMessage = (userId: string) => {
    console.log('Messaging user:', userId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Fashion Community</h1>
        <p className="text-gray-600 dark:text-gray-400">Connect with fashion professionals worldwide</p>
      </div>

      <TrendingTopics />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <CommunityFeed
            messages={messages}
            onReply={handleReply}
            onReact={handleReact}
            onPost={handlePost}
          />
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Active Members
          </h2>
          <div className="space-y-4">
            {users.map((user) => (
              <ProfileCard
                key={user.id}
                user={user}
                onFollow={handleFollow}
                onMessage={handleMessage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;