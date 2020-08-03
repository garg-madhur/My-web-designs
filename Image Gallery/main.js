const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 6; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/pic"+i+".jpg");
    thumbBar.appendChild(newImage);
    newImage.onclick = function(){
        imgdisplay(i);
    };
    
}

function imgdisplay(i){

        displayedImage.setAttribute('src', "./images/pic"+i+".jpg")
}

/* Wiring up the Darken/Lighten button */

btn.onclick = changColor;

function changColor(){
    if (btn.textContent === "Darken"){
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
        btn.textContent = "Lighter"

    }

    else if(btn.textContent === "Lighter"){
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
        btn.textContent = "Darken"
    }
}