$(".icon").click(function () {
  $("#category").slideToggle();
});
// $(document).on("click", function (event) {
//   $trigger = $("#category");
//   if ($trigger !== event.target && !$trigger.has(event.target).length) {
//     $trigger.slideUp();
//   }
// });

$("#top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});


