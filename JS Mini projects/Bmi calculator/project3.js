const form = document.querySelector('form');

form.addEventListener('submit', function(chai){
chai.preventDefault();

alert('Calculating....');

const hgt =parseInt(document.querySelector('#height').value);
const weg =parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');

if(hgt == '' || hgt < 0 || isNaN(hgt)){
  result.innerHTML = '<span>Please write height again</span>';

}else if (weg == '' || weg < 0 || isNaN(weg)){
  result.innerHTML = '<span>Please write weight again</span>';

}else{
  const formula = (weg / ((hgt * hgt)/ 10000 )).toFixed(2);
  return result.innerHTML =  `BMI index = ${formula}`;
}
 
})


