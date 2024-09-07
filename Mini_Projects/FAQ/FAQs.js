const quetions = document.querySelectorAll(".quetion");
const icon = document.querySelector(".icon");
const answer = document.querySelector(".answer");

co

quetions.forEach(function(val) {

    val.addEventListener("click", function() {
        val.childNodes[1].classList.toggle("active");
        val.childNodes[3].classList.toggle("active")
    });
});

