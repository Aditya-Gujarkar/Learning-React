import { useState } from "react";

export default function LudoBoard() {

    // USING OBJECT & STATE TOGETHER
    let [moves, setMoves] = useState({blue: 0,red: 0,yellow: 0,green: 0});

        // USING ARRAY & STATE TOGETHER
    const [arr,setArr]=useState("no value");

        // USING OBJECT & STATE TOGETHER
    let updateBlue=()=>{
        console.log(moves.blue);
        // setMoves({moves, blue: moves.blue+1}); this won't work because we can't change array or objects , we can only change their copies
         setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1};
         });

         // USING ARRAY & STATE TOGETHER
         setArr((prevArr)=>{
            return [prevArr,"blue moves"];
            console.log(arr);
    }); }
            
        let updateRed=()=>{
        console.log(moves.red);
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1}
         })
    }
        let updateYellow=()=>{
        console.log(moves.yellow);
        setMoves((prevMoves)=>{  
        return {...prevMoves, yellow: prevMoves.yellow +1}
    })
}
        let updateGreen=()=>{
        console.log(moves.green);
        setMoves((prevMoves)=>{
        return {...prevMoves,green:prevMoves.green+1}
    })
}
    return (
        <div>
            <p>{arr}</p>
            <p>Game Begins!</p>
            <div className="board">
                <p>blue moves:{moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>red moves:{moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>yellow moves:{moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>green moves:{moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                </div>
        </div>
    );
}