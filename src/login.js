import { LockClockOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import * as React from 'react'
import { actions } from './store';
import AxiosIns from './store/AxiosAPI';
import UserContext from './store/Context';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/anhtaibavi02042001">
                Trung Tài
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const initialState = {
//     isfetching: false,
//     currentUser: [],
//     error: false
// };

// const userReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN_START': {
//             return {
//                 ...state,
//                 isfetching: true
//             }
//         }
//         case 'LOGIN_SUCCESS': {
//             return {
//                 ...state,
//                 currentUser: action.data,
//                 isfetching: false
//             }
//         }
//         case 'LOGIN_FAIL': {
//             return {
//                 ...state,
//                 error: true

//             }


//         }
//     }
// }
export default function Signin() {
    const email = React.useRef('');
    const password = React.useRef('');
    const [Emailtext, setEmailtext] = React.useState("");
    const [user, userdispatch] = React.useContext(UserContext);
    console.log(user);
    const [loading, Setloading] = React.useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
    }

    const handlelogin = async () => {
        Setloading(true)
        userdispatch(actions.loginstart())
        try {
            const res = await AxiosIns.post("/user/api/login", {
                Email: email.current?.value,
                Password: password.current?.value
            });
            if (res.data.accessToken && res.data.refreshToken) {
                Setloading(false)
                window.location.href = '/home';
                sessionStorage.setItem("accessToken", res.data.accessToken);
                sessionStorage.setItem("refreshToken", res.data.refreshToken);
                sessionStorage.setItem("Username", res.data.Name);
                userdispatch(actions.loginSuccess(res));
            }
        }
        catch (err) {
            Setloading(false)
            userdispatch(actions.loginfail())
            if (email.current?.value === '') {
                setEmailtext("Vui lòng điền vào trường này!");
            }
            else {
                setEmailtext("");
            }
        }

    };
    const pushEnter = (e) => {
        if (e.keycode === 13) {
            e.preventDefault();
            document.getElementById("loginbtn").click();
        }
    };




    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box

                    sx={{
                        alignItems: 'center',
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: "column"
                    }}>

                    <Avatar
                        sx={{
                            bgcolor: "primary.main"
                        }} >
                        <LockClockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng nhập hệ thống
                    </Typography>
                    <Box onSubmit={handlesubmit} component="form" sx={{ mt: 1 }}>
                        <TextField
                            onKeyUp={pushEnter}
                            helperText={Emailtext}
                            inputRef={email}
                            required
                            fullWidth
                            label="Email Address"
                            name='Email'
                            autoFocus
                            autoComplete='Email'
                            margin="normal"
                            id='Email'
                        />
                        <TextField
                            onKeyUp={pushEnter}
                            inputRef={password}
                            required
                            fullWidth
                            label="Password"
                            name='Password'
                            autoComplete='Password'
                            margin="normal"
                            type="password"
                            id="Password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color='primary' />}
                            label="Remember me"
                        />
                        <LoadingButton
                            id="loginbtn"
                            onClick={handlelogin}
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{
                                mt: 3,
                                mb: 2
                            }}
                            loading={loading}
                            loadingPosition='center'
                            style={{ background: "#34cceb" }}
                        >
                            Sign In
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forgot Password?
                                </Link>
                            </Grid>
                            <Grid item >
                                <Link href='#' variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mb: 5, mt: 8 }} />
            </Container>
            {/* )} */}
        </>
    )
}
