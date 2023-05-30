export interface Message {
  id?: string;
  sender: string;
  text: string;
  chat?: string;
  timestamp?: string;
  receiver: string;
}
