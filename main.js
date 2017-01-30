$(function(){
  $("#search-user").on("keyup", function(e){
    let username = e.target.value;

    $("#username-output").html(` ${username}`);
  });
  $(".learn").on("click", function(){
    $(".wrapper").toggleClass("hide")
  });
});
