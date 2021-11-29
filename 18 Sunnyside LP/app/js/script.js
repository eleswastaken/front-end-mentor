

function showMenu(){
    const mobileMenu = document.getElementById("mobileMenu");
    const links = document.getElementById("mobileMenuLinks");

    if (mobileMenu.classList.contains("open")){
        mobileMenu.classList.remove("open");
        links.classList.remove("header__links__open")
    }else{
        mobileMenu.classList.add("open");
        links.classList.add("header__links__open")
    }
}