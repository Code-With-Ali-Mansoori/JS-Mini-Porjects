let output = document.getElementById('clock');

setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    console.log(date);
    output.innerHTML = date;
},1000);

output.style.color = 'black';
output.style.fontFamily = 'aerial';
output.style.textAlign = 'center';
output.style.alignContent = 'center';
output.style.fontSize = 'larger';
