let dark = document.querySelector(".dark");
dark.addEventListener("click", function () {
  document.body.style.backgroundColor = "#0B111D";
  document.querySelector(".sidepanel").style.backgroundColor = "#202C3C";
  document.querySelector(".air").style.backgroundColor = "#202C3C";
  document.querySelector(".forcast").style.backgroundColor = "#202C3C";
  document.querySelector(".nav").style.backgroundColor = "#202C3C";
  document.querySelector(".search").style.backgroundColor = "#202C3C";
  document.querySelector(".map").style.backgroundColor = "#202C3C";
  document.getElementById(".search").style.backgroundColor = "#202C3C";
  document.body.style.color = "white";
});
