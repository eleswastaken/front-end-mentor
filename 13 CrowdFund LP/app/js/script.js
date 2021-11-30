function menuFunc(){
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    var logo = document.getElementById("logo");
    var navlinks = document.getElementById("navlinks");

    if(menu.classList.contains("open")){
        overlay.style.display = "none";
        menu.classList.remove("open");
        navlinks.style.display = "none";
    }else{
        overlay.style.display = "block";
        menu.classList.add("open");
        logo.style.zIndex = '1';
        menu.style.zIndex = "1";
        navlinks.style.display = "block";
    }
}

function bookmark(){
    var icon = document.getElementById("bookmarkico");
    var text = document.getElementById("bookmarktex");

    if(icon.classList.contains("bookmarked")){
        icon.style.color = "white";
        text.innerHTML = "Bookmark";
        text.style.color = "hsl(0, 0%, 48%)";

        icon.classList.remove("bookmarked");
    } else {
        icon.style.color = "white";
        text.innerHTML = "Bookmarked";
        text.style.color = "hsl(176, 72%, 28%)";

        icon.classList.add("bookmarked");
    }
}

function showpreceed(num){
    var selCont = document.getElementById("selection-cont");
    selCont.style.display = "block";
    var labelCont = document.getElementById("labelid"+num);
    var inptCont = document.getElementById("check"+num);
    labelCont.style.border = "2px solid cyan";
    inptCont.checked = true;
}
