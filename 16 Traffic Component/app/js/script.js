

(function(window, document, undefined){
    window.onload = init;
    
        function init(){
            
            var progress = document.getElementById("progressdone");   
            var usedData = document.getElementById("data-used").innerHTML;
            var width = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= usedData/(1000/100)) {
                    clearInterval(id);
                } else {
                    width++; 
                    progress.style.width = width + '%'; 
                }
            }
        }
    
    })(window, document, undefined);