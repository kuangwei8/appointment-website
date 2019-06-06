$(document).ready(function() {
  $("form#appointment").submit(function(event) {

    var nameInput = $("input#addname").val();
    var detailInput = $("input#adddetail").val();
    var dateInput= $("input#adddate").val();
    var startInput = $("input#starttime").val();
    var endInput = $("input#endtime").val();

    $(".addname").text(nameInput);
    $(".adddetail").text(detailInput);
    $(".adddate").text(dateInput);
    $(".starttime").text(startInput);
    $(".endtime").text(endInput);
    $("#message").show();

    event.preventDefault();


  });
});
