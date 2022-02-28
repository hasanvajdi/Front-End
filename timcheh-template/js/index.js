var products = document.querySelectorAll(".product")
var addToCartDiv = document.querySelector(".add-to-cart")


addToCartDiv.addEventListener("mouseenter", ()=>{
    addToCartDiv.children[0].children[0].style.color="white";
    addToCartDiv.children[0].children[1].style.color="white";
    addToCartDiv.children[0].style.width="100%";
})



products.forEach((product, key)=>{
    var addToCart = product.children[1].children[4];
    var addToCartButton = addToCart.children[0]
    var addToCartText = addToCartButton.children[1];
    var addToCartIcon = addToCartButton.children[0];


    product.addEventListener("mouseover", (e)=>{
        
        if(!e.target.classList.contains("add-to-cart-button")){
            addToCartIcon.style.color="white";
            addToCartText.style.display="none";
            addToCartButton.style.width="19%";
            addToCartButton.style.backgroundColor ="#673ab7";
            addToCart.children[1].classList.add("animate__animated")
            addToCart.children[1].classList.add("animate__fadeInLeft")
        }
        else{
            addToCartText.style.display="unset";
            addToCartButton.style.backgroundColor ="#673ab7";    
        }

    })

    product.addEventListener("mouseleave", ()=>{
        addToCart.children[1].classList.remove("animate__fadeInLeft")
        addToCart.children[1].classList.add("animate__fadeInRight")
        addToCart.children[1].classList.remove("animate__fadeInRight")
        
        addToCartIcon.style.color="gray";
        addToCartText.style.display="unset";
        addToCartText.style.color="gray";
        addToCartButton.style.width="100%";
        addToCartButton.style.backgroundColor ="rgb(234, 234, 234)";
    })

    
    
})




