import { useContext } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FiltersContext } from "../../contexts/filtersContext";

const RadioComponent = ({ type, items }) => {
  const { state: filtersState, dispatch: dispatchFilter } = useContext(FiltersContext);

  const handleChange = (e) => {
    type === "warranty"
      ? dispatchFilter({ type: "WARRANTY", payload: e.target.value })
      : dispatchFilter({ type: "CONDITION", payload: e.target.value });
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <RadioGroup
        aria-labelledby="radio-buttons-group"
        name="radio-buttons-group"
        value={type === "warranty" ? filtersState.warranty : filtersState.condition}
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
