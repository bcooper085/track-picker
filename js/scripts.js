var result; 


$(function() {
  $("form").submit(function() {

    $("#output").text(result);
    event.preventDefault();
  });
});
