
/* Menu Js */

const openNavBtnSelector = ".open-menu-button"; 
const closeNavBtnSelector = ".close-menu-button";

const ariaHiddenElements = [openNavBtnSelector,closeNavBtnSelector];


function disableBrowserScroll(){
  document.querySelector("body").classList.toggle("disable-browser-scroll");
}


function adaToggleMenu(btn){ 
  const target = btn.getAttribute("data-target");  
  const navWrapper = document.querySelector(target);
  const ariaStatus = navWrapper.getAttribute("aria-hidden");
  if(ariaStatus == null || ariaStatus == "true"){
  	navWrapper.setAttribute("aria-hidden","false");
  }else{
    navWrapper.setAttribute("aria-hidden","true");
  }
  console.log(target);
}

for( let ariaHiddenElement of ariaHiddenElements){
	document.querySelector(ariaHiddenElement).addEventListener(
    "click",
		function(){
      disableBrowserScroll();
			adaToggleMenu(this);
		}
	)
};

 




