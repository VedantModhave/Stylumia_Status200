export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'analyst' | 'designer' | 'manager';
  avatar?: string;
  preferences: {
    notifications: boolean;
    theme: 'light' | 'dark';
    emailDigest: 'daily' | 'weekly' | 'never';
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}