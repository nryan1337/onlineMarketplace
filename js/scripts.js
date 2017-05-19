$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    var nameInput = $("#name").val();
    var addressInput = $("#address").val();
    var orderInput = $("#jewelery").val();

    $("#receipt").show();

    $("#nameOut").text(nameInput);
    $("#addressOut").text(addressInput);
    $("#itemOut").text(orderInput);

    event.preventDefault();
  });

});
