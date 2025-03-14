'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import debounce from 'lodash/debounce';

interface SearchBarProps {
  onSearch: (query: string) => Promise<void> | void;
  placeholder?: string;
  debounceMs?: number;
  minSearchLength?: number;
  className?: string;
}

const SearchBar = ({ 
  onSearch, 
  placeholder = "Zoek producten...",
  debounceMs = 300,
  minSearchLength = 2,
  className = ""
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.length >= minSearchLength) {
        try {
          setIsLoading(true);
          setError(null);
          await onSearch(query);
        } catch (err) {
          setError('Er ging iets mis bij het zoeken. Probeer het opnieuw.');
          console.error('Search error:', err);
        } finally {
          setIsLoading(false);
        }
      }
    }, debounceMs),
    [onSearch, minSearchLength]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    debouncedSearch(newQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setError(null);
    onSearch('');
  };

  return (
    <div className={`w-full max-w-2xl mx-auto my-2 ${className}`}>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          debouncedSearch(searchQuery);
        }}
        className={`
          relative
          transition-all duration-300 ease-out
          ${isFocused ? 'scale-[1.02]' : 'scale-100'}
        `}
      >
        <div className="relative flex items-center">
          <Search 
            className={`
              absolute left-3 w-5 h-5
              transition-colors duration-200
              ${isFocused ? 'text-blue-500' : 'text-gray-400'}
            `}
            aria-hidden="true"
          />
          
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            aria-label="Search"
            aria-describedby={error ? "search-error" : undefined}
            className={`
              w-full py-3 pl-10 pr-10
              text-gray-900 
              bg-white border
              rounded-full
              focus:outline-none
              placeholder:text-gray-400
              shadow-sm
              transition-all duration-200
              ${isFocused ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'}
              ${error ? 'border-red-500 ring-2 ring-red-100' : ''}
            `}
          />

          <div className="absolute right-3 flex items-center gap-2">
            {isLoading && (
              <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
            )}
            
            {searchQuery && !isLoading && (
              <button
                type="button"
                onClick={clearSearch}
                className="
                  p-1.5 rounded-full
                  text-gray-400 hover:text-gray-600
                  hover:bg-gray-100
                  transition-all duration-200
                "
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Zoekopdracht wissen</span>
              </button>
            )}
          </div>
        </div>
      </form>

      {error && (
        <div 
          id="search-error"
          className="mt-2 text-sm text-red-500 animate-fadeIn"
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
