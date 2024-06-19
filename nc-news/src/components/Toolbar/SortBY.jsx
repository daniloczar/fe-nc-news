import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortBy() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          className="dropdownOrder"
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ fontSize: 14 }}
        >
          <MenuItem value="">
            <em>SortBy</em>
          </MenuItem>
          <MenuItem value={10}>Newest</MenuItem>
          <MenuItem value={20}>Oldest</MenuItem>
          <MenuItem value={30}>Most liked</MenuItem>
          <MenuItem value={40}>Least liked</MenuItem>
          <MenuItem value={50}>Comments</MenuItem>
          <MenuItem value={60}>Author</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
