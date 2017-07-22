
// Create the reservation
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newReservaion = {
    name: $("#name").val().trim(),
    phone_number: $("#phone_number").val().trim(),
    email: $("#email").val().trim(),
    res_name: $("#res_name").val().trim()
  };

  // post the reservation
  $.post("/api/new", newReservation)
  .done(function(data) {
    console.log(data);
    alert("Adding reservation...");
  });
});
 