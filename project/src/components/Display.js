import Card from "./Card.js";

import "../css/Display.css"

const Display = ()=> {
  
    return (
       <>
      <div className= "Allitems">
        <Card image={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"} name={"Avengers Endgame"} ></Card>
        <Card image={"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg"} name={"Avengers Infinity War"} ></Card>
        <Card image={"https://i.annihil.us/u/prod/marvel/i/mg/b/03/54982b4953b05/clean.jpg"} name={"Avengers"} ></Card>
        <Card image={"https://i.pinimg.com/originals/0c/6a/50/0c6a50224cb55087fe0f601a437dd8e6.jpg"} name={"Avengers Age Of Ultron"} ></Card>
        <Card image={"https://images.thedirect.com/media/photos/doctor-poster-1.jpg"} name={"Doctor strange Multiverse Of Madness"} ></Card>
        <Card image={"https://www.pinkvilla.com/imageresize/iron-man-phase-4_0.jpg?width=752&format=webp&t=pvorg"} name={"Iron Man"} ></Card>
      </div>
      
      </>
    )
  
}
export default Display;
