$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},0);
  });
});

function getCopyright(){
    var date = new Date();
    var currentYear = date.getFullYear();
    var companyName = "Ameya Mohape";
    var cp = "&copy; Copyright "+ currentYear + ", " + companyName;
    document.getElementById("copyright").innerHTML = cp;
}