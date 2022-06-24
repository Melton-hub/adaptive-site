const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");
const menuScreen = document.querySelector(".overlay");


function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
    menuScreen.classList.toggle("open");
}

menuBtn.addEventListener("click", e => {
    e.stopPropagation();
    
    toggle();
})


menuItem.forEach(item => {
    item.addEventListener("click", () => {
        if(menuBtn.classList.contains("open")) {
            toggle();
        } 
    });

    document.addEventListener('click', e => {
        target = e.target;
        its_menu = target == menuItems || menuItems.contains(target);
        its_hamburger = target == menuBtn;
        menu_is_active = menuItems.classList.contains('open');
        
        if (!its_menu && !its_hamburger && menu_is_active) {
          toggle();
        }
    });
});






  






 

