import React, { useState } from 'react';
import { InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      component="form"
      style={{ width: expanded ? 250 : 40, transition: 'width 0.5s' }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded(true)}
    >
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        style={{ display: expanded ? 'block' : 'none' }}
      />
    </Paper>
  );
};

export default SearchBar;