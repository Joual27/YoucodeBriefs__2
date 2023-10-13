

function toggleNavigation(){
    let navItems = document.getElementById("navbar");

    if(window.innerWidth <= 768 ){
        if( navItems.style.opacity == 0 ){
            navItems.style.opacity = 1;
        }
        else{
            navItems.style.opacity = 0;
        }
    }
}



