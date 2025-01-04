export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
  badges: string[];
  verified: boolean;
}

export interface Message {
  id: string;
  content: string;
  author: User;
  timestamp: string;
  reactions: Array<{
    emoji: string;
    count: number;
    users: string[];
  }>;
  replies: Message[];
  badges: string[];
}

export interface Topic {
  id: string;
  title: string;
  participants: number;
  growth: string;
  image: string;
}