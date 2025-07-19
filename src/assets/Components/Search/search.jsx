import React from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/search-icon.svg';
import styles from './search.module.css'; 

const Search = ({ placeholder, searchData }) => {
  return (
    <div className="bg-green-500 py-4 px-4 rounded-md flex items-center justify-center">
      <div className={`relative bg-white rounded-md overflow-hidden ${styles.wrapper}`}>
        <input
          type="text"
          placeholder={placeholder}
          className={`${styles.search} focus:outline-none`}
        />
        <button
          className={`${styles.searchButton} absolute right-0 top-0 w-12 flex items-center justify-center bg-white text-gray-500 hover:text-gray-700`}
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Search;