function OpenClose() {
  let navmenu = document.getElementById("menu");
  if (navmenu.className === "list") {
    navmenu.className += " show";
  } else {
    navmenu.className = "list";
  }
}
