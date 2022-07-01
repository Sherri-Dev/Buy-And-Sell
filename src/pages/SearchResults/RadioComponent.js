import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const RadioComponent = ({ items }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <RadioGroup
        aria-labelledby="radio-buttons-group"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {items.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item}
              control={<Radio />}
              sx={{
                "&:hover": {
                  "& .css-1hbvpl3-MuiSvgIcon-root": {
                    borderRadius: "999px",
                    boxShadow: "0 0 5px 3px yellow",
                  },
                },
              }}
              label={item[0].toUpperCase() + item.slice(1)}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioComponent;
