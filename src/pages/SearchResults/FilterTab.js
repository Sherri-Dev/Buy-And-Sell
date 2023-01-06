import { useState } from "react";
import { Collapse, ListItemButton, ListItemText, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FilterTab = ({ title, element }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItemButton
        component={"li"}
        onClick={() => setOpen(!open)}
        sx={{
          backgroundColor: open && "rgba(0,0,0,0.05)",
          ".MuiTypography-root": { fontWeight: "500", fontSize: "15px" },
        }}
      >
        <ListItemText
          primary={title}
          sx={{ color: "black" }}
          component={"h3"}
        />
        {open ? <RemoveIcon /> : <AddIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            p: { xs: "5px 20px 5px 20px", sm: "15px 20px 15px 20px" },
            textAlign: "center",
            "ul.MuiList-root": { py: 0 },
          }}
        >
          <ListItemText primary={element} />
        </List>
      </Collapse>
    </>
  );
};

export default FilterTab;
