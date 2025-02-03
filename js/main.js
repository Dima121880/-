// ფოტო-სლაიდი

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

// პროცენტების-სლაიდი

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
//   window.addEventListener("scroll", animateProgressBars);
// }

let indicator1 = document.querySelector(".line1-0");
let indicator2 = document.querySelector(".line2-0");
let indicator3 = document.querySelector(".line3-0");
let indicator4 = document.querySelector(".line4-0");

window.onscroll = function () {
  indicator1.classList.add("line-80");
  indicator2.classList.add("line-65");
  indicator3.classList.add("line-50");
  indicator4.classList.add("line-30");
};
