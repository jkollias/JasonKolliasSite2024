


function addProjectLinks(liveLink, gitLink) {
  let html = "";
  if (liveLink) {
    html +=`<a class="live-link" target="_blank" href="${liveLink}">View The Live Project</a>`;
  }
  if (gitLink) {
    html +=
      `<a class="git-link" target="_blank" href="${gitLink}">View The Live Project</a>`;
  }
  return html;
}

function listCredits(credits){
  let html =""; 
  html = "<ul class=`credit-lists`>";
  for(credit of credits){ 
    html += `<li>
          <strong>${credit.name}</strong><br>
          <em>${credit.role}</em><br>
          <a href="${credit.site_link}" target="_blank"><em>${credit.site_link}</em></a>
        
    </li>`;
  }
  html += "</ul>";
  return html;
}
 
function projectDetailFeatures(features){
  let html;
  console.log(features);
  if(features){
    html +=`<div class="project-feature"><h2>Features</h2>
    ${features}
    </div>`;
  }else{
    html = "hello";
  }
  return html;
}

function projectDetailCredits(credits){
  let html = ""; 
  if(credits){
    html += `<div class="project-credits">
             <h3>Credits</h3>`
    html += listCredits(credits);
    html += `</div>`;
  } 
  return html;
}


function addProjectHTML(p) {
  let projectLinks = addProjectLinks(p.live_link, p.github_link);
  console.log(p);
  console.log(p.credits);
  //let projectCredits = listCredits(p.credits);  
  let html = `<div class="project-title"><h2 class="project-title--heading">${p.name}</h2></div>
      <div class="project-hero-image">
        <picture srcset="">
          <img src="assets/img/projects/${p.hero_image_url}" alt="${p.name} Hero Image">
        </picture> 
      </div>`;

  html += `<section class="project-links--container">${projectLinks}</section>`;

  html += `<section class="project-description" aria-hidden="true">
        <button class="view-description--btn">
          <i class="left-arrow-icon "></i> 
          <span class="screen-reader-text">View Project Description</span>
        </button>
        <section class="project-description--text">
          <div class="project-description--title"><h2>Description</h2></div>
          <div class="project-description--blurb">${p.description}</div>
        `;

  //html += projectDetailFeatures(p.features);
  html += projectDetailCredits(p.credits);

  html += `</section>
  </section>`;    

  return html;
}

function switchLeftAndRightArrows(){
  let viewDescriptionBtnIcon = document.querySelector(".view-description--btn i");
  if(viewDescriptionBtnIcon.classList.contains("left-arrow-icon")){
    viewDescriptionBtnIcon.classList.remove("left-arrow-icon");
    viewDescriptionBtnIcon.classList.add("right-arrow-icon");
  }else{
    viewDescriptionBtnIcon.classList.add("left-arrow-icon");
    viewDescriptionBtnIcon.classList.remove("right-arrow-icon");
  }
}

function toggleElementAriaHidden(element){ 
  let ele = document.querySelector(element); 
  if(ele.getAttribute("aria-hidden") == "true"){
    ele.setAttribute("aria-hidden","false");
  }else{
    ele.setAttribute("aria-hidden","true");
  }
}

function addToggleProjectDescriptionBtnEvent(){
  descriptionBtn = document.querySelector('.view-description--btn');
  descriptionBtn.addEventListener("click", function(){
    switchLeftAndRightArrows();
    toggleElementAriaHidden('.project-description');
  });
}

function addCloseProjectDetailBtnEvent(){
  let closeProjectDetailBtn = document.querySelector('.close-project-detail--btn');
  closeProjectDetailBtn.addEventListener("click", function(){
    toggleElementAriaHidden(".project-detail--container");
  });
}

const projectDetail = document.querySelector(".project-detail");

function addShowProjectDetailBtnEvents(){
  let btns = document.querySelectorAll('.show-project--btn');
  for(btn of btns){
    btn.addEventListener("click", function(){  
      toggleElementAriaHidden(".project-detail--container");
      let index = this.getAttribute("data-project-index");
      console.log(index); 
      projectDetail.innerHTML = addProjectHTML(projects[index]);
      addToggleProjectDescriptionBtnEvent();
    })
  }
  
}

//projectDetail.innerHTML = addProjectHTML(projects[index]);

window.addEventListener("load", function () {
  addShowProjectDetailBtnEvents();
  addCloseProjectDetailBtnEvent(); 
  // addToggleProjectDescriptionBtnEvent();
});


