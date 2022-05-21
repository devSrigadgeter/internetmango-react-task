// external imports
import React, { Fragment, useState } from "react";
import {
  Box,
  Checkbox,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const styles = {
  childList: {
    pl: 2,
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  typography: {
    color: "text.gray",
  },
};

// CheckboxFilter Component
const CheckboxFilter = ({ list, isChild = false }) => {
  const [checked, setChecked] = useState([0]);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={isChild && styles.childList}>
      {list.map((item) => {
        const labelId = `checkbox-list-label-${item.label}`;

        return (
          <Fragment key={item.label}>
            <ListItem
              disablePadding
              secondaryAction={
                item?.list ? (
                  <IconButton
                    edge="end"
                    aria-label="expand"
                    onClick={handleClick}
                  >
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                ) : null
              }
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(item.label)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(item.label) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={
                    <Box sx={styles.box}>
                      <Typography>{item.label}</Typography>
                      <Typography variant="caption" sx={styles.typography}>
                        &#40;{item.count}&#41;
                      </Typography>
                    </Box>
                  }
                />
              </ListItemButton>
            </ListItem>
            {item?.list ? (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <CheckboxFilter list={item.list} isChild />
              </Collapse>
            ) : null}
          </Fragment>
        );
      })}
    </List>
  );
};

export default CheckboxFilter;
