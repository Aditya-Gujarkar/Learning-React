import Product from "./Product";

function ProductTab() {
    // passing arrays or objects to props
    let feature = ["16GB RAM", "512GB SSD", "Intel i7 Processor"];
   // let features2={color:"Silver", weight:"1.5kg", warranty:"2 years"};

   // rendering array  using array of elements
   // let features = [
   //  <li key="1">16GB RAM</li>,
   //  <li key="2">512GB SSD</li>,
   //  <li key="3">Intel i7 Processor</li>
   // ];
    return (
 <>
 {/* <Product />
 <Product/>
 <Product/>
 REACT PROP */}
    <Product title="Laptop" price={99999} features={feature} features2={{color:"Silver", weight:"1.5kg", warranty:"2 years"}} />
    <Product title="Smartphone" price={49999} features={feature} features2={{color:"Black", weight:"1.2kg", warranty:"1 year"}} />
    <Product title="Headphones" price={19999} features={feature} features2={{color:"White", weight:"0.5kg", warranty:"6 months"}} />
 </>
    );
}
export default ProductTab;