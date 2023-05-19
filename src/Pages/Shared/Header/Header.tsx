import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import DrawerComponent from "./DrawerComponent";


const Header = () => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleNavItemClick = () => {
    setIsDrawerOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <AppBar position="static" onClick={handleDrawerToggle}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        {isMatch ? (
          <>
            <DrawerComponent navItems={navItems} handleNavItemClick={handleNavItemClick}/>
          </>
        ) : (
          <List sx={{ marginLeft: "auto", display: "flex" }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText className='text' primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

