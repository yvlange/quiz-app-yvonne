const button = document.querySelectorAll('button');
const answer = document.querySelectorAll('.question-box__answer');

for (let i = 0; i < button.length; i++){
button[i].addEventListener("click", () => {
 const shown = answer[i].classList.toggle("question-box__answer");
if (shown) {

    answer[i].style.display = "none";
} else {
    answer[i].style.display = "block";

}
});
}