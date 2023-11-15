import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar'; // Import your Sidebar component
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" style={{ flexGrow: 1, marginLeft: '12px' }}>
          Project Store
        </Typography>
        <IconButton onClick={toggleSearch} color="inherit">
          <SearchIcon />
        </IconButton>
        {showSearchInput && <InputBase placeholder="Search..." />}
      </Toolbar>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </AppBar>
  );
};

export default Navbar;
