import React, { useEffect, useRef, useState } from "react";
import CardList from "./CardList";


function Search(props){
    const [username,setUser] = useState('');
    const onSearch = (event)=>{
        event.preventDefault();
        console.log("done");
        console.log(username);
        props.onSearch1(username);
    }
    const onhandle = (event)=>{
        console.log("done");
        console.log(event.target.value);
        setUser(event.target.value);
    }
   return(
     <form onSubmit={onSearch}>
         <input type="text" 
            value={username}
            onChange={onhandle}
         />
         <button>Search</button>
     </form>
   );
}

function App(){
   
    const[cnt,setcnt] = useState(0);
    console.log(cnt);
    useEffect(()=>{
        fetch("http://localhost:3000/test-data.json")
         .then(res=>res.json())
         .then(data=> setProfile(data));
    },[cnt])

    console.log("render");
    const[profiles,setProfile] =  useState([]);
    const onSearch11 = (username)=>{
        console.log(username);
        const data = profiles.filter(p=>{
            return p.login.includes(username);
        })
        setProfile(data);
    }
   return(
    <>
    <button onClick={()=>{setcnt(cnt+1)}}>{cnt}</button>
    <Search  onSearch1 = {onSearch11}/>
    <CardList  profile = {profiles}/>
    </>
   );
}
export default App;