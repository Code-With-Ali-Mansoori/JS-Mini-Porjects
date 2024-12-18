let header = document.getElementById("header");
let nameInput = document.getElementById("name");
let Email$input = document.getElementById("email");
let Password$Input = document.getElementById("password");
let button = document.getElementById("btn");
let signUp = document.getElementById("sing-up");


(()=>{
    signUp.addEventListener("click", ()=>{
        header.innerHTML = "Sign Up";
        button.innerHTML = "Sign in";
        nameInput.style.display = "block";
        signUp.innerHTML = "Login";
        signUp.classList.add("login");
        login();
    })
})();


function login(){
    let login = document.querySelector(".login");

    login.addEventListener("click", ()=>{
        header.innerHTML = "Login";
        button.innerHTML = "Login";
        nameInput.style.display = "none";
        login.innerHTML = "Sign in";
        login.classList.remove("login");
    })
}

button.addEventListener("click",()=>{
   let name = nameInput.value;
   let email = Email$input.value;
   let password = Password$Input.value;

   console.log(name);
   console.log(email);
   console.log(password);

})