import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import {
  FaFutbol,
  FaUtensils,
  FaHouse,
  FaCode,
  FaCircleInfo,
} from "react-icons/fa6";
import { useState } from "react";
import BadgeAvatars from "./Avatar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-around",
  backgroundColor: "#f91111",
  color: "white",
}));

function NavBar() {
  const [open, setOpen] = useState(false);

  const topics = [
    { text: "Home", icon: <FaHouse color='black'/> },
    { text: "Coding", icon: <FaCode color='black' /> },
    { text: "Cooking", icon: <FaUtensils color='black' /> },
    { text: "Footbal", icon: <FaFutbol color='black' /> },
    { text: "About", icon: <FaCircleInfo color='black' /> },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <List>
        {topics.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const drawerOpen = () => {
    setOpen(true);
  };
  const drawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar style={{ backgroundColor: "#f91111" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={drawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              NC - News
            </Typography>
          </Box>
          <BadgeAvatars />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={drawerClose}>
        <DrawerHeader>
          <Typography variant="h6" component="div">
            NC - News
          </Typography>
          <IconButton onClick={drawerClose}>
            <ChevronLeftIcon sx={{ color: "#fff" }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {DrawerList}
      </Drawer>
    </Box>
  );
}

export default NavBar;