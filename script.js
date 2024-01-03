function shoot(){

    shootvar = Math.random();
    console.log(shootvar)
    if (shootvar<0.5){
        document.getElementById("play").src="islasmakes.png";
        document.getElementById("hello").innerHTML="YOU MADE IT!!!!!!!"
    }
    else{
        document.getElementById("play").src="islasmissbasketball.png";
        document.getElementById("hello").innerHTML="you missed try again"
    }
}
function reset(){
    shootvar = 0;
    document.getElementById("play").src="islasabouttoshootbasketball.png";
    document.getElementById("hello").innerHTML="";
}