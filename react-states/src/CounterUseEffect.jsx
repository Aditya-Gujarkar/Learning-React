import { useState, useEffect, use } from "react";

export default function CounterUseEffect() {

    const [count, setCount]=useState(0);

    let incCount =()=>{
        setCount((currCount )=> currCount+1);
    }

    // using USEEFFECT for side effects which executes after rendering or re-rendering
useEffect(function printSomething (){
    console.log("this is a side effect");
});

    return (
        <div>
            <h1>Counter</h1>
            <p>count = {count} </p>
            <button onClick={incCount}>+1</button>
        </div>
    );
}      