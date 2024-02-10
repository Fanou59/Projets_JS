let form = document.querySelector(".form-quizz");
let reponse = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  reponse = document.querySelectorAll(
    ".question-block input[type=radio]:checked"
  ).value;

  console.log(reponse);

  // checkReponse(reponse);
});

function checkReponse(reponse) {
  if (reponse === "b") {
    console.log("you win");
  } else {
    console.log("you lose");
  }
}
