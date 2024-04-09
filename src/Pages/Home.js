import React from 'react'
import classes from './Home.module.css'

const Home = () => {

  const arr=[
    {
      name:"Alien Attack",
      src:"/assets/AlienAttackTeaser.jpg"
    },
    {
      name:"Block Painter",
      src:"/assets/BlockPainterTeaser.jpg"
    },
    {
      name:"Bottle Flip",
      src:"/assets/BottleFlipTeaser.jpg"
    },
    {
      name:"Cowboy Swing",
      src:"/assets/CowboySwingTeaser.jpg"
    },
    {
      name:"Cut The Rope",
      src:"/assets/CutTheRopeTeaser.jpg"
    },
    {
      name:"Emoji Fun",
      src:"/assets/EmojiFunTeaser.jpg"
    },
    {
      name:"Go Around",
      src:"/assets/GoAroundTeaser.jpg"
    },
    {
      name:"Green Ball",
      src:"/assets/GreenBallTeaser.jpg"
    },
    {
      name:"Lawn Mower",
      src:"/assets/LawnMowerTeaser.jpg"
    },
    {
      name:"Pair Up 3d",
      src:"/assets/PairUp3dTeaser.jpg"
    },
    {
      name:"Peet Sneak",
      src:"/assets/PeetSneakTeaser.jpg"
    },
    {
      name:"Rising Squares",
      src:"/assets/RisingSquaresTeaser.jpg"
    },
    {
      name:"Slime Road",
      src:"/assets/SlimeRoadTeaser.jpg"
    },
    {
      name:"Tower Fall",
      src:"/assets/TowerFallTeaser.jpg"
    },
    {
      name:"Tower Fall",
      src:"/assets/TowerFallTeaser.jpg"
    },
    {
      name:"Twisty Lines",
      src:"/assets/TwistyLinesTeaser.jpg"
    }

    ]



  return (
    <div className={classes.container}>
    <div className={classes.sub_container}>
      <div className={classes.title}>
      All Games
      </div>
      <div className={classes.games}>
      {
        arr.map((item,idx )=>(
          <div className={classes.item_container}>
          <div key={idx} className={classes.item}>
          <img className={classes.item_img} src={item.src} alt="" />
          <p>{item.name}</p>
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
