

function toggleDarkMode(){
    console.log(document.getElementById("darkMode").checked)

    const bg = document.body;
    const folwsCont = document.getElementsByClassName("followers-cont");
    const statsCont = document.getElementsByClassName("stats-cont");
    const fnumbers = document.getElementsByClassName("followers");
    const lnumbers = document.getElementsByClassName("number");
    const ftexts = document.getElementsByClassName("text");
    const statstext = document.getElementsByClassName("statstext");
    if (document.getElementById("darkMode").checked){
        bg.style.backgroundColor = "hsl(0, 0%, 100%)";
        for (const element of folwsCont){
            element.style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        for (const element of statsCont){
            element.style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        for (const number of fnumbers){
            number.style.color = "hsl(230, 17%, 14%)";
        }
        for (const number of lnumbers){
            number.style.color = "hsl(230, 17%, 14%)";
        }
        for(const text of ftexts){
            text.style.color = "hsl(228, 12%, 44%)";
        }
        for (const text of statsCont){
            text.style.color = "hsl(228, 12%, 44%)";
        }
    }else{
        bg.style.backgroundColor = "hsl(230, 17%, 14%)";
        for (const element of folwsCont){
            element.style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        for (const element of statsCont){
            element.style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        for (const number of fnumbers){
            number.style.color = "hsl(0, 0%, 100%)";
        }
        for (const number of lnumbers){
            number.style.color = "hsl(0, 0%, 100%)";
        }
        for(const text of ftexts){
            text.style.color = "hsl(228, 34%, 66%)";
        }
        for (const text of statsCont){
            text.style.color = "hsl(228, 12%, 44%)";
        }
    }
}