import React,{useState} from 'react'
import classes from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {setLanguage} from '../Slices/langSlice'
import MenuIcon from '@mui/icons-material/Menu';
import SideBarMenu from './SideBarMenu';
import Hamburger from 'hamburger-react'
import {Link} from 'react-router-dom'
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ExtensionIcon from '@mui/icons-material/Extension';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

const Navbar = () => {

    const {lang} = useSelector((state)=>state.langSlice)
    const dispatch = useDispatch();


    const options = [
        { value: '0', label: 'EN' },
        { value: '1', label: 'GR' },
        { value: '2', label: 'TR' },
      ];

      const [selectedOption, setSelectedOption] = useState(0);
      const [open,setOpen] = useState(false);
      console.log(open);

      const handleChange=(selectedOption)=>{
        console.log(selectedOption)
        dispatch(setLanguage(selectedOption.value))
        setSelectedOption(selectedOption);
      }



    // console.log(lang)

  return (
    <div className={classes.container} >
    <div className={classes.sub_container}>
   
    <div className={classes.logo}>
   logo
   </div>
   
   <div className={classes.lang_btn}>
   <Select
   className={classes.selector}
        defaultValue='EN'
        placeholder='EN'
        isSearchable={false}
        value ={selectedOption}
        styles={{
            control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "rgba(177, 177, 225, 1)",
                    color: "black",
                    fontSize: "1rem",
                    fontFamily: "Inter,sans-serif",
                    border:'none',
                    borderRadius:'10px',
                    opacity:'0.8',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                    padding:'0'
                  }),
                  singleValue: (baseStyles) => ({
                    ...baseStyles,
                    color: "black",
                    fontSize: "1rem",
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "black",
                    fontSize: "1rem",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isSelected ? "#019FE340" : "#fff",
                    color: state.isSelected ? "#172A6E" : "#172A6E",
                    cursor: "pointer",
                  }),
                }}
        onChange={handleChange}
        options={options}
      />
   </div>
   

   <div className={classes.menu_icon} >
   <Hamburger toggled={open} toggle={setOpen} size={32} />
   </div>
   

<div className={open?classes.menu:classes.no_menu}>

{/* <div className={classes.menu_items}> */}
<Link to='/' className={classes.item}>

<SportsCricketIcon fontSize='large'/> <p>&nbsp; Sports</p>
 
</Link>
<Link to='/' className={classes.item}>

<ExtensionIcon fontSize='large'/><p>&nbsp; Puzzle</p> 

</Link>
<Link to='/' className={classes.item}>

<SportsScoreIcon fontSize='large'/> <p>&nbsp;  Racing</p>
 
</Link>
<Link to='/' className={classes.item}>

<QuestionMarkIcon fontSize='large'/><p>&nbsp; Quiz</p>
 
</Link>
<Link to='/' className={classes.item}>

<SportsKabaddiIcon fontSize='large'/> <p>&nbsp; Jump and Run </p>

</Link>


{/*  </div> */}

</div>

    </div>
    </div>
  )
}

export default Navbar
