$(document).ready(function(){
    $('.Login').hover(function(){
        $(this).find(".a_sub").slideDown(200); 
    }, function(){
        $(this).find(".a_sub").slideUp(200); 
    });
});

$(document).ready(function() {
    $(".nav_container > div").hover(function() {
        $(this).children(".submenu").slideDown(200);
    }, function() {
        $(this).children(".submenu").slideUp(200);
    });
});

let slideIndex = 0;
let slides = document.getElementsByClassName("slider_page");
let dots = document.getElementsByClassName("dot");
let slideTimer;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++; 
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    slideTimer = setTimeout(showSlides, 7000);
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n - 1; 
    showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);

document.addEventListener("DOMContentLoaded", function() {
    let currencyButton = document.querySelector(".currency .dollor");
    let languageButton = document.querySelector(".language .Anti");

    let currencyDropdown = currencyButton.querySelector(".dropdown");
    let languageDropdown = languageButton.querySelector(".dropdown");

    currencyButton.addEventListener("click", function() {
        currencyDropdown.classList.toggle("show");
        languageDropdown.classList.remove("show");
    });

    languageButton.addEventListener("click", function() {
        languageDropdown.classList.toggle("show");
        currencyDropdown.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dollor")) {
            currencyDropdown.classList.remove("show");
        }
        if (!event.target.matches(".Anti")) {
            languageDropdown.classList.remove("show");
        }
    });
});

