'use client'
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch, placeholder = "Search products..." }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`
        relative w-1/2 max-w-2xl mx-auto
        transition-all duration-200 ease-in-out
        ${isFocused ? 'scale-105' : 'scale-100'}
      `}
    >
      <div className="relative flex items-center">
        <Search 
          className="absolute left-3 text-gray-400 w-5 h-5"
          aria-hidden="true"
        />
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="
            w-full py-2 pl-10 pr-10
            text-gray-900 
            bg-white border border-gray-200
            rounded-full
            focus:outline-none focus:border-blue-500
            placeholder:text-gray-400
            shadow-sm
          "
        />

        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="
              absolute right-3
              p-1 rounded-full
              text-gray-400 hover:text-gray-600
              transition-colors
            "
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
