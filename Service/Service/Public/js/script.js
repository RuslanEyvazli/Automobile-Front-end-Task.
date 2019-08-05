"use scrict"

  
  $('.marka').slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay:true,
    slidesToShow: 3,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  const mainImg = document.querySelector(".main-img-wrapper img");
  const allImages = [...document.querySelectorAll(".img-wrapper li img")];
  const leftBtn = document.querySelector(".fa-arrow-left");
  const rightBtn = document.querySelector(".fa-arrow-right");
  const allLi = [...document.querySelectorAll(".img-wrapper ul li")];

  const animations = ["zoom", "rotate", "bounce"];

      function ChangeSrc(){
        allImages.forEach(function(img){
          if(img.parentElement.classList.contains("active"))
          {
     
           let src =  img.getAttribute("src") 
           mainImg.setAttribute("src", src);
     
          }
        }
     
        )}


   allImages.forEach(function(img){
     img.addEventListener("click", function(){
    
      let preActiveLi = document.querySelector("li.active")

     preActiveLi.classList.remove("active");
     img.parentElement.classList.add("active");

     ChangeSrc();
   

     })




    

    

   })


   rightBtn.addEventListener("click", function(){

    Slider(1);    
   })

   leftBtn.addEventListener("click", function(){
      Slider(0);
   })



   function Slider(direction){
    let oldActiveLi = document.querySelector("li.active")

     if(direction === 1){

     if(oldActiveLi.nextElementSibling !== null){
 
 


      oldActiveLi.classList.remove("active");
      oldActiveLi.nextElementSibling.classList.add("active");

        ChangeSrc();
     }

     else
     {
      oldActiveLi.classList.remove("active");

      oldActiveLi.parentElement.firstElementChild.classList.add("active");
     }


     }

     else{
      if(oldActiveLi.previousElementSibling !== null){
 
 


        oldActiveLi.classList.remove("active");
        oldActiveLi.previousElementSibling.classList.add("active");
  
          
       }
       else
       {
        oldActiveLi.classList.remove("active");
  
        oldActiveLi.parentElement.lastElementChild.classList.add("active");
       }
  


     }


    
    

     const animationClass = animations[GenerateRandomNumber(0, animations.length+1 )];

   mainImg.classList.add(animationClass);

   setTimeout(() => {
     mainImg.classList.remove(animationClass);

     
   }, 1000);

  const oldsrc =  oldActiveLi.firstElementChild.getAttribute("src");
  mainImg.setAttribute("src", oldsrc);

  ChangeSrc();
   
 }

   






   function GenerateRandomNumber(min, max){
     return Math.round(min + Math.random() * (max-min));
   }

   document.addEventListener("keydown", function(e){
     if(e.keyCode === 39){
       Slider(1);
     }
     else if(e.keyCode === 37){
       Slider(0);
     }
   });


   const btns = [...document.getElementsByClassName("my-btn")];


  
   

