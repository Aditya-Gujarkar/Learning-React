export default function AmzPrize({oldPrize,newPrize}) {
    let oldStyle={
        textDecoration:"line-through"
    };
    let newStyle={
        fontWeight:"bold"
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        width:"160px",
        textAlign:"center",
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
        marginTop:"auto"
    };

    return(
        <div className="amzPrize" style={styles}>
            <span style={oldStyle}>{oldPrize}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrize}</span>
        </div>
    );
}    