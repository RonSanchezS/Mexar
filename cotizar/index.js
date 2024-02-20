let intersectingFlag = false;

const navbar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelector(".headernav").classList.remove("move-up", "move-down", "is-intersecting");
            intersectingFlag = true;
        } else {
            document.querySelector(".headernav").classList.add("move-up");
            intersectingFlag = false;
        }
    });
});
const navbarElement = document.querySelector(".uber_text");
navbar.observe(navbarElement);

var lastScrollTop = 0;

window.onscroll = function() {
    var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        if(!intersectingFlag) {
        }
    } else {
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};
