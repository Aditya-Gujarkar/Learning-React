import AmzPrize from "./AmzPrize";

export default function AmzProduct({title,idx}) {
 let styles = {
  border: "1px solid black",
  borderRadius: "10px",
  height: "200px",
  width: "160px",
  marginLeft: "15px",
  textAlign: "center",

  display: "flex",
  flexDirection: "column"
};
    let oldPrize=["12,495","11,900","1,599","5,99"];
    let newPrize=["8,999","9,199","899","278"];
    let description=[
        ["8000 DPI","5 Programmable Buttons"],
        ["Intuitive surface","designed for iPad Pro"],
        ["wireless","long battery life"],
        ["wireless","long battery life"]
    ];
    return(
        <div className="amzProduct" style={styles}>
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <AmzPrize oldPrize={oldPrize[idx]} newPrize={newPrize[idx]} />
        </div>
    );
}