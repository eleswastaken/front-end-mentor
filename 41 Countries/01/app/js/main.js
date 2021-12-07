

var requestURL = "https://restcountries.com/v3.1/all";
// var requestURL = "./data.json";
const request = new XMLHttpRequest(),
      countryInfoCont = document.querySelector(".country-info"),
      countriesCont = document.querySelector(".countries-cont");

request.open('GET', requestURL);
request.responseType = "json";
request.send();
 
request.addEventListener("load", function(){
    console.log(request.status);
    placement('load', perPage)
})
var perPage = 8;

var placedCountries = [],
    searchCountries = [],
    linkedCountries = [];
    
function placement(msg, howMany){
    countriesCont.innerHTML = '';
    for(var i=0; i < howMany; i++){
        if(msg =='load'){
            var info = request.response[Math.floor(Math.random()*request.response.length)];
            var newCountry = `<div onclick="openCountry(${i},'load')" class="country" id="">`;
        } else if(msg=='search'){
            var info = searchCountries[i];
            var newCountry = `<div onclick="openCountry(${i},'search')" class="country" id="">`;
        } else if(msg =='reload'){
            var info = placedCountries[i];
            var newCountry = `<div onclick="openCountry(${i},'load')" class="country" id="">`;
        }

        newCountry += `<div class="flag-cont"><img src="${info.flag}" alt=""></div>
            <div class="text-cont">
                <p class="name">${info.name}</p>
                <p>Population: <span class="populationNum">${info.population}</span></p>
                <p>Region: <span class="regionName">${info.region}</span></p>
                <p>Capital: <span class="capitalName">${info.capital}</span></p>
            </div>
        </div>`;
        countriesCont.innerHTML += newCountry;
        placedCountries.push(info);
        // console.log(info.name);
        // console.log(info.region)
        // console.log(info.subregion)
        // console.log(info.nativeName)
        // console.log(info.topLevelDomain[])
        // console.log(info.capital)
        // console.log(info.flag)
        // console.log(info.currencies[0].name)
        // console.log(info.languages[0].name)
        // console.log(info.population)
        // console.log(info.alpha3Code)
        // console.log(info.borders)
        // console.log()
    }
}
function openCountry(elementNum, recall){
    // console.log(elementNum)
    if(recall == 'load'){
        var element = placedCountries[elementNum]
    } else if (recall == 'jump'){
        var element = linkedCountries[elementNum]
        linkedCountries = [];
    } else if(recall == 'search'){
        var element = searchCountries[elementNum]
        // searchCountries = [];
    }
    var str = `
        <p onclick="backMain(${window.scrollY})" ><img src="images/icon-arrow-long.svg" alt=""> Back to Main</p>
        <div class="flag-cont">
            <img src="${element.flag}" alt="">
        </div>
        <div class="text-cont">
            <h1 class="name">${element.name}</h1>
            <div class="info-cont">
                <p>Native Name: <span> ${element.nativeName}</span></p>
                <p>Population: <span>${element.population} </span></p>
                <p>Region: <span>${element.region} </span></p>
                <p>Sub Region: <span>${element.subregion} </span></p>
                <p>Capital: <span>${element.capital} </span></p>
                <p>Top Level Domain: <span>${element.topLevelDomain[0]} </span></p>
                <p>Currencies: <span>${element.currencies[0].name} </span></p>
                <p>Languages: <span> `;
                for(lang of element.languages){
                    if(element.languages.slice(-1)[0] == lang){
                        str += lang.name + ' '
                    }else{
                        str += lang.name + ', '
                    }
                }
            str +=`</span></p>
            </div>
            <div class="border-countries flex">
                <p>Border Countries: </p>
                <div>`;
                for (border of element.borders){
                    for(country of request.response){
                        if (country.alpha3Code == border){
                            str += `<p onclick="openCountry(${linkedCountries.length},'jump')" class="b-country">${country.name}</p>`
                            linkedCountries.push(country)
                        }
                    }
                }
            str +=`</div></div></div>`;

    countryInfoCont.innerHTML = str;
    countryInfoCont.style.left = '0';
    countriesCont.style.display = "none";
}
function backMain(ycor){
    countriesCont.style.display = "grid";
    window.scrollTo(0, ycor)
    countryInfoCont.style.left = "-110%";
}


function searchCountry(){
    var search = document.querySelector(".search-cont input")
    // console.log(search.value)
    // console.log()
    searchCountries = [];
    for(country of request.response){
        if (country.name.toLowerCase().includes(search.value)){
            // console.log(country.name);
            searchCountries.push(country);
        }
    }
    if(search.value.trim()==''){
        placement('reload', perPage)       
    } else{
        placement('search', perPage)
    }
}

function showPerPage(elem){
    perPage = elem.value;
    placement("load", perPage)
}

function filterRegion(region){
    placedCountries =[];
    for(country of request.response){
        if(country.region == region){
            placedCountries.push(country);
        }
    }
    document.querySelector(".filter-dropdown p").innerHTML = region+' <img src="images/icon-arrow.svg" alt="">';
    placement("reload", perPage)
}

function switchMode(){
    if(document.body.className == "light-mode"){
        document.body.className = "dark-mode";
        document.querySelector(".theme-switch div img").src = 'images/icon-moon.svg';
    } else {
        document.body.className = "light-mode";
        document.querySelector(".theme-switch div img").src = 'images/icon-sun.svg';
    }
}