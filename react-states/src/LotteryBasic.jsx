import {useState} from "react";
import "./LotteryBasic.css";
import {genTicket,sum} from "./helper"


export default function LotteryBasic() {
    const [ticket, setTicket]=useState(genTicket(3));
    let isWinning= sum(ticket)===15;
    
    let buyTicket=()=>{
        setTicket(genTicket(3));
    }

    return(
    <div>
        <h1>Lottery Game!</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <h3>{isWinning && "Congratulations! You won!"}</h3>
        <br />
                    <button onClick={buyTicket}>Buy New Ticket</button>

    </div>
    );
}