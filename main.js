// setting the needed varibles for data 
let mainBts = document.querySelector(".separator div");
// the inputs
let days = document.querySelector(".days input");
let months = document.querySelector(".months input");
let years = document.querySelector(".years input");
// the varaibles of the result
let numberOfDays;
let numberOfMonths;
let numberofYears;
// the places of the varaible of resutl
let daysPosition = document.querySelector(".result .num-days span");
let monthsPosition = document.querySelector(".result .num-months span");
let yearsPosition = document.querySelector(".result .num-years span");
let available = true;
let resetingIfTrue = false;
// the error function in case of error
function error() {
    days.parentElement.classList.add("error");
    months.parentElement.classList.add("error");
    years.parentElement.classList.add("error");
    days.value = "";
    months.value = "";
    years.value = "";
    available = false;
}
// the reset function in case of trying again
function reset() {
    days.parentElement.classList.remove("error");
    months.parentElement.classList.remove("error");
    years.parentElement.classList.remove("error");
    daysPosition.innerHTML = "--";
    monthsPosition.innerHTML = "--";
    yearsPosition.innerHTML = "--";
    available = true;
    resetingIfTrue = false;
}
days.addEventListener("focus", function () {
    if (resetingIfTrue) {
        days.value = "";
        months.value = "";
        years.value = "";
    }
});
months.addEventListener("focus", function () {
    if (resetingIfTrue) {
        days.value = "";
        months.value = "";
        years.value = "";
    }
});
years.addEventListener("focus", function () {
    if (resetingIfTrue) {
        days.value = "";
        months.value = "";
        years.value = "";
    }
})
days.addEventListener("focus", function () {
    reset()
});
months.addEventListener("focus", function () {
    reset()
});
years.addEventListener("focus", function () {
    reset()
});
mainBts.onclick = function () {
    // this will be used to update in every time 
    let currentDate = new Date();
    if (days.value === "" || months.value === "" || years.value === "") {
        error();// if empty
    }
    if (+days.value <= 0 || +days.value > 31) {
        error();// if invalid
    }
    if (+months.value <= 0 || +months.value > 12) {
        error();
    }
    if (+years.value === currentDate.getFullYear()) {
        if (+months.value <= 0 || +months.value > currentDate.getMonth() + 1) {
            error();
        }
    } else if (+years.value <= 1920 || +years.value >= currentDate.getFullYear()) {
        error();
    } else if (+days.value != days.value || +months.value != months.value || +years.value != years.value) {
        error();
    }
    if (available) {
        let birthDate = new Date(`${+years.value}`, `${+months.value - 1}`, `${+days.value}`);
        let diffrence = currentDate.getTime() - birthDate.getTime();
        numberofYears = Math.floor(diffrence / 1000 / 60 / 60 / 24 / 365);
        diffrence -= numberofYears * 1000 * 60 * 60 * 24 * 365;
        numberOfMonths = Math.floor(diffrence / 1000 / 60 / 60 / 24 / 30);
        diffrence -= numberOfMonths * 1000 * 60 * 60 * 24 * 30;
        numberOfDays = Math.floor(diffrence / 1000 / 60 / 60 / 24);
        console.log(currentDate.getFullYear(), currentDate.getMonth());
        console.log(numberofYears, numberOfMonths, numberOfDays);
        // setting the numbers to its positions
        daysPosition.innerHTML = numberOfDays;
        monthsPosition.innerHTML = numberOfMonths;
        yearsPosition.innerHTML = numberofYears;
        resetingIfTrue = true;
    }
}