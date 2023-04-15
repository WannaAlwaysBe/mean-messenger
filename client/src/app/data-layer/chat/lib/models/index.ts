import { User } from '@data-layer/user';

export interface Chat {
  id: string;
  users: User[];
  receiver: User;
  lastMessage: LastMessage;
}

export interface LastMessage {
  id: string;
  sender: User;
  text: string;
  timestamp: string;
}

export interface ChatInitialData {
  receiver: string;
}
