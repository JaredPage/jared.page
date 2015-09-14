document.querySelector("a.lnk:nth-child(2)").onclick = function() {
    if (window.innerWidth > 1199) {
        if (document.querySelector("a.lnk:nth-child(2) .text").textContent == "Contact Me") {
            document.querySelector("a.lnk:nth-child(2) .text").textContent = "About Me";
        } else {
            document.querySelector("a.lnk:nth-child(2) .text").textContent = "Contact Me";
        }
        var selection = document.querySelectorAll(".card-inner.animated");
        selection.forEach(function(card) {
            card.classList.toggle("hidden");;
            card.classList.toggle("fadeInLeft");;
            card.classList.toggle("fadeOutLeft");;
        });
        var selection = document.querySelectorAll(".card-inner.active.animated");
        selection.forEach(function(card) {
            card.classList.toggle("active");
        });
        document.querySelector(".third-element").classList.toggle("border-line-v");
    }
};

document.querySelector(".daisy").onmouseenter = function() {
    document.querySelector(".daisy .icon:nth-child(1)").classList.toggle("hidden");
    document.querySelector(".daisy .icon:nth-child(2)").classList.toggle("hidden");
};

document.querySelector(".daisy").onmouseleave = function() {
    document.querySelector(".daisy .icon:nth-child(1)").classList.toggle("hidden");
    document.querySelector(".daisy .icon:nth-child(2)").classList.toggle("hidden");
};

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function getDaysInYearUpUntilNow(day, month, year) {
    var daysInYear = day;
    var i = 0;
    for (i = 0; i < month; i++) {
        daysInYear += daysInMonth(i, year)
    }
    return daysInYear;
}

function getDaysFromYearUpUntilNow(year) {
    current_date = new Date();
    coffee_count = (current_date.getYear() - 100 + 2000 - year) * 365 * 2 + getDaysInYearUpUntilNow(current_date.getDate(), current_date.getMonth(), current_date.getYear());
    return coffee_count;
}

function coffeeCalc() {
    var coffee_count = getDaysFromYearUpUntilNow(2006);
    document.querySelector("#coffee-calc").textContent = coffee_count;
}