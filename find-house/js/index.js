


window.addEventListener('resize', ()=>{
    if(screen.width<600){
        var contact1 = document.querySelector(".contact-now-1");
        var contact2 = document.querySelector(".contact-now-2");
        contact1.classList.add("animate__fadeInLeft");
        contact2.classList.add("animate__fadeInLeft");
    } 
    
    
    
    
    var menuIcon = document.querySelector('.menu-icon')
    menuIcon.addEventListener("click", ()=>{
        var header = document.querySelector('.header')
        header.style.height="100vh";
    })
    
    var menuIcon = document.querySelector('.menu-icon2')
    menuIcon.addEventListener("click", ()=>{
        var header = document.querySelector('.header')
        header.style.height="0vh";
    })
});