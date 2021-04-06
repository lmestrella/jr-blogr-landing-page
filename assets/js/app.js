const navDropdownNames = document.querySelectorAll(".nav__link-name--dropdown");
const navDropdownArrows = navDropdownNames[0].querySelectorAll("span");
const navMenuBtn = document.querySelector(".nav__hamburger");
const navCloseMenuBtn = document.querySelector(".nav__close");
const headerNavWrapper = document.querySelector(".nav__wrapper--light");

const toggleNavDropdown = (e) => {
  e.target.classList.toggle("nav__link-name--selected");
  e.target.nextElementSibling.classList.toggle("nav__link-list--collapse");
  e.target.firstElementChild.classList.toggle("rotate-up");
};

const openMobileMenu = (e) => {
  headerNavWrapper.classList.remove("nav__wrapper--hidden");
  navCloseMenuBtn.style.display = "block";
  navMenuBtn.style.display = "none";
};

const closeMobileMenu = (e) => {
  headerNavWrapper.classList.add("nav__wrapper--hidden");
  navCloseMenuBtn.style.display = "none";
  navMenuBtn.style.display = "block";
};

navDropdownNames.forEach((navDropdownName) => {
  navDropdownName.addEventListener("click", toggleNavDropdown);
});

navMenuBtn.addEventListener("click", openMobileMenu);
navCloseMenuBtn.addEventListener("click", closeMobileMenu);
