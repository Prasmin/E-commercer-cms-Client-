import React, { useEffect, useRef } from "react";

import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useDispatch, useSelector } from "react-redux";
import { autoLogin, loginAction } from "./authAction";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate, useLocation } from "react-router-dom";

import { Button } from "@mui/material";
// import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

//
export const LoginPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");

  const { user, isLoading } = useSelector((state) => state.user);
  const location = useLocation();

  const defaultTheme = createTheme();

  const origin = location.state?.from?.pathname || "/dashboard";

  console.log(origin);
  console.log(location);

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" to="/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDt = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    console.log(formDt);

    // disptach login action to call api
    if (!formDt.email || !formDt.password) {
      return alert("Please fill in both the fields!");
    }
    dispatch(loginAction(formDt));
  };

  useEffect(() => {
    user?._id ? navigate(origin) : dispatch(autoLogin());

    // TODO: make router private and auto login
  }, [user?._id, navigate, origin, dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                inputRef={emailRef}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                inputRef={passRef}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* <Link to="/dashboard">
                <CustomButton
                  backgroundColor="#0F1B4C"
                  color="#fff"
                  type="submit"
                  buttonText="Sign In"
                  sx={{ mt: 3, mb: 2 }}
                ></CustomButton>
              </Link> */}
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{ mt: 3 }}
              >
                {isLoading ? (
                  <Spinner variant="warning" animation="border " />
                ) : (
                  "submit"
                )}
                LogIn
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

// import { Header } from "../layout/Header";
// // import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// // import { useDispatch, useSelector } from "react-redux";
// // import { autoLogin, loginAction } from "./authAction";
// // import { Spinner } from "react-bootstrap";
// // import { useNavigate, useLocation } from "react-router-dom";

// return (
//   <div>
//     <Header />
//     <div className="main login-page">
//       <Form className="shadow-lg rounded" onSubmit={handleOnSubmit}>
//         <h3 className="text-center">Welcome Back!</h3>
//         <hr className="mb-5" />

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             ref={emailRef}
//             type="email"
//             placeholder="Enter email"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             ref={passRef}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           {isLoading ? (
//             <Spinner variant="dark" animation="border" />
//           ) : (
//             " Submit"
//           )}
//         </Button>

//         <div className="text-end">
//           Forget password? <a to="/reset-password">Reset now</a>
//         </div>
//       </Form>
//     </div>
//   </div>
// );
