const OpenClose = () => {
  const navmenu = document.getElementById("menu");
  if (navmenu.classList.contains("show")) {
    navmenu.classList.remove("show");
  } else {
    navmenu.classList.add("show");
  }
}
