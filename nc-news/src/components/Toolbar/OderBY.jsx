import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function OrderBy() {
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
            <em>OrderBy</em>
          </MenuItem>
          <MenuItem value={10}>Ascending</MenuItem>
          <MenuItem value={20}>Descending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
