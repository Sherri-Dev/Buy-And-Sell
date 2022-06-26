import { Tab, Tabs } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { Container } from "@mui/system";

const TabMenu = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ sx: { color: "white" } }}
        sx={{
          ".Mui-selected": { backgroundColor: "primary.main" },
          paddingBottom: "3rem",
          backgroundColor: "primary.main",
        }}
      >
        <Tab
          icon={<PetsIcon />}
          sx={{ padding: "0px 16px" }}
          iconPosition="start"
          label="start"
        />
        <Tab icon={<PetsIcon />} iconPosition="start" label="start" />
        <Tab icon={<PetsIcon />} iconPosition="start" label="start" />
        <Tab icon={<PetsIcon />} iconPosition="start" label="start" />
      </Tabs>
    </Container>
  );
};

export default TabMenu;
