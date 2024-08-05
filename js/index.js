document.addEventListener("DOMContentLoaded", function () {
  // Initialize the active state of the bottom line
  document.querySelector(".bottom__line").classList.add("bottom__active");

  // Add the "color" class to the first link initially
  document.querySelector(".link").classList.add("color");

  // First active item
  document
    .querySelector(".menu--item__one")
    .addEventListener("click", function () {
      document.querySelector(".bottom__line").classList.add("bottom__active");
      document.querySelector(".link").classList.add("color");
      document.querySelector(".link1").classList.remove("color1");
      document
        .querySelector(".bottom__line")
        .classList.remove("bottom__active1");
    });

  // Second active item
  document
    .querySelector(".menu--item__two")
    .addEventListener("click", function () {
      document.querySelector(".bottom__line").classList.add("bottom__active1");
      document.querySelector(".link1").classList.add("color1");
      document.querySelector(".link").classList.remove("color");
      document
        .querySelector(".bottom__line")
        .classList.remove("bottom__active");
    });
});

