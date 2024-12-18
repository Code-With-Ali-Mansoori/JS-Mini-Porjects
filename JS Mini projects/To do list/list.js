let input = document.querySelector("#input-field");
let button = document.getElementById("button1");
let listItems = document.getElementById("list");

let editToDo = null;

let addtoDo = ()=>{

   const nothing =  input.value;

    if(nothing.length == 0){
        alert("Write something in To Do!");
    } 

    if(button.innerHTML === 'Edit'){
            alert("Added..");
            editToDo.target.previousElementSibling.innerHTML = input.value;  //LEARN NEW  
            button.innerHTML = 'Add';
            fedit(input.value);
            button.style.backgroundColor = "orange";
            input.value = "";
            // editing(editToDo.target.previousElementSibling.innerHTML);

    } else {

        let li = document.createElement("li");
        let p= document.createElement("p");
    
        p.innerText = input.value;

        // let paraVal = p.innerText;
        // // ArrVal.push(paraVal);
        // // console.log(ArrVal);
        
        li.appendChild(p);
        listItems.appendChild(li);
    
        input.value = "";

        let edit = document.createElement("button");
        edit.classList.add("btns", "edit");
        edit.innerHTML = 'Edit';
        li.appendChild(edit);                                           //LEARN NEW    

        // let editt = document.querySelector(".edit");

        let dlt = document.createElement("button");
        dlt.classList.add("btns", "dlt");
        dlt.innerHTML = 'Remove';
        li.appendChild(dlt);                                        //LEARN NEW

        AddData(p.innerText);

        // let dltt = document.querySelector(".dlt");
    }
}

let listLI = document.querySelector("li");

let upDate = (e)=>{

    if(e.target.innerHTML === "Remove"){
        console.log(e.target.parentElement);
        listItems.removeChild(e.target.parentElement);           //LEARN NEW
        removeData(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit"){
        editToDo = e;
        alert("Editing..."); 
        // console.log(e.target.previousElementSibling.innerHTML);                  //LEARN NEW
        input.value = e.target.previousElementSibling.innerHTML;  
        focus;
        button.innerHTML = 'Edit';
        button.style.backgroundColor = "Green";
    }
}

function AddData(data){                                        //LEARN NEW

    let ArrVal;

    if(localStorage.getItem("Lists") === null){
        ArrVal = [];
    } else{
        ArrVal =  JSON.parse(localStorage.getItem("Lists"));                                //LEARN NEW
    }
    ArrVal.push(data);    
    localStorage.setItem("Lists", JSON.stringify(ArrVal));                                //LEARN NEW
    
}

function displayData(){                                              //LEARN NEW
    let ArrVal;

    if(localStorage.getItem("Lists") === null){
        ArrVal = []; 
    } else{
        ArrVal =  JSON.parse(localStorage.getItem("Lists"));
        ArrVal.forEach(el => {
            
            let li = document.createElement("li");
            let p= document.createElement("p");
        
            p.innerText = el;
            
            li.appendChild(p);
            listItems.appendChild(li);
        
            input.value = "";
    
            let edit = document.createElement("button");
            edit.classList.add("btns", "edit");
            edit.innerHTML = 'Edit';
            li.appendChild(edit);             
    
            let dlt = document.createElement("button");
            dlt.classList.add("btns", "dlt");
            dlt.innerHTML = 'Remove';
            li.appendChild(dlt);  
        });
    }
}

function removeData(dlt){

    let ArrVal;

    if(localStorage.getItem("Lists") === null){
        ArrVal = [];
    } else{
        ArrVal =  JSON.parse(localStorage.getItem("Lists"));
    }

    let tetx =  dlt.firstChild.innerHTML;                                             //LEARN NEW
   
    let charIndex = ArrVal.indexOf(tetx);
    ArrVal.splice(charIndex,1);   
    localStorage.setItem("Lists", JSON.stringify(ArrVal));

}

function fedit(Daata){

    let ArrVal;

    if(localStorage.getItem("Lists") === null){
        ArrVal = [];
    } else{
        ArrVal =  JSON.parse(localStorage.getItem("Lists"));
    }
    
    let chrINDEX1 = ArrVal.indexOf(Daata);
    console.log(chrINDEX1);
    chrINDEX1[input.value]
    // ArrVal.splice(chrINDEX1,1, input.value);
    localStorage.setItem("Lists", JSON.stringify(ArrVal));

}

// function editing(editing){
//     let ArrVal;

//     if(localStorage.getItem("Lists") === null){
//         ArrVal = [];
//     } else{
//         ArrVal =  JSON.parse(localStorage.getItem("Lists"));
//     } 
//     let chrINDEX1 = ArrVal.indexOf(Daata);
//     console.log(chrINDEX1);
//     ArrVal.splice(chrINDEX1,1, editing());
//     localStorage.setItem("Lists", JSON.stringify(ArrVal));
// }

document.addEventListener('DOMContentLoaded', displayData);             //LEARN NEW...
listItems.addEventListener("click", upDate);
button.addEventListener("click", addtoDo);
