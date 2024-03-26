let ourSong = document.getElementById("ourSong");
let icon = document.getElementById("icon");
icon.onclick = function(){
    if (ourSong.paused){
        ourSong.play();
        icon.src = "assets/pause.png";
    } else{
        ourSong.play();
        icon.src = "assets/play.png";
    }
}