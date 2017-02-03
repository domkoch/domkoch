
$(function(){
  $("#search-user").on("keyup", function(e){
    let username = e.target.value;

    $("#username-output").html(` ${username}`);
  });
  $(".learn").on("click", function(){
    $(".wrapper").toggleClass("hide")
  });  

  $(window).scroll(function(){    
    if ($(document).scrollTop() > 480) {
      $(".navbar-brand").animate({
      "width": "0px",
    },{
      "complete": function(){
        $(".navbar-brand").html("")
      }        
      });
      $(".nav-logo").addClass("logo-on")
  
    } 
    else if ($(document).scrollTop() < 480) {
     $(".navbar-brand").animate({
      "width": "150px",
    },{
      "complete": function(){
        $(".navbar-brand").html("Project name")
      }        
      });
      $(".nav-logo").removeClass("logo-on")
    }
 });  
 $(".yes").on('click', function(){
  user = true
  test();
 });
 $(".no").on('click', function(){
   user = false
   test();
 });
});
let user = "";
function test() {

let gre = (user == true) ? "Yes" : "No"

console.log(gre)
console.log(user)

}

console.log(user)


