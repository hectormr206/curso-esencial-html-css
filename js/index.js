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
  document.querySelector("#styles-a").className = "active";
  document.querySelector("#styles-b").className = "";
  document.querySelector("#styles-c").className = "";
  document.querySelector("#styles-d").className = "";
  document.querySelector("#styles-e").className = "";
  document.querySelector("#google-chrome-logo").src =
    "./images/google-chrome.png";
  document.querySelector("#visual-studio-code-logo").src =
    "./images/visual-studio-code.png";
  document.querySelector("#figma-logo").src = "./images/figma.png";
  document.querySelector("#github-logo").src = "./images/github.png";
  document.querySelector("#footer-instagram-icon").src =
    "./images/instagram-white.png";
  document.querySelector("#footer-facebook-icon").src =
    "./images/facebook-white.png";
  document.querySelector("#footer-twitter-icon").src =
    "./images/twitter-white.png";
});

const $stylesB = document.querySelector("#styles-b");
$stylesB.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-b.css";
  document.querySelector("#styles-a").className = "";
  document.querySelector("#styles-b").className = "active";
  document.querySelector("#styles-c").className = "";
  document.querySelector("#styles-d").className = "";
  document.querySelector("#styles-e").className = "";
  document.querySelector("#google-chrome-logo").src =
    "./images/google-chrome-white.png";
  document.querySelector("#visual-studio-code-logo").src =
    "./images/visual-studio-code-white.png";
  document.querySelector("#figma-logo").src = "./images/figma-white.png";
  document.querySelector("#github-logo").src = "./images/github-white.png";
  document.querySelector("#footer-instagram-icon").src =
    "./images/instagram.png";
  document.querySelector("#footer-facebook-icon").src = "./images/facebook.png";
  document.querySelector("#footer-twitter-icon").src = "./images/twitter.png";
});

const $stylesC = document.querySelector("#styles-c");
$stylesC.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-c.css";
  document.querySelector("#styles-a").className = "";
  document.querySelector("#styles-b").className = "";
  document.querySelector("#styles-c").className = "active";
  document.querySelector("#styles-d").className = "";
  document.querySelector("#styles-e").className = "";
  document.querySelector("#google-chrome-logo").src =
    "./images/google-chrome.png";
  document.querySelector("#visual-studio-code-logo").src =
    "./images/visual-studio-code.png";
  document.querySelector("#figma-logo").src = "./images/figma.png";
  document.querySelector("#github-logo").src = "./images/github.png";
  document.querySelector("#footer-instagram-icon").src =
    "./images/instagram-white.png";
  document.querySelector("#footer-facebook-icon").src =
    "./images/facebook-white.png";
  document.querySelector("#footer-twitter-icon").src =
    "./images/twitter-white.png";
});

const $stylesD = document.querySelector("#styles-d");
$stylesD.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-d.css";
  document.querySelector("#styles-a").className = "";
  document.querySelector("#styles-b").className = "";
  document.querySelector("#styles-c").className = "";
  document.querySelector("#styles-d").className = "active";
  document.querySelector("#styles-e").className = "";
  document.querySelector("#google-chrome-logo").src =
    "./images/google-chrome.png";
  document.querySelector("#visual-studio-code-logo").src =
    "./images/visual-studio-code.png";
  document.querySelector("#figma-logo").src = "./images/figma.png";
  document.querySelector("#github-logo").src = "./images/github.png";
  document.querySelector("#footer-instagram-icon").src =
    "./images/instagram-white.png";
  document.querySelector("#footer-facebook-icon").src =
    "./images/facebook-white.png";
  document.querySelector("#footer-twitter-icon").src =
    "./images/twitter-white.png";
});

const $stylesE = document.querySelector("#styles-e");
$stylesE.addEventListener("click", () => {
  document.querySelector("#styles").href = "css/styles-e.css";
  document.querySelector("#styles-a").className = "";
  document.querySelector("#styles-b").className = "";
  document.querySelector("#styles-c").className = "";
  document.querySelector("#styles-d").className = "";
  document.querySelector("#styles-e").className = "active";
  document.querySelector("#google-chrome-logo").src =
    "./images/google-chrome-white.png";
  document.querySelector("#visual-studio-code-logo").src =
    "./images/visual-studio-code-white.png";
  document.querySelector("#figma-logo").src = "./images/figma-white.png";
  document.querySelector("#github-logo").src = "./images/github-white.png";
  document.querySelector("#footer-instagram-icon").src =
    "./images/instagram.png";
  document.querySelector("#footer-facebook-icon").src = "./images/facebook.png";
  document.querySelector("#footer-twitter-icon").src = "./images/twitter.png";
});
