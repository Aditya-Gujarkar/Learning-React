import "./ALotteryGame.css"
import ATicket from "./ATicket"

export default function ALotteryGame() {
  return (
    <div className="ALotteryGame">
    <h1>Lottery Game</h1>
    <ATicket ticket={[1,2,3]}/>
        <ATicket ticket={[12,2,3]}/>

    </div>
  )
}
