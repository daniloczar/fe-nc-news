import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OrderBy from "./OderBY";
import SortBy from "./SortBY";
import { Link } from "react-router-dom";

export default function TabsBar() {
  const [selectedTab, setSelectedTab] = React.useState("one");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="navigation"
      >
        <Tab value="one" label="Top Stories" component={Link} to={"/"} />
        <Tab value="two" label="Football" component={Link} to={"/articles"} />
        <Tab value="three" label="Coding" />
        <Tab value="four" label="Cooking" />
        <OrderBy />
        <SortBy />
      </Tabs>
    </Box>
  );
}
