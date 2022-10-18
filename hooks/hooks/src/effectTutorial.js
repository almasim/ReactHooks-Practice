import React,{useEffect, useState} from "react";
import axios from "axios";
function EffectTutorial(){
    const [data,setData]=useState("");
    const [count,setCount]=useState(0);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{setData(response.data[6].email);})
        
    },[]);
     
    return( 
    <div>
       <h1>{data}</h1>
        <button onClick={()=>{
            setCount(count+1);
        }}>click</button>
        <h1>{count}</h1>
    </div>
    )
}
export default EffectTutorial;