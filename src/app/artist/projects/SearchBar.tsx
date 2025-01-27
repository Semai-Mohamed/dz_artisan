import * as React from 'react';
import { SearchBarProps } from './types';

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 w-full text-xs font-medium max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-auto gap-3 justify-center items-start min-h-[49px] text-neutral-400">
        <div className="flex flex-wrap flex-1 shrink gap-2.5 justify-center px-4 py-4 w-full bg-white rounded-xl border border-solid basis-0 border-stone-300 border-opacity-80 min-h-[49px] min-w-[240px] max-md:max-w-full">
          <div className="flex shrink-0 my-auto w-4 h-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 shrink basis-0 max-md:max-w-full bg-transparent outline-none"
            placeholder="Search your bid here...."
            aria-label="Search bids"
          />
        </div>
      </div>
      <button type="submit" className="self-start px-6 py-4 text-right text-white whitespace-nowrap rounded-lg bg-neutral-800 min-h-[48px]">
        Search
      </button>
    </form>
  );
};