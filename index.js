const sideBar=document.querySelector(".sideBar");

const navButton=document.querySelector(".navButton");
navButton.addEventListener("click",()=>{
    if(sideBar.classList.contains("fadeOutLeft"))
    sideBar.classList.remove("fadeOutLeft")
    sideBar.classList.add("fadeInLeft")
    sideBar.style.visibility="visible"
})

document.querySelector(".closeButton").addEventListener("click",()=>{
    if(sideBar.classList.contains("fadeInLeft"))
    sideBar.classList.remove("fadeInLeft")

     sideBar.classList.add("fadeOutLeft")
    sideBar.style.visibility="none"
   
})


