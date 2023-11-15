import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Avatar } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 250, // Adjust the width as needed
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250, // Adjust the width as needed
          paddingTop: '30px', // Adjust the top padding as needed
        },
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        {/* Example using Avatar component */}
        <Avatar  src="https://i.pinimg.com/736x/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef--branding.jpg" style={{ width: '100px', height: '100px' }} />
      </div>
      <List>
        <ListItem button onClick={onClose}>
          <IconButton>
            <CodeIcon />
          </IconButton>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <IconButton>
            <ShowChartIcon />
          </IconButton>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <IconButton>
            <InfoIcon />
          </IconButton>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <IconButton>
            <ContactMailIcon />
          </IconButton>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;