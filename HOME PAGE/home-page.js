document.getElementById("tmg").style.opacity = "1.0";
document.getElementById("demo").style.opacity = "1.0";
document.getElementById("title").style.opacity = "1.0";
window.onload = myFunction();
function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "User");
  if (person == "" || person == null) {
    txt = "Welcome User";
  } else {
    txt = "Welcome " + person;
  }
  if (person == "Tobi007") {
    txt = "Welcome Creator";
  }
  document.getElementById("demo").innerHTML = txt;
}

function lightMode() {
  var toggleItems = document.querySelectorAll(
    "#hidden-navigator-panel,#hidden-navigator-panel li,#hidden-navigator-panel p a,#hidden-navigator-panel li a,#hidden-navigator-panel p,#moving-word,#navigator,#top-box,.navigate,#toggle,#toggle-ball,body,h3,#left-arrow,#right-arrow,#search-menu,#Search,.search-icon,#x-search-menu,.search-lines,.search-lines a,.search-footer a,#no-search-result,#no-search-result h2,#no-search-result p,.search-footer,#search-error,.panels a p,#about-site,#about-site a,.footer-text p,.bullet,footer pre,#cancel-menu,.hidden-r-panel,.hidden-r-panel a p,.hidden-r-panel-about-header,.hidden-r-panel-about-text,.hide,.worthy",
  );
  console.log(toggleItems);
  for (var i = 0; i < toggleItems.length; i++) {
    toggleItems[i].classList.toggle("light");
    var lightItems = document.getElementsByClassName("light");
    if (lightItems.length >= 1) {
      document.getElementById("themes-phrase").innerHTML = "Toggle Dark Mode";
    } else {
      document.getElementById("themes-phrase").innerHTML = "Toggle Light Mode";
    }
  }
}

var mousedownCounter = 0;
const header = document.getElementById("title");
const movingPictures = document.querySelectorAll(".moving-picture");
const movingImages = document.querySelectorAll(".moving-picture-image");
const movingVideos = document.querySelectorAll(".moving-picture-video");
const previewButtons = document.querySelectorAll(".preview-button");
const endPreviewButtons = document.querySelectorAll(".end-preview-button");
const watchTrailerButtons = document.querySelectorAll(".watch-trailer-buttons");
const movingLine = document.querySelector(".moving-line");
const movingTitles = document.querySelectorAll(".moving-picture-title");
const movingAbouts = document.querySelectorAll(".moving-picture-about");
const movingButtons = document.querySelectorAll(".moving-picture-button");
const movingLinks = document.querySelectorAll(".moving-picture-link");
function playTrailer(i) {
  watchTrailerButtons[i].style.display = "none";
  mousedownCounter++;
  header.style.opacity = "0";
  movingLine.style.display = "none";
  if (mousedownCounter == 1) {
    previewButtons[i].style.display = "block";
  }
  endPreviewButtons[i].style.display = "block";
  movingVideos[i].style.height = "100%";
  movingVideos[i].play();
  movingTitles[i].classList.add("trailer");
  movingAbouts[i].classList.add("trailer");
  movingButtons[i].classList.add("trailer");
  movingPictures[i].classList.add("trailer");
  movingVideos[i].classList.add("trailer");
  movingLinks[i].classList.add("trailer");
  endPreviewButtons[i].classList.add("trailer");
  previewButtons[i].classList.add("trailer");
  LeftArrow.style.display = "none";
  RightArrow.style.display = "none";
}

function reversePlayTrailer(x) {
  watchTrailerButtons[x].style.display = "block";
  mousedownCounter = 0;
  header.style.opacity = "1.0";
  movingLine.style.display = "block";
  previewButtons[x].style.display = "none";
  endPreviewButtons[x].style.display = "none";
  movingVideos[x].style.height = "0%";
  movingVideos[x].pause();
  movingTitles[x].classList.remove("trailer");
  movingAbouts[x].classList.remove("trailer");
  movingButtons[x].classList.remove("trailer");
  movingPictures[x].classList.remove("trailer");
  movingVideos[x].classList.remove("trailer");
  movingLinks[x].classList.remove("trailer");
  previewButtons[x].classList.remove("trailer");
  endPreviewButtons[x].classList.remove("trailer");
  if (movingPictures[x].computedStyleMap().get("transform")[0].x.value == 0) {
    document.getElementById("left-arrow").style.display = "none";
  } else {
    document.getElementById("left-arrow").style.display = "block";
  }
  if (
    movingPictures[x].computedStyleMap().get("transform")[0].x.value == -4600
  ) {
    document.getElementById("right-arrow").style.display = "none";
  } else {
    document.getElementById("right-arrow").style.display = "block";
  }
}

// movingPictures.forEach((movingPicture,i) => {
//     movingPicture.addEventListener("dblclick",() =>{
//        playTrailer(i)
//     })
// })

watchTrailerButtons.forEach((watchTrailerButton, i) => {
  watchTrailerButton.addEventListener("click", () => {
    playTrailer(i);
  });
});

