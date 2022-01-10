import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react'

export default function SignIn() {

    const theme = createTheme();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        localStorage.getItem('login-data')
    })

    const handleSubmit = async () => {
        console.log(username, password)
        let details = { username, password }
        let result = await fetch('https://myphysio.digitaldarwin.in/api/login/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(details)
        });

        result = await result.json()

        localStorage.setItem("login-data", JSON.stringify(result))

    };



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        padding : 5,
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#95d5b2'
                    }}
                >
                    <Typography component="h1" variant="h3" sx={{color : '#d8f3dc'}}>
                        PHYSIOAI
                    </Typography>
                    <Typography component="h3" variant="h5">
                        Welcome Back!
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            sx={{
                                backgroundColor: 'white'
                            }}
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="Username"
                            variant ="filled"
                            color="success"
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            sx={{
                                backgroundColor: 'white'
                            }}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            variant='filled'
                            color="success"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 , backgroundColor :'#1b4332','&:hover': {
                                cursor: 'pointer',
                                backgroundColor: '#2d6a4f', }}}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

