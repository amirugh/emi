let seven =document.getElementById("7")
let eite =document.getElementById("8")
let nine =document.getElementById("9")
let four =document.getElementById("4")
let five =document.getElementById("5")
let six =document.getElementById("6")
let one =document.getElementById("1")
let wo =document.getElementById("2")
let thre =document.getElementById("3")
let zero =document.getElementById("0")
let zero2 =document.getElementById("00")
let dot =document.getElementById("dot")
let tagsim =document.getElementById("/")
let zarb =document.getElementById("*")
let plus =document.getElementById("+")
let CE =document.getElementById("CE")
let CA =document.getElementById("CA")
let mines =document.getElementById("-")
let mosavi =document.getElementById("=")
let screen = document.getElementById("screen")
let num1 ;
let num2 ;
let result = 0 ;
let flag ;
////////


seven.addEventListener("click",function(){
 screen.innerHTML += "7";
})
eite.addEventListener("click",function(){
    screen.innerHTML += "8";

})
nine.addEventListener("click",function(){
    screen.innerHTML += "9";
})
four.addEventListener("click",function(){
    screen.innerHTML += "4";
})
five.addEventListener("click",function(){
    screen.innerHTML += "5";
})
six.addEventListener("click",function(){
    screen.innerHTML += "6";
})
one.addEventListener("click",function(){
    screen.innerHTML += "1";
})
wo.addEventListener("click",function(){
    screen.innerHTML += "2";
})
thre.addEventListener("click",function(){
    screen.innerHTML += "3";
})
zero.addEventListener("click",function(){
    screen.innerHTML += "0";
})
zero2.addEventListener("click",function(){
    screen.innerHTML += "00";
})
dot.addEventListener("click",function(){
    screen.innerHTML += "." ;
})
tagsim.addEventListener("click",function(){ // '/'
    num1 = screen.innerHTML
    screen.innerHTML = "";
    // screen.innerHTML = "";
    flag = "/"
})
zarb.addEventListener("click",function(){ //*
        flag = "*"
        num1 = screen.innerHTML
        screen.innerHTML = ""; 
    // screen.innerHTML = "";

})
plus.addEventListener("click",function(){ /// +
    flag = "+"
    num1 = screen.innerHTML
    screen.innerHTML = "";
    // console.log(num1)
})
CE.addEventListener("click",function(){ //CE
    screen.innerHTML = "" ;
})
CA.addEventListener("click",function(){ //CA
    screen.innerHTML = "";
})
mines.addEventListener("click",function(){ ///-
    num1 = screen.innerHTML
    screen.innerHTML = "";
    // screen.innerHTML = "";
    flag = "-"

})
mosavi.addEventListener("click",function(){
    num2 = screen.innerHTML
    if(flag==="*"){
        result = Number(num1)*Number(num2) ;
    }else if(flag==="-"){
        result = Number(num1)-Number(num2) ;
        }else if(flag==="+"){
        result = Number(num1)+Number(num2) ;
    }else if(flag==="/"){
        result = Number(num1)/Number(num2) ;
    }

    screen.innerHTML = ""
    screen.innerHTML = result
})



















