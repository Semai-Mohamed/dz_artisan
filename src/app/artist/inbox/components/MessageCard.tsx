import * as React from 'react';
import { MessageProps } from '../types';

const MessageCard: React.FC<MessageProps> = ({ 
  sender, 
  time, 
  subject,
  content,
  tags,
  hasUnread,
  avatar,
  isOnline
}) => {
  return (
    <div className="flex items-start p-4 w-full hover:bg-zinc-50 cursor-pointer rounded-lg border border-solid border-zinc-200">
      <div className="relative mr-3">
        <div className="flex justify-center items-center bg-zinc-100 h-[48px] w-[48px] rounded-full">
          {avatar ? (
            <img src={avatar} alt="" className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-lg text-zinc-500">{sender[0]}</span>
          )}
        </div>
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">{sender}</span>
            {hasUnread && (
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
            )}
          </div>
          <span className="text-xs text-zinc-500">{time}</span>
        </div>
        
        <div className="mt-1 text-sm font-medium text-neutral-900">{subject}</div>
        <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{content}</p>
        
        {tags.length > 0 && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-lg ${
                  tag.variant === 'primary'
                    ? 'bg-teal-500 text-white'
                    : tag.variant === 'secondary'
                    ? 'bg-zinc-100 text-teal-500'
                    : 'bg-white text-teal-500 border border-zinc-200'
                }`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageCard;