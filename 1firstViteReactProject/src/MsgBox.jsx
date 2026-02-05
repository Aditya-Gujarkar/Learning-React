function MsgBox({userName,textColor}) {
    let style1={color:textColor, fontSize:"24px", fontWeight:"bold", textAlign:"center", marginTop:"20px", border:"2px solid black", padding:"10px"};
    return (
        <h1 style={style1}>Hello {userName}</h1>
    );
}
export default MsgBox;