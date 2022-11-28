import React from 'react';
import useStyles from './formStyles.js';
import search from '../../images/searchImage.png';
import filter from '../../images/filterImage.png';
import BusinessCard from '../Business/BusinessCard.js';


function Search () {
    const classes = useStyles();
    return (
        <>
            <TextField
                sx={{        
                    ml: 1,
                    p: '10px',
                    flex: 1,
                    width: '100%',
                    backgroundColor:'#f5f5f7',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: {sm: 16, md: 20, lg: 28, xl: 28},}}
                placeholder="Address, City, or Zip Code"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onKeyDown={handleKeyPress}
            />
        </>
    );
}

export default Search;