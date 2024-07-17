import * as React from "react";
import * as api from "../utils/api";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OrderBy from "./OderBY";
import SortBytab from "./SortBYtab";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function TabsBar({ setSortBy, setOrder }) {
  const [selectedTab, setSelectedTab] = useState("one");
  const [topicList, setTopicList] = useState([]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  useEffect(() => {
    api
      .getTopics()
      .then((data) => {
        setTopicList(data.ArrTopics);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#c9c8c8",
        boxShadow: 4,
        display: "flex",
        justifyContent: "space-between",
        paddingRight: 3,
        paddingLeft: 2,
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="navigation"
      >
        <Tab value="one" label="Top Stories" component={Link} to={"/"} />
        <Tab
          value="two"
          label="Football"
          component={Link}
          to={"/topic/football"}
        />
        <Tab
          value="three"
          label="Coding"
          component={Link}
          to={"/topic/coding"}
        />
        <Tab
          value="four"
          label="Cooking"
          component={Link}
          to={"/topic/cooking"}
        />
      </Tabs>
      <div style={{ display: "flex", alignItems: "center" }}>
        <OrderBy setOrder={setOrder} />
        <SortBytab setSortBy={setSortBy} />
      </div>
    </Box>
  );
}
