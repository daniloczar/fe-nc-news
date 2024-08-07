import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortBytab({ setSortBy }) {
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          className="dropdownOrder"
          defaultValue={"SortBy"}
          onChange={handleSortByChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ fontSize: 14 }}
        >
          <MenuItem value={"SortBy"}>
            <em>SortBy</em>
          </MenuItem>
          <MenuItem value={"created_at"}>Date</MenuItem>
          <MenuItem value={"author"}>Author</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
          <MenuItem value={"title"}>Title</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
