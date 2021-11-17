

function showMenu(){
    console.log("hello");

    const mobileMenu = document.getElementById("mobileMenu");
    const linksMenu =  document.getElementById("linksMenu");

    if (mobileMenu.classList.contains("open")){
        mobileMenu.classList.remove("open");
        linksMenu.classList.remove("show");

    }else{
        mobileMenu.classList.add("open");
        linksMenu.classList.add("show");
    }
}