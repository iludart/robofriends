import React from 'react';
import '../styles/search-box.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='searchbar pa2'>
      <h1 className='f1 pa1 ma1'>RoboFriends</h1>
      <input
        className='searchbox pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;