var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
$(document).ready(function(){
    $(".design-c").click(function(){
      $("#design-image").toggle()
      $("#design-para").toggle()
    });
    $(".devpt-c").click(function(){
      $("#devpt-image").toggle();
      $("#devpt-para").toggle();
    });
  
    $(".prdt-c").click(function(){
      $("#prdt-image").toggle();
      $("#prdt-para").toggle();
    });
    // $(document).ready(function(){
//     $("#btn-login").click(function(){
//         $("#form-popup").show();
// });
// });
// $(document).ready(function(){
//     $("#btn-signin").click(function(){
//         $("#form-popup2").show();
// });
  