import React, {useState, useRef,useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {

  const {ref,playState,getAnimation} = useWebAnimations({
    keyframes:[
      {transform:"translateY(0px)" , backgroundColor:"blue"},
      {transform:"translateY(500px)",backgroundColor:"green"}
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  })




  return ( 
     <div><h1 ref={ref} style={{
       backgroundColor:"red",width:"200px",height
      :"200px"
     }}>How ARE GOOD</h1>
  <h1>Animatino play state{playState}</h1>
  
  <button onClick={()=>{
    getAnimation().play()
  }}>play</button>
  <button onClick={()=>{
    getAnimation().pause()
  }}>pause</button>
  
     </div>
  );
}

export default App;

