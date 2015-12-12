window.addEventListener("load", function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var muziek = document.getElementById("audio");
    muziek.src = "Christmas.wav";
    
    var bomen = ["tree0.png","tree1.png","tree2.png","tree3.png","tree4.png","tree5.png","tree6.png","tree7.png"];
    var boom = new Image();
    boom.src = "images/"+ bomen[0];
    
    boom.addEventListener("load",function(){
            context.drawImage(boom,400,100);
    });
})