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