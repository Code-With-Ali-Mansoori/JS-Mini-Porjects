let start = document.querySelector("#strt");
let stoppp = document.querySelector("#stop");

function randomClr(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let colorrr;

let startGenerate = function generteClr(){
    colorrr = setInterval(()=>{
        document.body.style.backgroundColor = randomClr();    
        },500)
}

let stopGenerte = function stoppedClr(){
    clearInterval(colorrr);
}

start.addEventListener('click',startGenerate);
stoppp.addEventListener('click', stopGenerte);
