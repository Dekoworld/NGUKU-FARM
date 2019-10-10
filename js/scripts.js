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
$('#contactus-form').bind('submit', function(event) {

  event.preventDefault(); //prevent page refresh

  var name  = $('[name="fist-name"]').val();//get name field value
  var email = $('[name="email"]').val();//get email field value
  var message = $('[name="message"]').val();//get email field value
  var url =   "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?"
            +  "apikey=509f1576565b913cce3554b7c756d303-us20&id=3563379fa3"//API KEY  
            +  "&email[email]=" + email //email address registering
            +  "&merge_vars[NAME]=" + name //name we're registering
            +  "&merge_vars[MESSAGE]=" + message//message
            +  "&double_optin=true" //add to list even if email is invalid
            +  "&send_welcome=true"; //send an email notification to new subscriber
  $.ajax({
      type: "POST",
      url: url,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',

      success: function(data) {
        $('#contactus-form').html(name + " we have received your message. Thank you fro reaching out to us.");
        alert("success");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      }
  });  //End of ajax
  alert(name + " we have received your message. Thank you fro reaching out to us.")
});  //End of click bind
  