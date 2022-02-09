
window.onload = ()=>{
    var menuOptions = document.querySelector(".menu-options");
    menuOptions.style.transform="translate(0px, 30px)"
};



const menuIcon = ()=>{
    var mobileMenu = document.querySelector(".mobile-menu");
    const menuIconTag = document.querySelector(".menu-icon")
    const mobileBackGround = document.querySelector('.mobile-background')

    if (menuIconTag.innerHTML === "menu"){
        mobileBackGround.style.height="100vh";
        menuIconTag.innerHTML = "close";
        mobileMenu.style.overflow ="visible";

    }
    else{
        mobileBackGround.style.height="0px";
        menuIconTag.innerHTML = "menu";
        mobileMenu.style.overflow ="hidden";
    }

}