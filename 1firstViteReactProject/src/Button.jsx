// EVENTS IN REACT
// 1. Handling Clck Events
function OnClick(){
    console.log("Hello");
}
function OnDoubleClick(){
    console.log("You double clicked me!");
}

// 2. Handling Non-Click Events
function OnMouse(){
    console.log("Bye");
}


export default function Button(){
    return(
        <div>
        <button onClick={OnClick}>Click Me!</button>
        <button onDoubleClick={OnDoubleClick}>Double Click Me!</button>
        <p onMouseOver={OnMouse}>this is paragraph</p>
        </div>
    );
}