'use strict'

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggle-btn]");
const navlink = document.querySelectorAll("[data-link]");
const header = document.querySelector("[data-header]");


const navToggle = function() { 
    navbar.classList.toggle("active");
    header.classList.toggle("active");
  navToggler.classList.toggle("active");
}
addEventOnElem(navToggler, "click", navToggle);





/*
const toggleNav = () => navbar.classList.toggle("active");
    addEventOnElem(navToggler, "click", toggleNav);


   const closeToggle = () => navbar.classList.remove("active");
     addEventOnElem(navToggler, "click", closeToggle);
   

   const headerNav = () => header.classList.toggle("active");
    addEventOnElem(header, "click", headerNav);*/
   
/*
navToggler.addEventListener("click", function() {
    this.classList.toggle("active");
   header.classList.toggle("active");
})*/


const btnBackToTop = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function() { 
  if(window.scrollY >= 500) {
    btnBackToTop.classList.add("active");
  } else {
    btnBackToTop.classList.remove("active");
  }
})

const btnBackToTopp = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function() {
  window.scrollY >= 500 ? btnBackToTop.classList.add("active")
  : btnBackToTop.classList.remove("active")
})









