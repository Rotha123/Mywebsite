//popup find or company page
window.addEventListener("load",
function(){
    setTimeout(function open(event){
        document.querySelector(".popup").style.display=
        "block"},3000
    )
})
//to close popup page
document.querySelector("#close").addEventListener("click",
function(){
document.querySelector(".popup").style.display="none";
})

//slider show not working wiht button
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector('.slide');
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
// js slider get from AI


