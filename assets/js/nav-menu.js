const siteLinks = [
  {
    name : "Home", 
    href : "index.html"
  },
  {
    name : "Websites" ,
    href : "projects.html?websites"
  },
  {
    name : "Landing Pages", 
    href : "projects.html?landing-pages"
  },
  {
    name : "Scripts" ,
    href : "projects.html?scripts"
  },
  {
    name : "Games" ,
    href : "projects.html?games"
  },
  {
    name : "About" ,
    href : "about-me.html"
  }
];

function menuLinkHtml(href, name){
  html = `<li><a href="${href}">${name}</a></li>`;
  return html;
}

function createMenu(){
  const menuContainer = document.querySelector(".site-navigation-links ul");
  let htmlLinks = "";
  for( link of siteLinks){
    htmlLinks += menuLinkHtml(link.href, link.name);
  }
  menuContainer.innerHTML = htmlLinks;
}

createMenu();


//toggleMenu

function toggleMenu(btn){
  target = btn.getAttribute("data-target");
  ele = document.querySelector(target);
  ariaValue = ele.getAttribute("aria-hidden");
  if(ariaValue == "false"){
    ele.setAttribute("aria-hidden","true");
  }else{
    ele.setAttribute("aria-hidden","false");
  }
  console.log("clicked");
}


const openMenuBtn = document.querySelector(".open-menu-button");
const closeMenuBtn = document.querySelector(".close-menu-button");

const toggleMenuBtns = [openMenuBtn,closeMenuBtn];

for(toggleMenuBtn of toggleMenuBtns ){
  toggleMenuBtn.addEventListener("click", function(){
    toggleMenu(this);
  })
}
