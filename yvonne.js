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

const bookmark = document.querySelectorAll(".question-box__bookmark");

for (let i = 0; i < bookmark.length; i++) {
   bookmark[i].addEventListener("click", () => {
       
if(bookmark[i].classList.contains("far")) {
    bookmark[i].classList.remove("far", "fa-bookmark");
       bookmark[i].classList.add("fas", "fa-bookmark"); 

} else  {
    bookmark[i].classList.remove("fas", "fa-bookmark");
    bookmark[i].classList.add("far", "fa-bookmark"); 
   
}
   });
}

function myFunction() {
    let element = document.querySelector("body");
    element.classList.toggle("dark-mode");}


