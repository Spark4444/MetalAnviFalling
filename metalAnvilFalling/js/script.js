let anvil = document.querySelector(".anvil");
let soundEffect = document.querySelector(".metalPipeFalling");
let soundTimeout;

function anvilFalling(){
    clearTimeout(soundTimeout)
    document.querySelector(".pressToStart").style.opacity = "0";
    anvil.style.top = "0%";
    anvil.style.transition = "none";
    setTimeout(() => {  
        anvil.style.top = window.innerHeight - window.innerWidth * 0.15 + "px";
        anvil.style.transition = "";
    }, 100);
    soundTimeout = setTimeout(() => {
        soundEffect.play();
    }, 3100);
}