import React from 'react';

type ChatHeaderProps = {
  name: string;
  status: 'online' | 'offline';
  avatar?: string;
};

export const ChatHeader: React.FC<ChatHeaderProps> = ({ name, status, avatar }) => (
  <div className="flex gap-4 items-center p-4 border-b border-zinc-200">
    <div className="relative">
      <div className="flex justify-center items-center bg-zinc-100 h-[42px] w-[42px] rounded-full">
        {avatar ? (
          <img src={avatar} alt="" className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="text-lg text-zinc-500">{name[0]}</span>
        )}
      </div>
      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
        status === 'online' ? 'bg-green-500' : 'bg-zinc-300'
      }`} />
    </div>
    <div className="flex flex-col">
      <div className="text-sm font-semibold text-zinc-900">{name}</div>
      <div className="text-xs text-zinc-500">{status}</div>
    </div>
  </div>
);
