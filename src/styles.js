import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  home :{
    width: '100%',
    height: '100vh',
    background  : 'darkgray'
  },

  App:{
    width: '100%',
    height: 'auto',
    background : '#403D39'
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20em',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(100, 101, 192)',
    margin: '12px 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: '20vmin',
    borderRadius: '15%',
    padding: '0 5%',
    margin: '3% 0',
    [theme.breakpoints.down('sm')]: {
      height: '35vmin',
    },
  },
}));


