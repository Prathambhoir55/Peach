import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';




export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#252422' , margin : '' }}>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PEACH
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
