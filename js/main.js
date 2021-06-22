// mobile menu
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menubtn = document.querySelector(".menu-btn");
let cancelbtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");



menubtn.onclick = function(){
    navBar.classList.add("active");
    menubtn.style.opacity = "0";
    menubtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
}

cancelbtn.onclick = function(){
    navBar.classList.remove("active");
    menubtn.style.opacity = "1";
    menubtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
}



// side bar closing when any button clicked

let navLinks = document.querySelectorAll(".menu li a");
for( var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menubtn.style.opacity = "1";
        menubtn.style.pointerEvents = "auto";
         body.style.overflow = "auto";
    })
}

// Scroll Fixed
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        logoOne.classList.add("active");
        menubtn.classList.add("active");
    } else{
        nav.classList.remove("sticky");
        logoOne.classList.remove("active");
        menubtn.classList.remove("active");
    }
    // count 

var number = 0;
var onTop = $('#counter').offset().top - window.innerHeight;

if(number == 0 && $(window).scrollTop() > onTop){
    $('.counter-value').each(function(){
    var $this = $(this),
    countTo  = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo 
    },
    {
        duration:2000,
        easing: 'swing',
        step: function(){
            $this.text(Math.floor(this.countNum));
        },
        complete:function(){
           $this.text(this.countNum);
        }
    });
    });

}
}







