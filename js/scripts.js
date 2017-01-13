
$(function() {
  $("form").submit(function() {
    var selected1 = $('#question1 option:selected').val();
    var selected2 = $('#question2 option:selected').val();
    var selected3 = $('#question3 option:selected').val();
    var selected4 = $('#question4 option:selected').val();
    var selected5 = $('#question5 option:selected').val();
    var selected6 = $('#question6 option:selected').val();

    if ($('option:selected').val() === "selected") {
      var result = "Please complete the questions to see your recommended language.";
    } else if (selected4 === "c#" || selected5 === "c#" && selected6 !== "design") {
      var result = "You should be a C#/.NET developer!";
    } else if (selected1 === "ruby" || selected2 === "ruby" || selected5 === "ruby" && selected6 !== "design") {
      var result = "You should be a Ruby/Rails developer!";
    } else if (selected1 === "java" && selected6 !== "design") {
      var result = "You should be a Java/Android developer!";
    } else if (selected3 === "php" && selected6 !== "design") {
      var result = "You should be a PHP/Drupal developer!";
    } else if (selected6 === "design") {
      var result = "You should study CSS/Design!";
    } else if (selected6 === "x" && selected5 === "x" && selected4 === "x" && selected3 === "x" && selected2 === "x" && selected1 === "x") {
      var result = "Maybe this isn't for you!";
    }
    $("#output").text(result);
    event.preventDefault();
  });
});
