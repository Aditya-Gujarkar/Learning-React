import { useState } from "react";

export default function LikeButton(){

    const [isLiked, setIsLiked] = useState(false);
    const[click,setclick]=useState(0);
    
    let toggleClick = () => {
        setIsLiked(!isLiked);
        setclick(click+1);
        // console.log("liked");
    }
    let style = {
        color:"red"
    };
    return(
        <div>
             <h3>clickToggle: {click}</h3>
            <p onClick={toggleClick}>
               {isLiked?
               (<i className="fa-solid fa-heart" style={style}></i>)
               :
               (<i className="fa-regular fa-heart" ></i>) }

                </p>
        </div>
    );
}