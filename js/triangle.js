var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function playPause() {
    if (isPlaying) {
        myAudio.pause()
    } else {
        myAudio.play();
    }
};

myAudio.onplaying = function () {
    isPlaying = true;
};

myAudio.onpause = function () {
    isPlaying = false;
};