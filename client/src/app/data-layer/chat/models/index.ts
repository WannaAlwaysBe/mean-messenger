export interface Chat {
  interlocutorName: string;
  messages: Message[];
}

export interface Message {
  timestamp: string;
  text: string;
  author: string;
}
