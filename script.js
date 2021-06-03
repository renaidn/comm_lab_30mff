// 
// FOR CATS IRIS MOVEMENT ON INDEX PAGE
// 
var iris = document.getElementsByClassName("iris");

document.onmousemove = function(){
  var xScreen = window.innerWidth;  //web screen width
  var yScreen = window.innerHeight; //web screen height

  var x = event.clientX * 100 / xScreen + "%"; //mouse coursor horizontal coordinate
  var y = event.clientY * 100 / yScreen + "%"; //mouse coursor vertical coordinate

  //move both irises
  for(var i=0;i<2;i++){
    iris[i].style.left = x; //change the x coordinate of irises in css
    iris[i].style.top = y; //change the y coordinate of irises in css
    iris[i].style.transform = "translate(-"+x+",-"+y+")"; //move
  }
}
// 
//  SHOW SYNOPSIS BUTTON
// 
function showSynopsis() {
  var synoBody = document.getElementById("synopsis-container");
  var synoFooter = document.getElementById("footer-film");

  //show synopsis container
  //if synopsis is not displayed, change element display setting to block (in css)
  if (synoBody.style.display == "none") {
    synoBody.style.display = "block";
    synoFooter.style.display = "block"; //footer gives a distance between the container and the bottom of the page
    window.scrollTo(0,document.body.scrollHeight); //scroll to the bottom
  }
  //hide synopsis container
  else {
    synoBody.style.display = "none";
    synoFooter.style.display = "none";
    window.scrollTo(0, 0); //scroll to the top 
  }
}
// 
//  SNOW 'MORE REVIEWS' BUTTON
// 
function showMoreReviews() {
  alert("Oops! This button is just for decorations. We don't have any more reviews...") //display alert window if button is clicked
}
// 
//  CHANGE LOGO PICTURE ON HOVER
// 
var logo = document.getElementById("logo");
logo.onmousemove= function() {logoHoverOn()};
logo.onmouseout = function() {logoHoverOff()};

//show a reversed colors logo if mouse hovers the logo by changing element image source
function logoHoverOn() {
  logo.src = "images/logo-hover.png"; 
}
//if no hover over the logo, show the usual logo
function logoHoverOff() {
  logo.src = "images/logo.png";
}
// 
//  LOAD RATING BARS
// 
var ratPositive = document.getElementById("rating-positive");
var ratMixed = document.getElementById("rating-mixed");
var ratNegative = document.getElementById("rating-negative");
var loaded = 0; //initial bar fullness

function ratingBarLoad() {
  //when the review page is just opened
  if (loaded == 0) {
    //initial bars settings
    loaded = 1;
    var widthPos = 0;
    var widthMix = 0;
    var widthNeg = 0;
    var time = setInterval (frame, 25); //speed with which the bars are filled up
    function frame() {
      //if everything filled to its max allowed width - stop loading
      if (widthPos == 60 && widthMix == 35 && widthNeg == 5) {
        clearInterval (time);
        i = 0;
      }
      //if every bar but positive reviews one is not filled to its max - continue increasing its width
      else if (widthPos < 60 && widthMix == 35 && widthNeg == 5) {
        widthPos++;
        ratPositive.style.width = widthPos + "%";
      }
      //if only negative reviews bar is filled to its max - continue increasing the widths of other two
      else if (widthPos < 60 && widthMix < 35 && widthNeg == 5) {
        widthPos++;
        widthMix++;
        ratPositive.style.width = widthPos + "%";
        ratMixed.style.width = widthMix + "%";
      }
      //if none of the bars are loaded to their max width - increase the width of every bar
      else if (widthPos < 60 && widthMix < 35 && widthNeg < 5) {
        widthPos++;
        widthMix++;
        widthNeg++;
        ratPositive.style.width = widthPos + "%";
        ratMixed.style.width = widthMix + "%";
        ratNegative.style.width = widthNeg + "%";
      }
    }
  } 
}
// 
// OPEN MODAL WINDOW IF IMAGE IN GALLERY PAGE IS CLICKED
// 
var modalWindow = document.getElementById("modal-window");

//show the modal window by changing its display settings (triggered by image click)
function loadImageFromGallery(n) {
  modalWindow.style.display = "block";
}

//close the modal window if user clicked outside of the image container by changing its display settings
window.onclick = function(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}

//introduce the variable in charge of the number of the image
var imageNum;

//call the function that shows the image pressed on
viewLightbox(imageNum);

//show the next image by decreasing(-1) or indenting (1) the image number by the number given as a function argument
function viewNextImg(n) {
  viewLightbox(imageNum += n);
}

//show the current image by setting it to the number given in function argument
function currentImg(n) {
  viewLightbox(imageNum = n);
}

//function that shows the images
function viewLightbox(n) {
  var i;
  var lightboxImg = document.getElementsByClassName("lightbox");

  //making lightbox circular (no end)

  //if viewNextImg(n) function gets to the last image and is called to show the next one
  if (n > lightboxImg.length) {
    imageNum = 1 //show the first image
  }
  //if viewNextImg(n) function gets to the first image and is called to show the previous one
  if (n < 1) {
    imageNum = lightboxImg.length //show the last image
  }
  //don't display the images other than the one called for by changing their display settings
  for (i = 0; i < lightboxImg.length; i++) {
    lightboxImg[i].style.display = "none";
  }
  //display the image called for by changing its display setting
  lightboxImg[imageNum-1].style.display = "block";
}
//
//  SHOW MOBILE MENU WHEN SCREEN WIDTH < 970PX
//
function showMobileMenu() { //function that shows the mobile navigation
  var mobileMenu = document.getElementById("menu-mobile");
  var navIcon = document.getElementById("nav-icon");

  //if dropdown navigation bars are shown (triggered by navigation icon click)
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none"; //hide the dropdown navigation bars
    navIcon.style.transform = "rotate(0deg)"; //return navigation icon to its original position
  }
  else {
    mobileMenu.style.display = "block"; //show the dropdown navigation bars
    navIcon.style.transform = "rotate(90deg)"; //rotate the navigation icon by 90degrees
  }
}