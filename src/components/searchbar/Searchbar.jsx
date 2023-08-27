import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
    <TextField 
        id="search"
        type="search"
        label="Search"
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
    
  )
}

export default Searchbar