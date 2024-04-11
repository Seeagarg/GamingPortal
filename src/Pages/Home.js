import React,{useEffect,useState} from 'react'
import classes from './Home.module.css'
import { useSelector } from 'react-redux';
import { fetchDataFromBackend } from '../Services/api';
import categorySlice from '../Slices/categorySlice';

const Home = () => {

  const {open} = useSelector((state)=>state.sideBarSlice)
  const {category} = useSelector((state)=>state.categorySlice);

  const [arr,setArr] = useState([])

  
  console.log(category)

    const fetchData =async()=>{
      const data = await fetchDataFromBackend();
      // console.log(data.data);
      const Games = data.data;
      if(category=="All Games"){
        setArr(Games);
      }
      else if(category == "Sports"){
        const arr = Games.filter((item)=>item.category == "Sports")
        setArr(arr);
      }
      else if(category == "Quiz"){
        const arr = Games.filter((item)=>item.category == "Quiz")
        setArr(arr);
      }
      else if(category == "Puzzle"){
        const arr = Games.filter((item)=>item.category == "Puzzle")
        setArr(arr);
      }
      else if(category == "Racing"){
        const arr = Games.filter((item)=>item.category == "Racing")
        setArr(arr);
      }
      else if(category == "Cards"){
        const arr = Games.filter((item)=>item.category == "Cards")
        setArr(arr);
      }
      
    }

    useEffect(()=>{
      fetchData();
    },[category])



  return (
    <div className={classes.container}>
    <div className={classes.sub_container}>
      <div className={classes.title}>
      {category}
      </div>
      <div className={!open?classes.games:classes.games_when_open}>
      {
        arr?.map((item,idx )=>(
          <div className={classes.item_container}>
          <div key={idx} className={classes.item}>
          <img className={classes.item_img} src={item.img_url} alt="" />
          <p>{item.game_name}</p>
          <button className={classes.btn}>play</button>
          </div>
          </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default Home
