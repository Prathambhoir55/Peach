import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../images/Peach-logo.png'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 20px;
  }
`;
const theme = createTheme()
export default function SignInSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={8}
                    sx={{
                        backgroundImage: `url(${img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#faedcd',
                        // backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 20,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5" style={{color: '#e76f51'}}>
                            Sign In to Peach
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, mx: 4 }}>


                            <StyledTextField
                                margin="normal"
                                required
                                fullWidth
                                color="warning"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"

                            />
                            <StyledTextField
                                margin="normal"
                                required
                                fullWidth
                                color='warning'
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, borderRadius: '15px' }}
                                style={{ backgroundColor: "#007f5f" }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to='/signup' variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}