import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  // IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Person  } from "@mui/icons-material";
// import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [signupPopupOpen, setSignupPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user");
        if (response.status === 200) {
          setIsLoggedIn(true);
          setUser(response.data);
        }
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    checkUserLoggedIn();
  }, []);

  const handleLoginClick = () => {
    if (signupPopupOpen) {
      setSignupPopupOpen(false);
      setLoginPopupOpen(true);
    } else {
      setLoginPopupOpen(true);
    }
  };
  const handleLoginClose = () => {
    setLoginPopupOpen(false);
  };

  const handleSignupClick = () => {
    setSignupPopupOpen(true);
  };

  const handleSignupClose = () => {
    setSignupPopupOpen(false);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        name: "satish",
        password: "123456",
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        setUser(response.data);
        handleLoginClose();

        // Show success notification
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Login failed", error.response);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/logout");
      if (response.status === 200) {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username: "satish",
        password: "123456",
        // Other signup data...
      });

      if (response.status === 200) {
        handleSignupClose();
        handleLoginClick();
        toast.success("SignUp successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  // ... Remaining functions ...

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6">MoviesHub</Typography>

        <TextField
          placeholder="Search for Movies,Shows and Channels etc"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <Search /> */}
              </InputAdornment>
            ),
          }}
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: "4px",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          {isLoggedIn ? (
            <>
              <span>Welcome, {user && user.username}</span>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={handleSignupClick}
                style={{ marginRight: "10px" }}
              >
                <Person /> Signup
              </Button>
              <Button
                color="inherit"
                onClick={handleLoginClick}
                style={{ marginRight: "10px" }}
              >
                <Person /> Login
              </Button>
              {/* <IconButton color="inherit" component={Link} to="/cart">
                <ShoppingCart />
              </IconButton> */}
            </>
          )}
        </div>

        <Dialog open={signupPopupOpen} onClose={handleSignupClose}>
          <DialogTitle>Signup</DialogTitle>
          <DialogContent>
            <TextField label="Username" fullWidth margin="normal" />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />
            {/* Other signup form fields */}
            <Button color="primary" variant="contained" onClick={handleSignup}>
              Signup
            </Button>
           
          </DialogContent>
        </Dialog>

        <Dialog open={loginPopupOpen} onClose={handleLoginClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <TextField label="Username" fullWidth margin="normal" />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button color="primary" variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </DialogContent>
        </Dialog>
      </Toolbar>
      <ToastContainer />
    </AppBar>
  );
};

export default Navbar;
