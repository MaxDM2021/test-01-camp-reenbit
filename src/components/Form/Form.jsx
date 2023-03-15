// import React, { useState } from 'react';
// import { useDebouncedCallback } from 'use-debounce';

// import SearchList from '../../pages/MovieSearch/MovieSearch';



// import FormSCSS from './Form.module.scss'


// const delay = 400;



// const Search = () => {
//   const [searchString, setSearchString] = useState('');
//   const [filter, setFilter] = useState('');


//   const debouncedSetFilter = useDebouncedCallback(
//     filter => setFilter(filter),
//     delay
//   );

//   const onChangeSearch = e => {
//     const { value } = e.target;
//     setSearchString(value);
//     debouncedSetFilter(value);

//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         value={searchString}
//         onChange={onChangeSearch}
//         className={FormSCSS.SearchFormInput} 
//        autoFocus
//         placeholder="Filter by name..."
//       />


//       <SearchList filter={filter} />
//     </div>
//   );
// };

// export default Search;


// ================================


import { ImSearch } from 'react-icons/im';

import PropTypes from 'prop-types';
import FormSCSS from './Form.module.scss'


export const Form = ({ submit, searchMovieValue, onChang }) => {
    const onChange = event => {
        onChang(event.target.value.toLowerCase());
    };
    
    return (
        <form id="search-form" autoComplete="off" onSubmit={submit} className={FormSCSS.SearchForm}>
                 <button type="submit" className={FormSCSS.SearchFormButton}>
        <ImSearch />
        <span className={FormSCSS.SearchFormButtonLabel}>Search</span>
      </button>
           
           
            <input
                className={FormSCSS.SearchFormInput}
                type="text"
                name="name"
                autoFocus
                placeholder="Filter by name..."
                onChange={onChange}
                value={searchMovieValue}
            />
           
        </form>
    )
}
Form.propTypes = {
    submit: PropTypes.func.isRequired,
    searchMovieValue: PropTypes.string.isRequired,
    onChang: PropTypes.func.isRequired,
};