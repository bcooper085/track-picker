
$(function() {
  $("form").submit(function() {

    if ( $('#answer1 option:selected').val() === "c#" ) {
      var result = "You should be a C# developer!";
    } else if ( $('#answer1 option:selected').val() === "ruby" ) {
      var result = "You should be a Java developer!";
    } else if ( $('#answer1 option:selected').val() === "java" ) {
      var result = "You should be a Ruby developer!";
    } else if ( $('#answer1 option:selected').val() === "php" ) {
      var result = "You should be a PHP developer!";
    } else {
      var result = "Please complete the questions to see your recommended language."
    }
    $("#output").text(result);
    event.preventDefault();
  });
});
