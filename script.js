let menu = document.querySelector("#main-menu");
let navbar = document.querySelector(".navigation-panel");

menu.addEventListener('click', function(){
  if(navbar.style.display === "none") {
    navbar.style.display = "flex";
    menu.textContent = "CLOSE";
  } else {
    navbar.style.display = "none";
    menu.textContent = "MENU";
  }
})

let flip_cards = document.querySelectorAll(".flip-card-info");
let flip_toggle = document.querySelectorAll(".flip-card-heading");

flip_toggle[0].addEventListener("click", function(){
  if(flip_cards[0].style.display === "none"){
    flip_cards[0].style.display = "flex";
  }else {
    flip_cards[0].style.display = "none";
  }
});

flip_toggle[1].addEventListener("click", function(){
  if(flip_cards[1].style.display === "none"){
    flip_cards[1].style.display = "flex";
  }else {
    flip_cards[1].style.display = "none";
  }
});

flip_toggle[2].addEventListener("click", function(){
  if(flip_cards[2].style.display === "none"){
    flip_cards[2].style.display = "flex";
  }else {
    flip_cards[2].style.display = "none";
  }
});

flip_toggle[3].addEventListener("click", function(){
  if(flip_cards[3].style.display === "none"){
    flip_cards[3].style.display = "flex";
  }else {
    flip_cards[3].style.display = "none";
  }
});

flip_toggle[4].addEventListener("click", function(){
  if(flip_cards[4].style.display === "none"){
    flip_cards[4].style.display = "flex";
  }else {
    flip_cards[4].style.display = "none";
  }
});
