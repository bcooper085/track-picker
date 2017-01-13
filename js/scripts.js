
$(function() {
  $("form").submit(function() {
    var selected1 = $('#question1 option:selected');
    var selected2 = $('#question2 option:selected');
    var selected3 = $('#question3 option:selected');
    var selected4 = $('#question4 option:selected');
    var selected5 = $('#question5 option:selected');
    if (selected1.val() === "c#" || selected4.val() === "c#") {
      var result = "You should be a C#/.NET developer!";
    } else if (selected1.val() === "ruby" || selected5.val() === "ruby" ) {
      var result = "You should be a Ruby/Rails developer!";
    } else if (selected1.val() === "java" || selected2.val() === "java") {
      var result = "You should be a Java/Android developer!";
    } else if (selected1.val() === "php" || selected3.val() === "php") {
      var result = "You should be a PHP/Drupal developer!";
    } else if (selected1.val() === "design" || selected6.val() === "design") {
      var result = "You should study CSS/Design!";
    } else if (selected1.val() === "x" ) {
      var result = "Maybe this isn't for you!";
    } else {
      var result = "Please complete the questions to see your recommended language."
    }
    $("#output").text(result);
    event.preventDefault();
  });
});
