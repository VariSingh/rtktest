import * as React from "react";
import TuneIcon from '@mui/icons-material/Tune';
import PersonIcon from '@mui/icons-material/Person';
import DvrIcon from '@mui/icons-material/Dvr';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const drawerWidth = 240;
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding component={Link} to="/dashboard/admin-dashboard">
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Admin Accounts"} />
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem disablePadding component={Link} to="/dashboard/activity-log">
          <ListItemButton>
            <ListItemIcon>
              <DvrIcon />
            </ListItemIcon>
            <ListItemText primary={"Activity log"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={Link} to="/dashboard/settings">
          <ListItemButton>
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>
      </Drawer>
    );
};

export default Sidebar;