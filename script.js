function szukajNapój(){
    var poleSzukaj = document.getElementById("szukaj");

    poleSzukaj.addEventListener("click", () => poleSzukaj.setAttribute("value",""));

    var tablicaProduktow = [];
    tablicaProduktow = document.querySelectorAll("li");

    var tablicaWartosci = [];

    for(let i=0; i<tablicaProduktow.length; i++){
       
        tablicaWartosci[i] = tablicaProduktow[i].textContent;
       };


    poleSzukaj.addEventListener("keyup", function(){
       
       var wprowadzanaLitera = poleSzukaj.value;
       var wprowadzanyString = new String(wprowadzanaLitera).toLowerCase();


       for(var i=0; i<tablicaWartosci.length; i++){
        
        if(String(tablicaWartosci[i]).toLowerCase().indexOf(wprowadzanyString) == -1) {
            
            tablicaProduktow[i].setAttribute("class","ukryj");
            }
        else
            tablicaProduktow[i].removeAttribute("class","ukryj");
            
        }; 

    });
};

szukajNapój();
