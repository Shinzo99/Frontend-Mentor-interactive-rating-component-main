const submit = document.getElementById("submit");
const rating = document.querySelectorAll(".rate");
const input = document.getElementById("rating_input");
const alert = document.getElementById("alert");
let rate;

rating.forEach((btn) => {
    btn.addEventListener("click", () => {
        rate = btn.value;
        input.innerText = rate;
    });
});

submit.addEventListener("click", e =>{
    if(rate != null) {
        document.querySelector(".ratings").style.display = "none";
        document.querySelector(".response").style.display = "flex";
    }else {
        alert.innerText = "Please select a rating!"
    }
})

