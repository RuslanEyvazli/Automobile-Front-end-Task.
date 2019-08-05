'use strict'
const btns = [...document.getElementsByClassName("my-btn")];

btns.forEach(function(link){
   link.addEventListener("click", function(){

     const preActiveAcc = document.querySelector(".accardion.active");
      preActiveAcc.classList.remove("active");

      link.nextElementSibling.classList.add("active");

      
      const preActiveIcon = document.querySelector(".my-icon");
      preActiveIcon.classList.remove("my-icon");
      link.firstElementChild.classList.add("my-icon");




      
    
   })
})