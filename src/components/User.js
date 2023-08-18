import { useState } from "react"

const User = ({name}) =>{
     const [count] = useState(0);
     return ( 
         <div className="user-card">
  <h2>Name: {name}</h2>
  <h3> count = {count }</h3>
  <h3>Location: Indore</h3>
</div>
     )
};
 export default User