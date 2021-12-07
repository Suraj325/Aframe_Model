const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
$(window).load(function () {
  $(".status").fadeOut();
  $(".preloader").delay(50).fadeOut(1000);
  $("body").delay(50).css({ overflow: "visible" });
});
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
const counters = document.querySelectorAll(".counter");
const speed = 60;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);

    const inc = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 45);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
