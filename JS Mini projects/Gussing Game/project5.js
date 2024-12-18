let ouptut = document.getElementById("result");
let previous = document.getElementById('Previous');
let remaining = document.getElementById("Remaining");
let btn = document.getElementById("button");
let UserInput = document.querySelector("#val");

let generatedNumber = parseInt(Math.floor(Math.random()*10+1));
console.log(generatedNumber);

let Arr = [];

let palyGame = true;

// (isNaN(input) || input === 'h' || input <= 0 || input > 10)

if( palyGame = true ){

      btn.addEventListener('click', ()=>{
        let input =  parseInt(UserInput.value);
         console.log(input);

            if(input === generatedNumber){

                ouptut.innerHTML = 'Congratulations you guess the right one!!';
                Arr.push(input);                 
                previous.innerHTML = `Previous Guesses : ${Arr}`;
                if(Arr.length <= 10){
                  // palyGame = false;
                  alert()
                }

               }else{
                     ouptut.innerHTML = 'Try Again!';
                     Arr.push(input);                 
                     previous.innerHTML = `Previous Guesses : ${Arr}`;  
               }  
      })
} 





 






   
   

  



