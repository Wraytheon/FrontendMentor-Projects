var acc = document.getElementsByClassName("accordion__title--wrapper");
var i;

for (i = 0; i < 2; i++) {
  acc[i].addEventListener("click", function () {
    // /* Toggle between adding and removing the "active" class,
    // to highlight the button that controls the panel */
    // this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var accTitle = document.getElementsByClassName("accordion__title");
for (i = 0; i < accTitle.length; i++) {
  accTitle[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("accordion__title--active");
  });
}