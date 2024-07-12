import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

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
      const drawerOpen = () => {
        setOpen(true);
      };
      const drawerClose = () => {
        setOpen(false);
      };

//need to finish
//styling and add a log out button

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
            <Avatar alt="user name" src="https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141" />
          </StyledBadge>
        </IconButton>
        <Typography>Username</Typography>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={drawerClose}>
        <DrawerHeader
          sx={{
            width: 200,
            display: "flex",
          }}
        >
          <IconButton onClick={drawerClose}>
            <ChevronRightIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Typography variant="h6" component="div">
            UserName
          </Typography>
        </DrawerHeader>
        
        <Divider />
        <Avatar alt="user name" src="https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
     />
      </Drawer>
    </Stack>
  );
}
