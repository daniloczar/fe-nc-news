import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function OrderBy({ setOrder }) {
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          className="dropdownOrder"
          defaultValue={"OrderBy"}
          onChange={handleOrderChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ fontSize: 14 }}
        >
          <MenuItem value="OrderBy">
            <em>OrderBy</em>
          </MenuItem>
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Descending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
