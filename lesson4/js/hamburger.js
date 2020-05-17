/**function toggleMenu() {
    document.getElementById("menuButton").classList.toggle("hide");
}*/

const hambutton = document.querySelector(".burger");
hambutton.addEventListener("click", toggleMenu);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}