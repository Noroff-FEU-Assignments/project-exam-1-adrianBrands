const nav = document.querySelector("#nav");
const getLi = document.querySelectorAll(".nav-action");
//const current = document.querySelector(".current");

let navTop = nav.offsetTop;

for (let i = 0; i < getLi.length; i++) {
  function navFixed() {
    if (window.scrollY >= navTop) {
      nav.classList.add("fixed");
      getLi[i].style.color = "#fff";
      //current.style.color = "#fff";
    } else {
      nav.classList.remove("fixed");
      getLi[i].style.color = "#626161";
      //current.style.color = "#626161";
    }
  }

  window.addEventListener("scroll", navFixed);
}
