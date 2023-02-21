const $detailsList = document.querySelectorAll("details");
$detailsList.forEach(($details) => {
  $details.addEventListener("click", (e) => {
    $detailsList.forEach(($details) => {
      $details.removeAttribute("open");
    });
  });
});
