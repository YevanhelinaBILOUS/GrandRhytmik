var ageDima = 12;
let age = 12;
let text = "I'am a string";
let is_activ = true;
const age_1 = 20;

// let age = 16;
// var age_2 = 16;

var my_name = " Yurii ";
let lastName = "Dart";
const work = "developer";
let my_age = 25;

let about_me = `My name is ${my_name}. I'm will be ${work}.`

console.log(my_name.length)
console.log(about_me)


$('.slider').slick({
    arrows: false,
    dots: true,
});

$('.slider-block__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                // arrows: true
            }
        }
    ]

});

$('.menu__btn').on('click',function() {
    $('.header__top-inner').toggleClass('header__top-inner--active')
})



