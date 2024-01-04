
var slidePos = 0;
var sliderDiv = document.getElementById("slider");
var slides = document.getElementById("slider").getElementsByTagName('li');
var amountOfSlides = document.getElementById("slider").getElementsByTagName('li').length;
var amountOfSlidesPerc = amountOfSlides * 100;

var calcSlideWidth = function(){
   sliderDiv.style = "width:"+ 100*amountOfSlides +"%";
   slideWidth = 100/amountOfSlides;
   var mySlides = document.getElementById("slider").getElementsByClassName('slide');
   for(let i = 0; i < amountOfSlides; i++ ){
     mySlides[i].style = " width:"+ slideWidth +"%";
   }
}

var checkButtons = function(pos, posLimit){
	if (pos > 0){
		document.getElementById("prev-btn").classList.remove("inactive-btn");
	}else if (pos == 0 ){
		document.getElementById("prev-btn").classList.add("inactive-btn");
	}
	if (pos < (posLimit - 100) ){
		document.getElementById("next-btn").classList.remove("inactive-btn");
	}else if (pos >= (posLimit - 100) ){
		document.getElementById("next-btn").classList.add("inactive-btn");
	}
}

var nextSlide = function(){
  if(slidePos < ((amountOfSlidesPerc - (amountOfSlidesPerc/amountOfSlides) ) )){
     slidePos = slidePos + (amountOfSlidesPerc/amountOfSlides);
     sliderDiv.style = "width:"+ 100*amountOfSlides +"%; left: -"+slidePos+"%";
  }
  checkButtons(slidePos, amountOfSlidesPerc);
  return slidePos;
}

var prevSlide = function(){
  if(slidePos > 0){
     slidePos = slidePos - (amountOfSlidesPerc/amountOfSlides);
     console.log(slidePos);
     sliderDiv.style ="width:"+ 100*amountOfSlides +"%; left: -"+slidePos+"%";
  }
  checkButtons(slidePos, amountOfSlidesPerc);
  return slidePos;
}

var hideLoader = function(){
  document.getElementById("preloader").classList.add("hide");
}



window.onload  = function(){
  calcSlideWidth();
  setTimeout(function(){
    hideLoader();
  }, 500);
}
