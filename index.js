const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

//to find the number in data attr
const btn_num=p_btn_clicked.dataset.btnNum;
console.log(btn_num)


const img_active=document.querySelectorAll(`.p-btn--${btn_num}`);
img.forEach((curElem)=> curElem.classList.add("p-btn-not-active"));

img_active.forEach((curElem)=> curElem.classList.remove("p-btn-not-active"));

});

//Swiper js code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const heroSection=document.querySelector(".section-hero");
const portfolio=document.querySelector(".section-biodeta");
const projects=document.querySelector(".section-work-data");
const services=document.querySelector(".section-services");
const testimonial=document.querySelector(".section-testimonial");
const contect=document.querySelector(".section-contact");




const scrollEle=document.querySelector(".scrollTop-style");
const scrollToTop=() => {
  heroSection.scrollIntoView({behavior : "smooth"});
}
scrollEle.addEventListener("click",scrollToTop);

const about=document.querySelector(".nav-About");
about.addEventListener("click",scrollToTop);
