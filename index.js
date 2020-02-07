const sideBar=document.querySelector(".sideBar");

const navButton=document.querySelector(".navButton");
navButton.addEventListener("click",()=>{
    sideBar.style.display="block"
})

document.querySelector(".closeButton").addEventListener("click",()=>{
    sideBar.style.display="none";
})