import "./Product.css";

function Product({ title, price, features, features2 }) {
    const list=features.map((feature)=><li>(feature)</li>);
    return (
        <div className="Product">
        {/* <h2>This is the Product Component</h2>
        <p>This component displays product information.</p>
            REACT PROP */}
        <h2>{title}</h2>
        <p>Price: {price}</p>
        {/* <p>{features}</p> */}
        {/* rendering array using map function */}
        <ul>{features.map((feature)=><li>{feature}</li>)}</ul> 
        <p>{features2.color}</p>
        <p>{features2.weight}</p>
        <p>{features2.warranty}</p>
        </div>
    );
}

export default Product;