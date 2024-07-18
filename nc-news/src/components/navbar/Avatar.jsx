import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../User/UserContext";
import UsersList from "../User/User";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-around",
  backgroundColor: "#f91111",
  color: "white",
}));

export default function BadgeAvatars() {
    const [open, setOpen] = useState(false);
    const { currentUser, logout } = useContext(UserContext);

      const drawerOpen = () => {
        setOpen(true);
      };
      const drawerClose = () => {
        setOpen(false);
      };

  return (
    <Stack>
      <Toolbar sx={{ mr: -4 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={drawerOpen}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt={currentUser ? currentUser.name : "Anonymous"}
              src={
                currentUser
                  ? currentUser.avatar_url
                  : "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/256/Lion-Avatar-icon.png"
              }
            />
          </StyledBadge>
        </IconButton>
        <Typography>{currentUser ? currentUser.name : "Guest"}</Typography>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={drawerClose}>
        <DrawerHeader className="drawerLogin">
          <IconButton onClick={drawerClose}>
            <ChevronRightIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Typography variant="h6" component="div">
            {currentUser ? currentUser.name : "Guest"}
          </Typography>
          <Avatar
            alt={currentUser ? currentUser.name : "Anonymous"}
            src={
              currentUser
                ? currentUser.avatar_url
                : "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/256/Lion-Avatar-icon.png"
            }
          />
        </DrawerHeader>

        <Divider />
        <Divider />
        <div className="userListLogin">
          <UsersList />
        </div>
        <Stack direction="row" spacing={2} justifyContent="center" padding={2}>
          {currentUser ? (
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          ) : null}
        </Stack>
      </Drawer>
    </Stack>
  );
}
