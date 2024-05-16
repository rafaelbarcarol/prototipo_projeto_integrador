$(document).ready(function () {
  openForm();
  closeForm();
});

function openForm() {
  $(".js-open-form").on("click", function () {
    $(".js-form").addClass("active");
    $(".js-layer").addClass("active");
  });
}

function closeForm() {
  $(".js-close-form").on("click", function () {
    $(".js-form").removeClass("active");
    $(".js-layer").removeClass("active");
  });
}
