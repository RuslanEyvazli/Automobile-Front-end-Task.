 "use strict"
window.onload = function () {

   




     if(localStorage.getItem("basket") === null){
         localStorage.setItem("basket", JSON.stringify([]));
     }


    const addToCart =[...document.querySelectorAll(".addtocart")];
    const span = document.getElementById("basket");
 
  
    const basket = JSON.parse(localStorage.getItem("basket"));
    


    UpdateCart(basket);



    
   
   
    


    addToCart.forEach(elem => {
        elem.onclick = function (e) {
            e.preventDefault();

            const proId = elem.getAttribute("proId");
            
            const proPrice = elem.getAttribute("proPrice");
            const proName = elem.getAttribute("proName");
            let proImg = elem.parentElement.parentElement.firstElementChild.getAttribute("src");






            const product = {
                id: proId,
                name: proName,
                price: proPrice,
                img: proImg
            }

     


            const basketParsed = JSON.parse(localStorage.getItem("basket"));
     
                    basketParsed.push(product);


            
                        
                    UpdateCart(basketParsed);
                    localStorage.setItem("basket", JSON.stringify(basketParsed));
                
            

           
           





        }

    })
       


     


     function UpdateCart(basket)
 {
    span.innerText = basket.length;
    }
















    





    



}

