
const plans = [["10K", 8], ["50k", 12], ["100k", 16], ["500k", 24], ["1M", 36]];


function choosePlan(){
    var pageviews = document.getElementById("pageviews");
    var price = document.getElementById("price");

    var plan = document.getElementById("myrange").value;

    pageviews.innerHTML = plans[plan][0];
    if(document.getElementById("discountswt").checked){
        price.innerHTML= plans[plan][1]*0.75;
    }else{
        price.innerHTML= plans[plan][1];
    }
}
