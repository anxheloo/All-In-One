//Get the menu icon
var menuIcon = document.querySelector(".menu-icon");
//Get the sidebar
var sidebar = document.querySelector(".sidebar");

//Get the main container
var container = document.querySelector(".container");

//onclick, this function will toggle the small-sidebar class
menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};
