 import User  from "./User";
 import UserClass from "./UserClass";
 import React from "react";
  
 class About extends React.Component{

   constructor(props){
       //console.log("constructor parent");
       super(props)
   }

componentDidMount(){
        //console.log("componentDidMount parent");

   }
   render(){
       // console.log("render parent");
       return (
           <div>
               <h1>About</h1>
               {/* <User name={"Anuj Tiwari"}/> */}

               <UserClass name={"Anuj Tiwari (class)"}/>
           </div>      
       )
   }
}

   





  /* const About = () => {
     return (
        <div> 
        <h1>About us</h1> 
        <h3>Learning Reactjs</h3>
        <UserClass name = {"Anuj (class)" }/>
        </div>
     )
   };  */
        
 export  default About;