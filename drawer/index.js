
const drawerContainer = document.querySelector(".drawer-container");
const closeButton = document.querySelector(".close-button")
const openButton = document.querySelector(".open-button");


closeButton.addEventListener("click", function(){
    drawerContainer.classList.add("hide-drawer")
})


openButton.addEventListener("click", function(){
    drawerContainer.classList.remove("hide-drawer")
})