var intervalID = null;
console.log(intervalID);
function intervalManager(flag, animate, time) {
  if (flag) {
    intervalID = setInterval(animate, time);
    console.log(intervalID);
  } else {
    clearInterval(intervalID);
    console.log(intervalID);
  }
}
intervalManager(true, movingFrame, 30000);

// var IntervalUtil;
// var IntervalUtil = function(functionCall, interval){

//     var intervalObj = 0;
//     var INTERVAL = interval;

//     var callback = functionCall;

//     function start(){
//         console.log('started',intervalObj)
//         if(intervalObj === 0){
//             intervalObj = setInterval(callback, INTERVAL)
//         }
//     }

//     function stop(){
//         clearInterval(intervalObj);
//         intervalObj = 0;
//         console.log('stopped', intervalObj);
//     }
// }

function movingFrame() {
  movingPictures.forEach((movingPicture, r) => {
    movingPicture.style.transform = `translateX(${
      movingPicture.computedStyleMap().get("transform")[0].x.value - 100
    }%)`;
    reversePlayTrailer(r);
    console.log(intervalID);
    if (movingPicture.computedStyleMap().get("transform")[0].x.value == -4700) {
      movingPicture.style.transform = "translateX(0)";
      document.getElementById("left-arrow").style.display = "none";
    } else {
      document.getElementById("left-arrow").style.display = "block";
    }
    if (movingPicture.computedStyleMap().get("transform")[0].x.value == -4600) {
      document.getElementById("right-arrow").style.display = "none";
    } else {
      document.getElementById("right-arrow").style.display = "block";
    }
  });
}

previewButtons.forEach((previewButton) => {
  previewButton.addEventListener("mousedown", () => {
    previewButton.style.display = "none";
    intervalManager(false, movingFrame, 30000);
    console.log(intervalID);
  });
});

endPreviewButtons.forEach((endPreviewButton, i) => {
  endPreviewButton.addEventListener("click", () => {
    reversePlayTrailer(i);
    intervalManager(true, movingFrame, 30000);
  });
});

const RightArrow = document.querySelector(".right-arrow");
const LeftArrow = document.querySelector(".left-arrow");
movingPictures.forEach((movingPicture) => {
  RightArrow.addEventListener("click", () => {
    LeftArrow.style.display = "block";
    movingPicture.style.transform = `translateX(${
      movingPicture.computedStyleMap().get("transform")[0].x.value - 100
    }%)`;
    if (
      movingPicture.computedStyleMap().get("transform")[0].x.value === -4600
    ) {
      document.getElementById("right-arrow").style.display = "none";
    }
  });
});
movingPictures.forEach((movingPicture) => {
  LeftArrow.addEventListener("click", () => {
    RightArrow.style.display = "block";
    movingPicture.style.transform = `translateX(${
      movingPicture.computedStyleMap().get("transform")[0].x.value + 100
    }%)`;
    if (movingPicture.computedStyleMap().get("transform")[0].x.value === 0) {
      document.getElementById("left-arrow").style.display = "none";
    }
  });
});

function searchMenuFunction() {
  var input, filter, ul, li, p, i;
  input = document.getElementById("my-menu-search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenuBar");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}

const search = () => {
  let input = document.getElementById("Search");
  const searchbox = document.getElementById("Search").value.toUpperCase();
  const movieitems = document.getElementById("search-menu");
  const movie = document.querySelectorAll(".search-lines");
  const mname = movieitems.getElementsByTagName("p");
  for (var n = 0; n < mname.length; n++) {
    var match = movie[n].getElementsByTagName("p")[0];
    if (match) {
      var textvalue = match.textContent || match.innerHTML;
      var resultFound;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        resultFound = true;
        movie[n].style.display = "block";
      } else {
        movie[n].style.display = "none";
      }
      if (input.value === "") {
        for (var i = 0; i < mname.length; i++) {
          movie[i].style.display = "none";
          document.getElementById("search-error").style.display = "block";
          document.getElementById("no-search-result").style.display = "none";
        }
      } else {
        document.getElementById("search-error").style.display = "none";
      }
      if (resultFound) {
        document.getElementById("no-search-result").style.display = "none";
      } else {
        document.getElementById("no-search-result").style.display = "block";
      }
    }
  }
};

function revealSearchMenu() {
  document.getElementById("initial").style.opacity = "0.9";
  document.getElementById("content-box").style.opacity = "0.9";
  document.getElementById("search").style.display = "none";
  document.getElementById("search-menu").style.display = "block";
  document.getElementById("search-error").style.display = "none";
  const movieitems = document.getElementById("search-menu");
  const movie = document.querySelectorAll(".search-lines");
  const mname = movieitems.getElementsByTagName("p");
  for (var i = 0; i < mname.length; i++) {
    movie[i].style.display = "none";
    document.getElementById("Search").focus();
  }
}

