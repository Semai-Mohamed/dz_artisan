import * as React from 'react';
import { ChatMessageProps } from '../types';

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message, time, isUser, status }) => {
  return (
    <div className="flex flex-col px-3 mb-4">
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full w-[285px]`}>
        <div className={`flex flex-col pt-3 pr-5 pb-3 pl-5 rounded-2xl ${
          isUser ? 'bg-teal-500 text-white' : 'bg-zinc-100 text-neutral-700'
        }`}>
          <div className="text-sm">{message}</div>
        </div>
        <div className="flex items-center gap-1 mt-1 text-xs text-zinc-400">
          {time}
          {isUser && status && (
            <span className="ml-1">
              {status === 'sent' && '✓'}
              {status === 'delivered' && '✓✓'}
              {status === 'read' && '✓✓'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;