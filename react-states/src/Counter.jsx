// trying to copy the counter present on default page of Vite + React
import { useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);  // initialiation step

    // SIMPLE COUNTER CODE
    // function increaseCount(){
    //     setCount(count+1);
    //     console.log(count); // this will log the old value of count because state updates are asynchronous
    // }

    // CALLBACK IN UPDATER FUNCTION
    let increaseCount=()=>{
        setCount((currCount)=>{
            return currCount+1
        });
        setCount((currCount)=>{
            return currCount+1
        });
    }

    return(
        <>
        <h3>Count: {count}</h3>
        <button onClick={increaseCount}>Increase Count</button>
        </>
    );
}