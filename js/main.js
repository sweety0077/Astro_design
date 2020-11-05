    /* menu */
const navSlide = () =>{
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu li");

    menuIcon.addEventListener("click",() => {
            //toggle
        nav.classList.toggle("active");
            //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinkStyle 0.3s ease forwards ${index / 7 + 0.3}s`;
            }
        });
          //cross menu
          menuIcon.classList.toggle("togglecross");
    });
}
navSlide();