function concealSearchMenu() {
  document.getElementById("initial").style.opacity = "1";
  document.getElementById("content-box").style.opacity = "1";
  document.getElementById("search-menu").style.display = "none";
  document.getElementById("search").style.display = "block";
  document.getElementById("search-error").style.display = "none";
  document.getElementById("no-search-result").style.display = "none";
  document.getElementById("Search").value = "";
  const panels = document.querySelectorAll(".r-panel");
  for (var i = 0; i < panels.length; i++) {
    panels[i].style.display = "block";
    var hiddenPanel = document.querySelectorAll(".hidden-r-panel");
    hiddenPanel[i].style.display = "none";
  }
}

function navigatorMenuOpenFunction() {
  document.getElementById("hidden-navigator-panel").style.width = "65vw";
  document.getElementById("top-content").style.opacity = "0.35";
  document.getElementById("content-box").style.opacity = "0.35";
}
function cancelMenuFunction() {
  document.getElementById("hidden-navigator-panel").style.width = "0vw";
  document.getElementById("top-content").style.opacity = "1";
  document.getElementById("content-box").style.opacity = "1";
}

function Category(genre, genrename, nav) {
  document.getElementById("top-content").style.opacity = "1";
  document.getElementById("content-box").style.opacity = "1";
  document.getElementById("hidden-navigator-panel").style.width = "0vw";
  document.getElementById("navigator").style.display = "block";
  document.getElementById("initial").style.display = "block";
  document.getElementById("content-box").style.display = "block";
  document.getElementById("about-site").style.display = "none";
  if (genre === "home" || genrename === "home") {
    var navName = document.getElementsByClassName("navigate");
    for (var y = 0; y < navName.length; y++) {
      var navNam = navName[y];
      navNam.style.fontWeight = "lighter";
      document.getElementById("home-nav").style.fontWeight = "bold";
    }
    document.getElementById("home-nav").style.fontWeight = "bold";
    document.getElementById("top-content").style.opacity = "1";
    document.getElementById("content-box").style.opacity = "1";
    document.getElementById("hidden-navigator-panel").style.width = "0vw";
    document.getElementById("navigator").style.display = "block";
    document.getElementById("initial").style.display = "block";
    document.getElementById("content-box").style.display = "block";
    document.getElementById("about-site").style.display = "none";
    var categories = document.querySelectorAll(
      "#recently-addeds,#actions,#adventures,#comedies,#families,#fantasies,#gores,#horrors,#musicals,#nollywoods,#romances,#sci-fis,#thrillers",
    );
    console.log(categories);
    var categoryNames = document.querySelectorAll(
      "#recently-added,#action,#adventure,#comedy,#family,#fantasy,#gore,#horror,#musical,#nollywood,#romance,#sci-fi,#thriller",
    );
    console.log(categoryNames);
    var i;
    for (i = 0; i < categories.length; i++) {
      var type = categories[i];
      var typeName = categoryNames[i];
      type.style.display = "none";
      typeName.style.display = "none";
      type.style.display = "flex";
      type.style.flexFlow = "row nowrap";
      type.style.overflowX = "scroll";
      typeName.style.display = "block";
    }
    var navcategories = document.querySelectorAll(
      "#animes,#cartoon,#movie,#serie",
    );
    var navcategoryNames = document.querySelectorAll(
      "#anime,#cartoons,#movies,#series",
    );
    for (i = 0; i < navcategories.length; i++) {
      var type = navcategories[i];
      var typeName = navcategoryNames[i];
      type.style.display = "none";
      typeName.style.display = "none";
      type.style.display = "flex";
      type.style.flexFlow = "row wrap";
      type.style.overflowX = "hidden";
      typeName.style.display = "block";
    }
  } else {
    var category = document.querySelectorAll(".view-panes");
    var categoryName = document.getElementsByClassName("pane-title");
    var i;
    for (i = 0; i < category.length; i++) {
      var type = category[i];
      type.style.display = "none";
      var typeName = categoryName[i];
      typeName.style.display = "none";
      document.getElementById(genre).style.display = "flex";
      document.getElementById(genre).style.flexFlow = "row wrap";
      document.getElementById(genre).style.justifyContent = "space-evenly";
      document.getElementById(genre).style.overflowX = "hidden";
      document.getElementById(genrename).style.display = "block";
      if (
        genrename === "anime" ||
        genrename === "movies" ||
        genrename === "series" ||
        genrename === "cartoons"
      ) {
        var navName = document.getElementsByClassName("navigate");
        var x;
        for (x = 0; x < navName.length; x++) {
          var navNom = navName[x];
          navNom.style.fontWeight = "lighter";
          document.getElementById(nav).style.fontWeight = "bold";
          document.getElementById("home-nav").style.fontWeight = "lighter";
        }
      } else {
        var navName = document.getElementsByClassName("navigate");
        ``;
        for (var y = 0; y < navName.length; y++) {
          var navNam = navName[y];
          navNam.style.fontWeight = "lighter";
          document.getElementById("home-nav").style.fontWeight = "lighter";
        }
      }
      if (genrename === "about") {
        document.getElementById("about-site").style.display = "block";
      }
    }
  }
}

function openPanel(panelName, hiddenPanelName) {
  document.getElementById(panelName).style.display = "none";
  document.getElementById(hiddenPanelName).style.display = "block";
}
