import React, { useState } from "react";
import {
  AppBar as AB,
  Toolbar,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  }
}));

const AppBar = props => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => e => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key == "Shift")) return;
    setDrawerOpen(open);
  };

  const list = (
    <div className={classes.list}>
      <List>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="hello world" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AB position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={setDrawerOpen.bind(null, true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AB>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={setDrawerOpen.bind(null, false)}
      >
        {list}
      </Drawer>
    </>
  );
};

export default AppBar;
