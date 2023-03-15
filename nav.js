function OpenClose() {
  var navmenu = document.getElementById("menu");
  if (navmenu.className === "list") {
    navmenu.className += " show";
  } else {
    navmenu.className = "list";
  }
}
