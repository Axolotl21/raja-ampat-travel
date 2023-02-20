$(document).ready(function(){
    let btnMenu = $("#btn-menu");
    let menu = $(".header nav ul");
    $(btnMenu).click(function(){
        $(this).toggleClass("active");
        $(menu).toggleClass("slide");
    });
    $(window).scroll(function(){
        let value =  window.scrollY;
        let text = document.querySelector("#text");
        let bird1 = document.querySelector("#bird1");
        let bird2 = document.querySelector("#bird2");
        let rocks = document.querySelector("#rocks");
        let forest = document.querySelector("#forest");
        let water = document.querySelector("#water");
        text.style.top = 30 + value * -0.5 + "%";
        bird1.style.top = value * -1.5 + "px";
        bird1.style.left = value * 2 + "px";
        bird2.style.top = value * -1.5 + "px";
        bird2.style.left = value * -5 + "px";
        rocks.style.top = value * -0.12 + "px";
        forest.style.top = value * 0.25 + "px";
    });
});