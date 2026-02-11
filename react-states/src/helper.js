// to generate 3 random numbers

function genTicket(n){
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=(Math.floor(Math.random()*10));
}
return arr;
}

function sum(arr){
    return arr.reduce((sum,currElement)=>sum+currElement,0);
}

export {genTicket, sum};