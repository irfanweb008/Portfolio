const ele=document.getElementById("themeButton")
const lk=document.getElementById("bggg")
const icon=document.getElementById("sociall")
const nav=document.querySelector(".nav")


ele.addEventListener("mouseover",()=>{
ele.style.background="red";
    
})
ele.addEventListener("mouseleave",()=>{
ele.style.background="beige";
    
})
lk.addEventListener("mouseover",()=>{
    lk.style.background= "linear-gradient(to right, #bdc3c7, #2c3e50)";
})
lk.addEventListener("mouseleave",()=>{
      lk.style.background= "linear-gradient(to right, #bdc3c7, #5c656f)";


})

icon.addEventListener("mouseover",()=>{
icon.style.color="black";
    
})
icon.addEventListener("mouseleave",()=>{
icon.style.color="black";

    
})
nav.addEventListener("click",()=>{
nav.style.fontSize="40px";
    
})

