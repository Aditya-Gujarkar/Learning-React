import ATicketNum from './ATicketNum'
import "./ATicket.css"

export default function ATicket({ticket}){
    return (
        <div className="ATicket">
            <p>Ticket</p>
                {ticket.map((num,idx)=> (
                    <ATicketNum num={num} key={idx}/>
                )
                )}
            <ATicketNum/>
        </div>
    );
}