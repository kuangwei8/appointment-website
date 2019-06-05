$(document).ready(function() {
    $("form#appointment").submit(function(event){
      alert('Got to beginning of form submit!');
        var blanks = ["addname", "adddetail","adddate","starttime", "endtime"]

    blanks.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#output").show();
  });
});
