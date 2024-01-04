// Filter Js
// Create Catalog


// Filter Menu

var projects = json.projects;

const filterTabs = [];
 
function pushTypesToFilterArray(){
  for (project of projects){
    if(!filterTabs.includes(project.type)){ 
      filterTabs.push(project.type); 
    } 
  }  
}

function createFilterTabs(){
  let i = 0;
  for(filterTab in filterTabs){
    let button = document.createElement("button");
    button.classList.add("filter-tab--btn");
    button.innerHTML = `<span>${filterTabs[i]}</span>`;
    
    let filter = document.querySelector(".projects-filter");
    filter.appendChild(button);
    i++;
  }  
}

pushTypesToFilterArray();
createFilterTabs();

// Create Catalog

const projectsGrid = document.querySelector(".projects-grid");

function checkImage(url){
  if(!url){
    return "https://via.placeholder.com/800x800.jpg?text=Placeholder%20Image";
  } else{
    return "assets/img/projects/"+url;
  }
}

function projectGridHTML(p, i){
  let url = checkImage(p.catalog_image_url);
  let html = `
    <button class="show-project--btn" 
      data-name="${p.name}"
      data-project-index="${i}"
    >
      <div class="project-catalog-image"><img src="${url}" alt="${p.name} Catalog Image"></div>
      <div class="project-catalog-name">${p.name}</div>
      <div>View Project</div>
    </button>`;
  return html;
}

function addProjectsGridItem(p, i){
  let div = document.createElement("div");
  div.classList.add("grid-item");
  div.innerHTML = projectGridHTML(p, i);
  projectsGrid.appendChild(div);
}


function createCategoryProjects(){ 
  let i = 0;
  for (project of projects){
    addProjectsGridItem(project, i);
    ++i;
  } 
}

createCategoryProjects();