
const dynamicData = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];
// var requestURL = '../../data.json';
// const request = new XMLHttpRequest();
// 
// request.open('GET', requestURL);
// request.responseType = "text";
// request.send();
// 
// request.onload = function(){
//     placeJobs()
// }

placeJobs()
// place all available jobs in the data.json file
function placeJobs(){
    // for(child of JSON.parse(dynamicData)){
    for(child of dynamicData) {
      console.log(child)
      // devide string to instead of trying to insert pieces of HTML
        let newHtml = `<div class="job-cont">
        <div class="info-cont">
          <div class="logo">
            <img src="${child.logo}" alt="logo">
          </div>
          <div class="info-block">
            <div class="upper-cont">
              <p class="company">${child.company}</p>`;
      // if job is new add this html block
        if(child.new){
            newHtml += `<div class="new">new!</div>`;
        }
      // if job is featured add this html block
        if(child.featured){
            newHtml += `
                <div class="featured-line"></div>
                <div class="featured">featured</div>`;
        }   
        newHtml += `
            </div>
            <div class="middle-cont">
              <p class="position">${child.position}</p>
            </div>
            <div class="bottom-cont">
              <p class="postedAt">${child.postedAt}</p>
              <div class="devider"></div>
              <p class="contract">${child.contract}</p>
              <div class="devider"></div>
              <p class="location">${child.location}</p>
            </div>
          </div>
        </div>
        <hr style="display: none;">
        <div class="tag-cont">
          <div onclick="sortBy('tag${child.role}')" class="tag tag${child.role}">${child.role}</div>
          <div onclick="sortBy('tag${child.level}')" class="tag tag${child.level}">${child.level}</div>`;
      // add all tools necessary for the job as tags
        for(tool of child.tools){
            newHtml += `<div onclick="sortBy('tag${tool}')" class="tag tag${tool}">${tool}</div>`;
        };
      // add all languages necessary for the job as tags
        for(language of child.languages){
            newHtml += `<div onclick="sortBy('tag${language}')" class="tag tag${language}">${language}</div>`;
        };
        newHtml += `</div></div>`;
      document.querySelector(".main-cont").innerHTML += newHtml;
    };
}


// delete particular tag in sorting tags
function deleteSortTag(tag){
    let tagToDelete = document.querySelector(`.${tag}`);
    tagToDelete.remove();
    sortingTags.pop(sortingTags.indexOf(tagToDelete));
    sortJobs()
}

// array to keep track of tags later
var sortingTags = [];
function sortBy(tag){
  document.querySelector(".sort-tags").style.display = 'flex';
  // if the tag is new
  console.log(sortingTags)
    if(!sortingTags.includes(tag)){
        // add new sorting tag to an array
        sortingTags.push(tag)
        var sortingTagParent = document.querySelector(".tags");
        // clean up the parent to replace all children
        sortingTagParent.innerHTML = '';
        // place all active tags to sort
        for(sortTag of sortingTags){
          // define new tag and add it to the 
          // end of the parent  
            let newTag = `<div class="sortTag sortTag${sortTag.slice(3)}">
              <p>${sortTag.slice(3)}</p>
              <div onclick="deleteSortTag('sortTag${sortTag.slice(3)}')" class="tag-cross">
                <span></span>
                <span></span>
              </div>
            </div>`;
            sortingTagParent.innerHTML += newTag; 
        }
    }
    sortJobs()
}

function sortJobs(){
  var jobs = Array.from(document.querySelectorAll(".job-cont"));
  for(job of jobs){
    job.style.display = "none";
  }
  for(job of jobs){
    var myVar = 1;
    for(tag of sortingTags){
      if(!job.innerHTML.includes(tag)){
        myVar *= -1
        break
      }
    }
    if(myVar > 0){
      job.style.display = 'flex';
    }
  }
}

// remove all tags
function clearSortingTags(){
  var jobs = Array.from(document.querySelectorAll(".job-cont"));
  for(job of jobs){
    job.style.display = "flex";
  }
  document.querySelector(".sort-tags").style.display = 'none';
  var sortingTagParent = document.querySelector(".tags");
  sortingTagParent.innerHTML = '';
  sortingTags = [];
}
