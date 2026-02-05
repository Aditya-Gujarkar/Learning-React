import AmzProduct from "./AmzProduct";

export default function AmzProductTab() {
    let style1={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    return (
        <div className="amzpr" style={style1}>

            <AmzProduct title="Logitech MX Mouse 3S" idx={0}/>
            <AmzProduct title="Apple Pencil(2nd Gen)" idx={1} />
            <AmzProduct title="Zebronics Zeb-transformer" idx={2}/>
            <AmzProduct title="Petronics" idx={3}/>
        </div>
    );
} 