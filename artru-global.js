let artru_noanchors = document.querySelectorAll('.artru-noanchor a[href^="#"], a[class*="artru-noanchor"]');
artru_noanchors.forEach(function (artru_noanchor) {
    artru_noanchor.addEventListener("click", function (event) {
        event.preventDefault();
    });
});
const topElement = document.querySelector("#top");
const scrollTopButton = document.querySelector(".artru-scrollTop");
scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: topElement.offsetTop
    });
});

const languageSwitcher = document.querySelector("#artru-language_switcher");
const hideBoxLang = document.querySelector("#hide-box-lang");
const currentLang = document.querySelector("#current-lang");
languageSwitcher.addEventListener("mouseover", function () {
    hideBoxLang.style.display = "block";
});
languageSwitcher.addEventListener("mouseout", function () {
    hideBoxLang.style.display = "none";
});
document.addEventListener("click", function () {
    hideBoxLang.style.display = "none";
});
languageSwitcher.addEventListener("click", function (event) {
    event.stopPropagation();
});
currentLang.addEventListener("touchend", function (event) {
    event.preventDefault();
    hideBoxLang.style.display = hideBoxLang.style.display === "block" ? "none" : "block";
});