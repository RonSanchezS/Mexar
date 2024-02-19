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

const about = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelector(".about").classList.add("is-intersecting");
        } else {
            document.querySelector(".about").classList.remove("is-intersecting");
        }
    });
});

const services = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelector(".services-a").classList.add("is-intersecting");
        } else {
            document.querySelector(".services-a").classList.remove("is-intersecting");
        }
    });
});

const servicesElement = document.querySelector("#call-us-final");
services.observe(servicesElement);

const aboutElement = document.querySelector("#list-more-info");
about.observe(aboutElement);    

const navbarElement = document.querySelector(".uber_text");
navbar.observe(navbarElement);

var lastScrollTop = 0;

window.onscroll = function() {
    var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {

        if(!intersectingFlag) {
        //    document.querySelector(".headernav").classList.add("move-up");
        }
       
    } else {
       // document.querySelector(".headernav").classList.remove("move-up", "move-down");
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};


function callButtonClick(){
    numero = "+12506097987";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open('tel:' + numero);
    } else {
        dialog.showModal();
        dialog.style.display = "flex";
        dialog.style.alignItems = "center";
        dialog.style.justifyContent = "center";
        dialog.style.flexDirection = "column";
    }
}

const dialog = document.querySelector("dialog");

closeButton = document.getElementById("closeButton");
// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.style.display = "none";
  dialog.close();
});