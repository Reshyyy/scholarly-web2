import { Box, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery); // Call the search function when Enter key is pressed
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress} // Listen for key press event
          sx={{ width: 300, marginLeft: 'auto', background: '#fff', marginBottom: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default Searchbar;
