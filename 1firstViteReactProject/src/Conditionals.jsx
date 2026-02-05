import "./Conditionals.css";

function Conditionals({ title, price }) {
     const isDiscount=price>=10000;

      // Dynamic Component Styling 
    //  let style1={backgroundColor:"yellow"}; used this directly on p of 5% discount
    let style1={backgroundColor:isDiscount?"yellow":""};
   
    return (
        <div className="conditionals" style={style1}>
            <h1>This is Product Component</h1>
            <p>This component displays product information.</p>
            {/* Method 1: Using ternary operator */}
            {/* {price >= 10000 ? <p>5% Discount</p> : null} */}

            {/* Method 2: Using AND opearator  */}
            {isDiscount && <p>5% Discount</p>}
        </div>
    );
}
export default Conditionals;