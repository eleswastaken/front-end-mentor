

function togglePlans(){
    const toggle = document.getElementById("plan-toggle");
    const aPlans = document.getElementsByClassName("price-annually");
    const mPlans = document.getElementsByClassName("price-monthly");
    if (toggle.checked){
        for (plan of aPlans){
            plan.style.display = "flex";
        }
        for (plan of mPlans){
            plan.style.display = "none";
        }
    }else{
        for (plan of aPlans){
            plan.style.display = "none";
        }
        for (plan of mPlans){
            plan.style.display = "flex";
        }
    }
}