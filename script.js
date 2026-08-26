/* =========================================================
   LINK INTERACTION
========================================================= */

document.querySelectorAll(".link-card").forEach((link) => {
  link.addEventListener("click", function () {
    this.classList.add("clicked");

    setTimeout(() => {
      this.classList.remove("clicked");
    }, 250);
  });
});

/* =========================================================
   SOCIAL LINK RIPPLE
========================================================= */

document.querySelectorAll(".socials a").forEach((button) => {
  button.addEventListener("click", function () {
    this.style.transform = "scale(0.9)";

    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

/* =========================================================
   PREVENT EMPTY LINKS
========================================================= */

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
