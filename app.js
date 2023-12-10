


let counter = document.getElementById("counter");
let counterbutton = document.getElementById("counterbutton");
let counterPS = document.getElementById("counterPS");
let counterGrandma = document.getElementById("counterGrandma");
let resetid = document.getElementById("resetid");
let counterOven = document.getElementById("counterOven");
let counterFactory = document.getElementById("counterFactory");
let counterMine = document.getElementById("counterMine");
let counterBank = document.getElementById("counterBank");
let buyGrandma = document.getElementById("buyGrandma");
let buyOven = document.getElementById("buyOven");
let buyFactory = document.getElementById("buyFactory");
let buyMine = document.getElementById("buyMine");
let buyBank = document.getElementById("buyBank");

let data = {
    cookies:0,
     CookiesPerSecond:1,
     Grandma:0,
     Oven:0,
     Factory:0,
     Mine:0,
     Bank:0,
  };

 // a function that increases counter by 1 and changes the value of the counter on the page
function addcookie(){
    data.cookies = data.cookies + data.CookiesPerSecond;
    counter.textContent=data.cookies+" Cookies";

    const stringifiedData = JSON.stringify(data);
     localStorage.setItem("data", stringifiedData);
    
}

// an event listener, so when we click the button the function runs
counterbutton.addEventListener("click", addcookie);

//set timer
setInterval(function () {
    data.cookies = data.cookies + data.CookiesPerSecond;
    
    counter.textContent=Number(data.cookies)+" Cookies";
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("data", stringifiedData);
  }, 1000); // 1000 milliseconds == 1 second


 function loadCookies() {

      // get the data value from localStorage
        
        data = JSON.parse(localStorage.getItem("data")) ?? data;
      // update our data variable 
    console.log(data)
       
    const cookies=Number(data.cookies);
    
    counter.textContent=cookies +" Cookies";
    counterPS.textContent=Number(data.CookiesPerSecond) + 'Cookies/Sec';
    counterGrandma.textContent = Number(data.Grandma);
    counterOven.textContent = Number(data.Oven);
    counterFactory.textContent = Number(data.Factory);
    counterMine.textContent = Number(data.Mine);
    counterBank.textContent = Number(data.Bank);
}


function addGrandma(){
    if(data.cookies>=10){
    data.Grandma++;
    counterGrandma.textContent=data.Grandma;
    data.CookiesPerSecond++;
    counterPS.textContent=data.CookiesPerSecond;
    data.cookies=data.cookies-10;
    counter.textContent=data.cookies+" Cookies";
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("data",stringifiedData );
    
    }else{
        alert("you dont have enought cookies")
    }
}
function addOven(){
    if(data.cookies>=100){
    data.Oven++;
    counterOven.textContent=data.Oven;
    data.CookiesPerSecond=data.CookiesPerSecond+10;
    counterPS.textContent=data.CookiesPerSecond;
    data.cookies=data.cookies-100;
    counter.textContent=data.cookies+" Cookies";
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("data",stringifiedData );
    }
    else{
        alert("you dont have enought cookies")
    }
}
function addFactory(){
    if(data.cookies>=1000){
    data.Factory++;
    counterFactory.textContent=data.Factory;
    data.CookiesPerSecond=data.CookiesPerSecond+100;
    counterPS.textContent=data.CookiesPerSecond;
    data.cookies=data.cookies-1000;
    counter.textContent=data.cookies+" Cookies";
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("data",stringifiedData );
    }
    else{
        alert("you dont have enought cookies")
    }
}
function addMine(){
    if(data.cookies>=10000){
    data.Mine++;
    counterMine.textContent=data.Mine;
    data.CookiesPerSecond=data.CookiesPerSecond+1000;
    counterPS.textContent=data.CookiesPerSecond;
    data.cookies=data.cookies-10000;
    counter.textContent=data.cookies+" Cookies";
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("data",stringifiedData );
    }
    else{
        alert("you dont have enought cookies")
    }
}
function addBank(){
    if(data.cookies>=100000){
    data.Bank++;
    counterBank.textContent=data.Bank;
    data.CookiesPerSecond=data.CookiesPerSecond+10000;
    counterPS.textContent=data.CookiesPerSecond;
    data.cookies=data.cookies-100000;
    counter.textContent=data.cookies+" Cookies";
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("data",stringifiedData );
    }
    else{
        alert("you dont have enought cookies")
    }
}
buyGrandma.addEventListener("click", addGrandma);
buyOven.addEventListener("click", addOven);
buyFactory.addEventListener("click", addFactory);
buyMine.addEventListener("click", addMine);
buyBank.addEventListener("click", addBank);

//reset function to clear Local Store (localstroage.clear()) 
function reset(){
    localStorage.clear();

    data = {
        cookies:0,
         CookiesPerSecond:1,
         Grandma:0,
         Oven:0,
         Factory:0,
         Mine:0,
         Bank:0,
      };
    loadCookies();
   
}

resetid.addEventListener("click", reset);

loadCookies();

