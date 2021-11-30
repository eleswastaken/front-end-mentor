
var domainIp = "frontendmentor.com";
var url = `https://geo.ipify.org/api/v1?apiKey=at_cdHgwit3pN9pTunnrhftnVm7PjZ05&domain=${domainIp}`;

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        domainIp = searchInput.value;
        url = `https://geo.ipify.org/api/v1?apiKey=at_cdHgwit3pN9pTunnrhftnVm7PjZ05&domain=${domainIp}`;
        starter()
    } 
});
function starter(){
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url);
    oReq.send();
    oReq.addEventListener("load", reqListener);
}


var coordinates = [40.71427,-74.00597];
function reqListener () {
    console.log(JSON.parse(this.responseText).ip);
    console.log(JSON.parse(this.responseText).isp);
    console.log(JSON.parse(this.responseText).location.city);
    console.log(JSON.parse(this.responseText).location.timezone);
    console.log(JSON.parse(this.responseText).location.postalCode);
    console.log(JSON.parse(this.responseText).location.lat);
    console.log(JSON.parse(this.responseText).location.lng);
    
    const  ipAddress = document.getElementById("ipAddress"),
      location = document.getElementById("location"),
      timeZone = document.getElementById("timeZone"),
      isp = document.getElementById("isp");

    ipAddress.innerHTML = JSON.parse(this.responseText).ip;
    location.innerHTML = `${JSON.parse(this.responseText).location.city},<br>${JSON.parse(this.responseText).location.postalCode}`;
    timeZone.innerHTML = JSON.parse(this.responseText).location.timezone;
    isp.innerHTML = JSON.parse(this.responseText).isp;
    
    coordinates[0] = parseFloat(JSON.parse(this.responseText).location.lat);
    coordinates[1] = parseFloat(JSON.parse(this.responseText).location.lng);

    mymap.setView(coordinates, 11);
  }
  


var mymap = L.map('mapid').setView(coordinates, 11);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    }).addTo(mymap);
    
L.marker(coordinates).addTo(mymap)
        .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup()
        .bindPopup("<b>Hello world!</b><br />I am a popup.").closePopup();