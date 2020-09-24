function hamburgerMenu() {
  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let menuStyle = getComputedStyle(hamburgerMenu);
  console.log(menuStyle.display);
  if (menuStyle.display == "none") {
    document.getElementById("ham-menu").style.display = "flex";
    return;
  } else {
    document.getElementById("ham-menu").style.display = "none";
    return;
  }
}
