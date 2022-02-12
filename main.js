const tgBtn = document.getElementsByClassName("tg-btn")[0];
const navBar = document.getElementsByClassName("nav-bar")[0];

tgBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
})

let sliders = document.querySelector(".slider-items").children;
let rightSlider = document.querySelector(".right-slider");
let leftSlider = document.querySelector(".left-slider");
let totalS = sliders.length;
let index = 0;

rightSlider.onclick = function (){
    next("next");
}

leftSlider.onclick = function (){
    next("prev");
}

function next(direction){
    if(direction=="next"){
        index++;
        if(index == totalS){
            index = 0;
        }
    }
    else{
        if(index==0){
            index =totalS-1;
        }
        else{
            index--;
        }
    }
    for(i=0; i<sliders.length; i++){
        sliders[i].classList.remove("active");
    }
    sliders[index].classList.add("active");
}

const enviar = document.getElementsByClassName("contact");
const name1 = document.getElementById("namedescription");
const mail1 = document.getElementById("maildescription");
const phone1 = document.getElementById("phonedescription");
const message = document.getElementById("mssg");
const boton = document.getElementById("btnSend");

boton.addEventListener('click', function(e){
    e.preventDefault();

    const nameValue = name1.value;
    const mailValue = mail1.value;
    const phoneValue = phone1.value;
    const messageValue = message.value;

    if(!nameValue || !mailValue || !phoneValue || !messageValue){
        alert("Debe de llenar todas las casillas");
        return;
    }else{
        alert("Su solicitud ha sido enviada");
        return;
    }
})

