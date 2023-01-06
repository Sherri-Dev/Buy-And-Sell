import { Slider, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import Btn from "../../components/shared/Btn";
import { FiltersContext } from "../../contexts/filtersContext";

const RangeSlider = () => {
  const min = 0;
  const max = 10000;
  const { state: filtersState, dispatch: dispatchValue } =
    useContext(FiltersContext);
  const handleChange = (event, newValue) => {
    dispatchValue({ type: "PRICE", payload: newValue });
  };

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "minInput":
        dispatchValue({ type: "PRICE", payload: [Number(e.target.value), filtersState.priceRange[1]] });
        break;
      case "maxInput":
        dispatchValue({ type: "PRICE", payload: [filtersState.priceRange[0], Number(e.target.value)] });
        break;
      default:
        break;
    }
  };

  const handleBlur = () => {
    if (filtersState.priceRange[0] > filtersState.priceRange[1]) {
      dispatchValue({ type: "PRICE", payload: [filtersState.priceRange[1], filtersState.priceRange[0]] });
    }
  };

  return (
    <>
      <Typography align="left" sx={{ mb: "10px" }}>
        Price ($) {filtersState.priceRange[0]}-{filtersState.priceRange[1]}
      </Typography>{" "}
      <Slider
        getAriaLabel={() => "Price Range Slider"}
        value={filtersState.priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        sx={{
          height: "8px",
          "& .MuiSlider-thumb": {
            height: 27,
            width: 27,
            backgroundColor: "white",
            border: "1px solid currentColor",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
            },
            ":before": {
              position: "absolute",
              top: "50%",
              left: "53%",
              transform: "translate(53%,-50%)",
              height: "60%",
              width: "2px",
              backgroundColor: "text.secondary",
            },
            ":after": {
              position: "absolute",
              top: "50%",
              left: "35%",
              transform: "translate(35%,-50%)",
              height: "60%",
              width: "2px",
              backgroundColor: "text.secondary",
            },
          },
          "& .MuiSlider-rail": {
            backgroundColor: "secondary.main",
          },
        }}
      />
      <Stack
        gap="0.5rem"
        direction={"row"}
        alignItems="center"
        sx={{ mt: "0.5rem" }}
      >
        <TextField
          id="minInput"
          value={filtersState.priceRange[0]}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            min: min,
            max: max,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <Typography component={"span"}>-</Typography>
        <TextField
          id="maxInput"
          value={filtersState.priceRange[1]}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            min: min,
            max: max,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </Stack>
      <Btn
        text="Search"
        variant="contained"
        sx={{
          mt: "1rem",
          display: "block",
          fontSize: "0.9rem",
          py: "0.5rem",
        }}
      />
    </>
  );
};
export default RangeSlider;
