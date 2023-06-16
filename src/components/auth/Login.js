import { useState } from "react";
import { authLogin } from "../../services/api";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const Login = () => {

    const { setData } = useSessionStorage();

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const inputChangeHandler = (e) => {
        const inputID = e.target.id;
        if (inputID === "username") {
            return setUsername(e.target.value);
        }
        return setPassword(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            authLogin(username, password)
                .then(res => {
                    // Save Token to session storage
                    return setData('access-token', res.accessToken);
                })
                .then(() => navigate('/index'))
                .catch(err => {
                    return setErr("خطایی رخ داده است، لطفا مجدد تلاش کنید")
                })

            return -1
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h4">
                    خوش آمدید
                </Typography>
                <Typography component='p' sx={{ opacity: 0.5 }}>
                    لطفا نام کاربری و رمز عبور خود را وارد کنید
                </Typography>
                {
                    err &&
                    <Typography component='p' color={'red'}>
                        {err}
                    </Typography>
                }
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        onChange={inputChangeHandler}
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="نام کاربری"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                    />
                    <TextField
                        onChange={inputChangeHandler}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="رمز عبور"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, padding: '1rem 0' }}
                    >
                        ورود
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Login