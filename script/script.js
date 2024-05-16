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

$(function(){
    let currentindex = 0;

    setInterval(function(){
        let nextindex = (currentindex+1)%4;

        $(".slider_page").eq(currentindex).fadeOut(1200);
        $(".slider_page").eq(nextindex).fadeIn(1200);

        currentindex = nextindex;
    },3000);
});