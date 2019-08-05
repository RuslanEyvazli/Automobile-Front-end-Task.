"use strict"

const bars = document.querySelector(".bars");
const respNav = document.querySelector(".responsiveNav");
bars.addEventListener("click", function(){
    respNav.classList.toggle("visibile")

})

const Dropdown = [...document.querySelectorAll(".responsiveDropdown")];
const DropdownIcon = document.querySelector(".responsiveDropdown i");

Dropdown.forEach(function(drop){
    drop.addEventListener("click", function(){
        drop.nextElementSibling.classList.toggle("none");
        drop.lastElementChild.classList.toggle("transform");
        
    })
})


const clip = document.querySelector(".clip")
var sticky = clip.offsetTop;

window.onscroll = function(){
    

  if (window.pageYOffset >= sticky) {
    clip.classList.add("sticky")
  } else {
    clip.classList.remove("sticky");
  }

}

