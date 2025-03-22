// // SLIDESHOW START
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "flex";
//   dots[slideIndex-1].className += " active";
// } 





// COLLAPSIBLE START
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active_col"); // changed class from "active"to "active_col" to avoid affecting slideshow styling
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function testFunction() {
  var test = document.getElementById("myLinks");
  if (test.style.display == "" || test.style.display == "none") {
    // alert("if")
    test.style.display = "block";
    // alert(test.style.display)
  } else if (test.style.display == "block") {
    // alert("else")
    test.style.display = "none";  
    // alert(test.style.display)
  }
  // var x = document.getElementById("test");
  // if (x.style.display === "" || "none") {
  //   console.log(x.style.display);
  //   alert("executes if: style is equal to e or n, setting to b");
  //   x.style.display = "block";
  // } 
  // else if (x.style.display === "block") {
  //   console.log(x.style.display);
  //   alert("executes else: style is equal to block, setting to n");
  //   x.style.display = "none";
  // }
} 


