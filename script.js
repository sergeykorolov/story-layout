
let isBurger = false;

function onChangeBurgerState () {
    isBurger = !isBurger;
    if (isBurger) {
        document.getElementsByClassName("menu")[0].style.display = "block";
        document.getElementsByClassName("background-menu")[0].style.display = "block";
    } else {
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("background-menu")[0].style.display = "none";
    }
}