var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var a = 2;
var b = 4;

var card = document.getElementById("card") ;
var id = document.getElementById("button").addEventListener('click',function(){
    card.style.display="flex";
})

var close = document.getElementById("close").addEventListener('click',function(){
    card.style.display="none";
});




