import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const HeaderMenu = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default HeaderMenu;
