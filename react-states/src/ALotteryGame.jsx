import "./ALotteryGame.css"
import ATicket from "./ATicket"
import {useState} from "react";
import {genTicket,sum} from "./helper"
import AButton from "./AButton";

export default function ALotteryGame({n,winningCond}) {
        const [ticket, setTicket]=useState(genTicket(n));
    let isWinning= winningCond(ticket);
    
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
  return (
    <div className="ALotteryGame">
    <h1>Lottery Game</h1>
    <ATicket ticket={ticket}/>
                        {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
                        <AButton action={buyTicket}/> {/*  passing this method as props */}
        <br />
        <h3>{isWinning && "Congratulations! You won!"}</h3>
    </div>
  )
}