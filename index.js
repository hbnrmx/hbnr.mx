$(document).ready(function(){

    /*Refuse to support IE*/
    var isIE = /(MSIE|Trident)/.test(window.navigator.userAgent);
    if(isIE){
        alert("Please update to a modern browser like Firefox, Chrome or Edge.");
    } 
    else
    {
        /*init parallax.js*/
        if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            var parallaxInstance = new Parallax($("#scene").get(0));
        }
            
        /*calculate birthday*/
        var now = new Date();
        var then = new Date('1997-12-18T09:56:00');
        var age = Math.floor((now-then)/1000/60/60/24/365);
        $(".age")[0].innerHTML= `(${age})`;

        /*deobfuscate mail*/
        $(".obfuscated-mailto").attr("href", $(".obfuscated-mailto").attr("href").replace(",,,", "@").replace("---", "."))
        $(".obfuscated-mail").html($(".obfuscated-mail").html().replace(",,,", "@").replace("---", "."));

        var card = $(".card");
        $(".profile").hover(function(){
            $(this).toggleClass("expanded")
        });

        $(".projects").click(function(){
            card.addClass("wide");
            card.removeClass("flipped");
            document.title = "hbnr.mx | Projects";
        });

        $(".aboutme").click(function(){
            card.addClass("wide");
            card.removeClass("flipped");
            document.title = "hbnr.mx | About Me";
        });

        $(".contactme").click(function(){
            card.addClass("flipped");
            card.removeClass("wide");
            document.title = "hbnr.mx | Contact";
        });
        
    }
}); 

