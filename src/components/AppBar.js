import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CalDisp from './CalDisp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../images/Logo-Peach.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    maxWidth: 50,
    marginRight : 5,
  },
});

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#252422' , margin : '' }}>
        <Toolbar >
        <img src={img} alt="logo" className={classes.logo}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PEACH
          </Typography>
          <Button color="warning">Calendar</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
