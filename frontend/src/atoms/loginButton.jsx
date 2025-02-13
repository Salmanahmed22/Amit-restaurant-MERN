"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import toast, { Toaster } from "react-hot-toast";
import { set } from "date-fns";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(173, 52, 62)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function LoginButton({ display }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [username, setUsername] = useState("")
  const open = Boolean(anchorEl);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
    if (token) {
      const username = Cookies.get("username");
      setUsername(username);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("isAdmin");
    setIsLoggedIn(false);
    setAnchorEl(null);
    toast.success("Logout successful!");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className={display}>
      <Button
        id="customized-button"
        aria-controls={open ? "customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: '#AD343E', 
          '&:hover': {
            backgroundColor: '#8a282f', 
          }
        }}
      >
        {isLoggedIn ? username : "Login"}
      </Button>
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          "aria-labelledby": "customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
      >
        {isLoggedIn ? (
          <>
            <MenuItem onClick={() => router.push("/profile")} disableRipple>
              <PersonIcon />
              Profile
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleLogout} disableRipple>
              <ExitToAppIcon />
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={() => router.push("/Login")} disableRipple>
              <LoginIcon />
              Login
            </MenuItem>
            <MenuItem onClick={() => router.push("/Signup")} disableRipple>
              <AppRegistrationIcon />
              Register
            </MenuItem>
          </>
        )}
      </StyledMenu>
    </div>
  );
}
