
import * as React from 'react';
import { Drawer, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './Drawercomponent.css'

interface DrawerComponentProps {
  navItems: { label: string; path: string }[];
  handleNavItemClick: () => void;
}
const DrawerComponent: React.FC<DrawerComponentProps> = ({ navItems }) =>{

  const [openDrawer,setOpenDrawer]=React.useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleItemClick = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer open={openDrawer} anchor="right" onClose={()=>setOpenDrawer(false)}>
      <List sx={{ width:300 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={handleItemClick} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton className='button' onClick={handleDrawerToggle}>
          <MenuIcon style={{color:'white'}}/>
      </IconButton>
    </>
  );
};

export default DrawerComponent;
