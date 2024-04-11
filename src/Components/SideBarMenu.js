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
import { closeSideBar, openSideBar } from '../Slices/sideBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Slices/categorySlice';

const SideBarMenu = () => {
  // const [open,setOpen] = useState(false)

  const dispatch = useDispatch();

  const {open} = useSelector((state)=>state.sideBarSlice)

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
  
  <MenuItem onClick={()=>{!open?dispatch(openSideBar()):dispatch(closeSideBar())}} className={classes.item_title}  ><MenuIcon/> </MenuItem>
  {/* <SubMenu label="Categories"> */}
  <MenuItem component={<Link to="/" />} className={classes.item} icon={<SportsCricketIcon fontSize='large'/>} onClick={()=>dispatch(setCategory('All Games'))}> All Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<SportsCricketIcon fontSize='large'/>} onClick={()=>dispatch(setCategory('Sports'))}> Sports Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<ExtensionIcon fontSize='large'/>} onClick={()=>dispatch(setCategory('Puzzle'))}> puzzle Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<SportsScoreIcon fontSize='large'/>} onClick={()=>dispatch(setCategory('Racing'))}> Racing Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<QuestionMarkIcon fontSize='large'/>} onClick={()=>dispatch(setCategory('Quiz'))}> Quiz Games</MenuItem>
    <MenuItem component={<Link to="/" />} className={classes.item} icon={<SportsKabaddiIcon fontSize='large'/>} onClick={()=>dispatch(setCategory('Cards'))}> Cards Games</MenuItem>
    {/* </SubMenu> */} 
  </Menu>
</Sidebar>
  )
}

export default SideBarMenu
