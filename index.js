
var j = document.querySelectorAll(".drum");

for(var i = 0; i < j.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var q = this.innerHTML;
        
        makeSound(q);
        animation(q);
    })
}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    animation(event.key);
})

function makeSound(key) {

    key = key.toLowerCase();
    switch (key) {
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default: console.log(key);
            break;
    }
}

function animation(currentKey){

    currentKey = currentKey.toLowerCase();

    var activeBTN = document.querySelector("." + currentKey);
    activeBTN.classList.add("pressed");

    setTimeout(function(){
        activeBTN.classList.remove("pressed")
    }, 100)

}