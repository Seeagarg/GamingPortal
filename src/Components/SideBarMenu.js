import React,{useState} from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import classes from './SideBarMenu.module.css'
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ExtensionIcon from '@mui/icons-material/Extension';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import MenuIcon from '@mui/icons-material/Menu';

const SideBarMenu = () => {
  const [open,setOpen] = useState(false)

  return (
    <Sidebar collapsed={!open} className={classes.sidebar_main}>
    
  <Menu
  className={classes.menu}
    menuItemStyles={{
      button: {
        width:"80%",
        gap:"10px",
        [`&.active`]: {
          backgroundColor: 'yellow',
          color: '#b6c8d9',
        },
      },
      button: {
        [`&.hover`]: {
          backgroundColor: 'yellow',
          color: '#b6c8d9',
        },
      },
    }}
  >
  
  <MenuItem onClick={()=>{setOpen(!open)}} className={classes.item_title}  ><MenuIcon/> </MenuItem>
  {/* <SubMenu label="Categories"> */}
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<SportsCricketIcon fontSize='large'/>}> Sports Games</MenuItem>
    <MenuItem component={<Link to="/profile" />} className={classes.item} icon={<ExtensionIcon fontSize='large'/>}> puzzle Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<SportsScoreIcon fontSize='large'/>}> Racing Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<QuestionMarkIcon fontSize='large'/>}> Quiz Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<SportsKabaddiIcon fontSize='large'/>}> Jump and Run Games</MenuItem>
    {/* </SubMenu> */} 
  </Menu>
</Sidebar>
  )
}

export default SideBarMenu
