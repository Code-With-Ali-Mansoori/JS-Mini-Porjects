// Easy method

let body = document.getElementById('bd');
let msg = document.getElementById('heading2');
let button1 = document.getElementById('box1');
let button2 = document.getElementById('box2');
let button3 = document.getElementById('box3');
let button4 = document.getElementById('box4');


button1.onclick = () => {
    if(button1.style.backgroundColor = 'Red'){
        body.style.backgroundColor = 'Red';
        msg.innerText = ' RED '
    }
}

button2.onclick = () => {
    if(button2.style.backgroundColor = 'blue'){
        body.style.backgroundColor = 'blue';
        msg.innerText = ' BLUE ';
    }
}
        
button3.onclick = () => {
    if(button3.style.backgroundColor = 'green'){
        body.style.backgroundColor = 'green';
        msg.innerText = ' GREEN ';
}
}

button4.onclick = () => {
    if(button4.style.backgroundColor = 'yellow'){
        body.style.backgroundColor = 'yellow';
        msg.innerText = ' YELLOW ';
    }
}
