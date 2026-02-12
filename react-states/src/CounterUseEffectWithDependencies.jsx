
import { useState, useEffect } from "react";

export default function CounterUseEffectWithDependencies() {
    const [countx, setCountx]=useState(0);
        const [county, setCounty]=useState(0);


    let incCountx =()=>{
        setCountx((currCount )=> currCount+1);
    }
        let incCounty =()=>{
        setCounty((currCount )=> currCount+1);
    }

    // using USEEFFECT for side effects which executes after rendering or re-rendering
useEffect(function printSomething (){
    console.log("this is a side effect with dependencies");
},
//[] // CASE 1: empty array as dependencies => side effect will run only once after first render
[countx] // CASE 2: side effect will run after first render and whenever change occurs in countx dependency/state variable
// [countx, county] // CASE 3: side effect will run after first render and whenever change occurs in any of the dependency/state variable
);

    return (
        <div>
            <h1>Counter</h1>
            <p>count = {countx} </p>
            <button onClick={incCountx}>+1</button>
                        <p>count = {county} </p>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}     