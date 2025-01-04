import { useEffect, useRef, useState } from 'react';

interface WebSocketMessage {
  type: 'message' | 'reaction' | 'reply';
  payload: any;
}

export const useWebSocket = (url: string) => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // In a real implementation, this would connect to a real WebSocket server
    const mockWebSocket = {
      send: (data: string) => {
        const parsed = JSON.parse(data);
        setMessages((prev) => [...prev, parsed]);
      },
      close: () => setIsConnected(false),
    };

    wsRef.current = mockWebSocket as any;
    setIsConnected(true);

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [url]);

  const sendMessage = (message: WebSocketMessage) => {
    if (wsRef.current) {
      wsRef.current.send(JSON.stringify(message));
    }
  };

  return {
    isConnected,
    messages,
    sendMessage,
  };
};