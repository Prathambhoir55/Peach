import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../images/Peach-logo.png'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material';
import { useState, useEffect } from 'react'

export const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 20px;
  }
`;
const theme = createTheme()
export default function SignInSide() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [pass, setPass] = useState();
    const [Cpass, setCpass] = useState();

    const navigate = useNavigate();


    const registerUser = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "email": email,
            "password": pass,
            "confirm_password": Cpass,
            "phone_no": phone
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/register/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log(name);    
    }

    // navigate('../signin', { replace: true })

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
                        backgroundColor: '#c3facf',
                        // backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5" style={{ color: '#e76f51' }}>
                            Sign Up to Peach
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1, mx: 4 }}>
                            <StyledTextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                color="warning"
                                name="name"
                                autoComplete=""
                                onChange={(e) => setName(e.target.value)}

                            />

                            <StyledTextField
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="Phone Number"
                                name="number"
                                color="warning"
                                autoComplete=""
                                onChange={(e) => setPhone(e.target.value)}


                            />

                            <StyledTextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                color="warning"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <StyledTextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                color="warning"
                                autoComplete="current-password"
                                onChange={(e) => setPass(e.target.value)}
                            />

                            <StyledTextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                type="password"
                                id="password"
                                color="warning"
                                autoComplete="current-password"
                                onChange={(e) => setCpass(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, borderRadius: '15px' }}
                                style={{ backgroundColor: "#007f5f" }}
                                onClick={registerUser}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to='/' variant="body2">
                                        {"Already have an account? Sign In"}
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