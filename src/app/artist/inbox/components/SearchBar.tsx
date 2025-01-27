import React from 'react';

export const SearchBar = () => (
  <div className="flex gap-2.5 items-center px-3 w-full text-base leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-200 min-h-[40px] text-zinc-500">
    <div className="flex gap-4 items-center self-stretch my-auto">
      <img
        src="/search-icon.svg"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <input
        type="search"
        placeholder="Search"
        className="bg-transparent border-none outline-none w-full"
      />
    </div>
  </div>
);
