// JavaScript Document

/*Taken from W3 Schools*/	
/*JavaScript for Tab Menu*/
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
	
}
 document.getElementById("defaultOpen").click();
	
	
/*Taken from W3 Schools*/
/*Javascript for image gallery*/
	
var slideIndex = 1;
showSildes(slideIndex);

//Previous/Next controls	
function plusSlide(n) {
	showSlides(slideIndex += n);	
}
	
function currentSlide(n) {
	showSlides(slideIndex = n);
}	
	
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("galley");
	var dots = document.getElementById("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex.length}
	for (i=0; i<dots.length;i++) {
		slides[i].style.display = "none";
	}
	
	for (i=0;i<dots.length;i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += "active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}
		

