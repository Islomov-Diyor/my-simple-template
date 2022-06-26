// Navbar scripts
const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});
//navbar scripts


// slider scripts
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})