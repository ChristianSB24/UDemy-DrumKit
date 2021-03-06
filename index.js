for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(this.innerHTML)
    });

};

document.addEventListener("keydown", event => {
    makeSound(event.key)
    buttonAnimation(event.key)
})


function makeSound(key) {
    switch(key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        default: console.log(key)
    }

}

function buttonAnimation(currentKey) {
    console.log(currentKey)

    var activeButton = document.querySelector("." + currentKey);
    
    // Also works but easier and faster to use classlist.add()
    // activeButton.setAttribute("class", "pressed " + currentKey + " drum")

    // setTimeout(function() {activeButton.setAttribute("class", "drum " + currentKey)}, 100)

    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)

}

// If statements work but better to use switch statements
// function soundType() {
//     console.log(this.innerHTML)
//     if (this.innerHTML === "w") {
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play()
//     }
//     if (this.innerHTML === "a") {
//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play()
//     }
//     if (this.innerHTML === "s") {
//         var audio = new Audio('sounds/snare.mp3');
//         audio.play()
//     }
//     if (this.innerHTML === "d") {
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play()
//     }
//     if (this.innerHTML === "j") {
//         var audio = new Audio('sounds/tom-2.mp3');
//         audio.play()
//     }
//     if (this.innerHTML === "k") {
//         var audio = new Audio('sounds/tom-3.mp3');
//         audio.play()
//     }
//     if (this.innerHTML === "l") {
//         var audio = new Audio('sounds/tom-4.mp3');
//         audio.play()
//     }
// }
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play()