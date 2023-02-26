const $detailsList = document.querySelectorAll("details");
$detailsList.forEach(($details) => {
  $details.querySelector("summary").addEventListener("click", expand);
  function expand() {
    $detailsList.forEach(($details) => {
      $details.removeAttribute("open");
    });
  }
});

const $stylesA = document.querySelector("#styles-a");
$stylesA.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-a.css";
});

const $stylesB = document.querySelector("#styles-b");
$stylesB.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-b.css";
});

const $stylesC = document.querySelector("#styles-c");
$stylesC.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-c.css";
});

const $stylesD = document.querySelector("#styles-d");
$stylesD.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-d.css";
});

const $stylesE = document.querySelector("#styles-e");
$stylesE.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-e.css";
});
