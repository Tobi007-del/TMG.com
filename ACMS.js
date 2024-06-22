
const UNIQUE_ID = "Tobi-00703181011";
const UNIQUE_TEXT = "WELCOME CREATOR";
const UNIQUE_IMAGE_L = "/TMG.com/SPARE-PICS/compman.gif";
const UNIQUE_IMAGE_D = "/TMG.com/SPARE-PICS/compman_lowres.gif";
let t = 0;



document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        removeImageAlt();
    }
}


let images = document.querySelectorAll('.actual-img');
let imgs = document.querySelectorAll('.img');

let movieTitle;
images.forEach((img,i) => {
    movieTitle = img.nextElementSibling.innerHTML; 
    imgs[i].setAttribute('data-alt', movieTitle);
    img.alt = movieTitle;
    img.title = movieTitle;
})


async function removeImageAlt() {
    let myPromise = new Promise(function(myResolve) { 
        imgs.forEach((image,i) => {
            images[i].style.opacity = "1";
            image.style.display = "none";
        })
      myResolve("images variables not needed no more");
    });
    myPromise.then(function(value){
        console.log(value)
        images = null;
        imgs = null;
    })
}
  
GardenerNameFunction();



if (!('serviceWorker' in navigator)) {
    // Service Worker isn't supported on this browser, disable or hide UI.
    document.getElementById("notification-option").style.display = "none";
  }
  
  if (!('PushManager' in window)) {
    // Push isn't supported on this browser, disable or hide UI.
    document.getElementById("notification-option").style.display = "none";
  }

function link(){
let allLinks = document.querySelectorAll('.moving-picture-link, .panels a, .search-lines a, .hidden-r-panel-main a');


allLinks.forEach((allLink) => {
allLink.addEventListener('click', (event)=>{
    event.preventDefault();
    alert("The site is still in developement so no movies are available at the moment, we apologize!!! but you can preview some movie trailers at the top of the home page");
})})
}
link()


let menuSearchIcon = document.getElementById("menu-search-icon");
let searchBar = document.getElementById("search");

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function(e) {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
function searchScroll(){
document.addEventListener('scroll', debounce(function(e){ 
if((window.innerWidth <= 600) && (window.scrollY > 0)){
    searchClickCounter = 0;
    searchBar.style.display = "none";
    menuSearchIcon.classList.add('attention');
  }
}))}
searchScroll()
let searchClickCounter = 0;
menuSearchIcon.addEventListener('click',()=>{
    searchClickCounter++;
    if(searchClickCounter == 1){
        searchBar.style.display = "flex";
        menuSearchIcon.classList.remove('attention');
    } else{
        searchClickCounter = 0;
        searchBar.style.display = "none";
        menuSearchIcon.classList.add('attention');
    }
})




let maxCharacters = 8;

function GardenerNameFunction(){
console.log(localStorage.greetGardener);
if(localStorage.greetGardener === undefined || localStorage.greetGardener === 'undefined'){
  sessionStorage.current = 1;
  let txt;
  let person = prompt("What should we call you:", "Gardener");
  while(person.length > maxCharacters){
    if(person === UNIQUE_ID){
        break;
    }
    alert(`Your names should not be more than ${maxCharacters} characters`)
    person = prompt("What should we call you:", "Gardener");
  }
    if (person === "" || person === null) {
        txt = "Welcome Gardener";
    } else {
        txt = "Welcome " + person;
    }
    if (person === UNIQUE_ID){
        txt = UNIQUE_TEXT;
        const nlightItems = document.getElementsByClassName("light");
        if(nlightItems.length == 0){
            document.getElementById("user-image").src = UNIQUE_IMAGE_D;
            localStorage.picsrc = UNIQUE_IMAGE_D;
        } else{
          document.getElementById("user-image").src = UNIQUE_IMAGE_L;
          localStorage.picsrc = UNIQUE_IMAGE_L;
        }
    }
    document.getElementById("demo").innerHTML = txt;
    localStorage.greetGardener = txt; 
    displayNotification(txt);
    }  else {
        document.getElementById("demo").innerHTML = localStorage.greetGardener;
    function myNotificationFunction(){
        console.log(sessionStorage.current);
        if(sessionStorage.current === '1'){
            sessionStorage.current = 1;
        } else {
            displayReturnNotification();
    }
    }
    myNotificationFunction()
}
}

document.getElementById("demo").addEventListener('click', ()=> {
    let newTxt;
    const dlightItems = document.getElementsByClassName("light");
    let personChange = prompt("Would you like to change your name?", "");
    if (personChange.toUpperCase() === "YES" || personChange.toUpperCase() === "Y"){
    let newPerson = prompt("Please enter your name:", "Gardener");
    if(newPerson.length <= maxCharacters){
    if (newPerson === "" || newPerson === null) {
          newTxt = "Welcome Gardener";
          document.getElementById("demo").innerHTML = newTxt;
          localStorage.greetGardener = newTxt;
          displayNotification(newTxt);
          if (dlightItems.length < 2 && ((localStorage.picsrc === undefined) || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L))){
            document.getElementById("user-image").src = "/TMG.com/SPARE-PICS/person.png";
            localStorage.picsrc = "/TMG.com/SPARE-PICS/person.png";
            console.log(localStorage.greetGardener);
         } else if (dlightItems.length > 0 && ((localStorage.picsrc === "/TMG.com/SPARE-PICS/person.png") || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === undefined) || (localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L))){
          document.getElementById("user-image").src = "/TMG.com/SPARE-PICS/person_one.jpg";
          localStorage.picsrc = "/TMG.com/SPARE-PICS/person_one.jpg";
          console.log(localStorage.greetGardener);
        }
    } else{
          newTxt = "Welcome " + newPerson;
          document.getElementById("demo").innerHTML = newTxt;
          localStorage.greetGardener = newTxt;
          displayNotification(newTxt);
          if (dlightItems.length < 2 && ((localStorage.picsrc === undefined) || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L))){
            document.getElementById("user-image").src = "/TMG.com/SPARE-PICS/person.png";
            localStorage.picsrc = "/TMG.com/SPARE-PICS/person.png";
            console.log(localStorage.greetGardener);
         } else if (dlightItems.length > 0 && ((localStorage.picsrc === "/TMG.com/SPARE-PICS/person.png") || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === undefined) || (localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L))){
          document.getElementById("user-image").src = "/TMG.com/SPARE-PICS/person_one.jpg";
          localStorage.picsrc = "/TMG.com/SPARE-PICS/person_one.jpg";
          console.log(localStorage.greetGardener);
        }
    }}
    else if (newPerson == UNIQUE_ID){
          newTxt = UNIQUE_TEXT;
          document.getElementById("demo").innerHTML = newTxt;
          localStorage.greetGardener = newTxt;
          displayNotification(newTxt);
          if(dlightItems.length < 2 && localStorage.greetGardener === UNIQUE_TEXT && ((localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L) || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person.png") || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === undefined))){
            document.getElementById("user-image").src = UNIQUE_IMAGE_D;
            localStorage.picsrc = UNIQUE_IMAGE_D;
            console.log(localStorage.greetGardener);
          } else if (dlightItems.length > 0 && localStorage.greetGardener === UNIQUE_TEXT && ((localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L) || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person.png") || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === undefined))){
          document.getElementById("user-image").src = UNIQUE_IMAGE_L;
          localStorage.picsrc = UNIQUE_IMAGE_L;
          console.log(localStorage.greetGardener);
        }
    }
    else {
        alert(`Your name must not be more than ${maxCharacters} characters`);
    }}
    else if (personChange.toUpperCase() === "NO" || personChange.toUpperCase() === "N"){
        console.log("Gardener name not changed!!");
    } else{
        console.log("Gardener name not changed!!");
    }
})


function displayNotification(txt){
  const title = "THE MOVIE GARDEN";
  const options = {
    body: `${txt} to The Movie Garden where you can watch all your exclusive movies and tv shows!!!` , 
    icon: "/TMG.com/SPARE-PICS/movieicon-two.jpeg",
    badge: "/TMG.com/SPARE-PICS/icons8-clapperboard-100.png", 
    image: "/TMG.com/SPARE-PICS/justice-league-b-s.jpeg",
    actions: [
        {
            action: 'open-site',
            title: 'Visit The Garden',
            type: 'button',
            icon: '/TMG.com/SPARE-PICS/icons8-clapperboard-100.png'
        }
    ],
    tag: 'renotify',
    renotify: true,
  };
  if (Notification?.permission === "granted") {
    // let n = new Notification("THE MOVIE GARDEN", {
    // body: `${txt} to The Movie Garden. We are now live and you can watch all your exclusive movies and tv shows!!!` , icon: "/TMG.com/SPARE-PICS/movieicon-two.jpeg"
    // })
    navigator.serviceWorker.ready.then(function(registration) {
    registration.showNotification(title, options);
    });
    } else if (Notification && Notification.permission !== "denied") {
    Notification.requestPermission().then((status) => {
    if (status === "granted") {
    // let n = new Notification("THE MOVIE GARDEN", {
    //   body: `${txt} to The Movie Garden. We are now live and you can watch all your exclusive movies and tv shows!!!` , icon: "/TMG.com/SPARE-PICS/movieicon-two.jpeg"
    // })
    navigator.serviceWorker.ready.then(function(registration) {
    registration.showNotification(title, options);
    });
        } else {
          alert("You have to give notification permission to get the welcome notification");
        }
      });
    } else {
      alert("You have to give notification permission to get the welcome notification");
}}

function displayReturnNotification(){
    const returnTitle = "THE MOVIE GARDEN";
    const returnOptions = {
        body: `${localStorage.greetGardener} to The Movie Garden once more. Tour the site and enjoy all your exclusive movies and tv shows!!` , 
        icon: "/TMG.com/SPARE-PICS/movieicon-two.jpeg",
        badge: "/TMG.com/SPARE-PICS/icons8-clapperboard-100.png", 
        image: "/TMG.com/SPARE-PICS/justice-league-b-s.jpeg",
        actions: [
            {
                action: 'open-site',
                title: 'Visit The Garden',
                type: 'button',
                icon: '/TMG.com/SPARE-PICS/icons8-clapperboard-100.png'
            }
        ],
        tag: 'renotify',
        renotify: true,
    };
    sessionStorage.current = 1;
    if (Notification?.permission === "granted") {
        // let n = new Notification("THE MOVIE GARDEN", {
        //   body: `${localStorage.greetGardener} to The Movie Garden once more. You now know where you can watch all your exclusive movies and tv shows so tour the site and enjoy!` , icon: "/TMG.com/SPARE-PICS/movieicon-two.jpeg"
        // });
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(returnTitle, returnOptions)
        });
        } else if (Notification && Notification.permission !== "denied") {
        Notification.requestPermission().then((status) => {
        if (status === "granted") {
        // let n = new Notification("THE MOVIE GARDEN", {
        //   body: `${localStorage.greetGardener} to The Movie Garden once more.You now know where you can watch all your exclusive movies and tv shows so tour the site and enjoy!` , icon: "/TMG.com/SPARE-PICS/movieicon-two.jpeg"
        // });
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(returnTitle, returnOptions)
        });
            } else {
              alert("You have to give notification permission to get the  welcome notification");
            }
          });
        } else {
          alert("You have to give notification permission to get the welcome notification");
        }
}      


let GardenerImage = document.getElementById("user-image");
if(localStorage.picsrc !== undefined){
    GardenerImage.src = localStorage.picsrc;
}
document.getElementById("insert").addEventListener('change', (evt) => {
    let files = evt.target.files;
    let reader = new FileReader();
    reader.onload = function(event) {
    try {
        localStorage.picsrc = event.target.result;
        GardenerImage.src = event.target.result;
        console.log(`current image src: ${GardenerImage.src}`)
     } catch (error) {
     alert(`The image file selected is too large!!`)
     } 
    }
    reader.readAsDataURL(files[0]);
})


let light = 0;
let lighter;

function lightMode() {
    light ++;
    let toggleItems = document.querySelectorAll(".topnav,#hidden-navigator-panel,#title,#hidden-navigator-panel li,#hidden-navigator-panel p a,#hidden-navigator-panel li a,#hidden-navigator-panel p,#moving-word,#navigator,#top-box,.navigate,#toggle,#toggle-ball,body,h3,#left-arrow,#right-arrow,#search-menu,#Search,.search-icon,#x-search-menu,.search-lines,.search-lines a,.search-footer a,#no-search-result,#no-search-result h2,#no-search-result p,.search-footer,#search-error,.panels a p,#about-site,#about-site a,.footer-text p,.bullet,footer pre,#cancel-menu,.hidden-r-panel,.hidden-r-panel a p,.hidden-r-panel-about-header,.hidden-r-panel-about-text,.hide,.worthy,#toggle-push-ball,#n-toggle,#search,#my-menu-search,#demo,.moving-picture-image-cover-left,.moving-picture-image-cover-right,.view-tiles,.r-view-tile,.s-r-view-tile,.moving-picture-title,.moving-picture-about,.moving-picture-button,.moving-picture-link,.watch-trailer-buttons,.preview-button,.end-preview-button,.white-text,#loading-page,#another-two-balls,.preloader-text,.img,.panel-toggler,#quick-scroll-wrapper,#to-top,#to-bottom,#remove-quick-scrolls");
    if(lighter === 1){
      lighter = 0;
      localStorage.lighter = lighter;
      console.log(`Lighter: ${lighter}`);
    } else{
      lighter ++;
      localStorage.lighter = lighter;
      console.log(`Lighter: ${lighter}`);
    }
    let lightItems = document.getElementsByClassName("light");
    for(let i = 0; i < toggleItems.length; i++){
    if(light === 1){
     toggleItems[i].classList.add("light");
    } else{
        light = 0;
        toggleItems[i].classList.remove("light");
    }
     if(lightItems.length >= 1){
        document.getElementById("themes-phrase").innerHTML="Toggle Dark Mode";
     } 
     else {
        document.getElementById("themes-phrase").innerHTML="Toggle Light Mode";
     }
    }
    if(lightItems.length < 2 && localStorage.greetGardener === UNIQUE_TEXT && ((localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L) || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person.png") || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === undefined))){
        document.getElementById("user-image").src = UNIQUE_IMAGE_D;
        localStorage.picsrc = UNIQUE_IMAGE_D;
        console.log(localStorage.greetGardener);
    } else if (lightItems.length > 0 && localStorage.greetGardener === UNIQUE_TEXT && ((localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L) || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person.png") || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === undefined))){
      document.getElementById("user-image").src = UNIQUE_IMAGE_L;
      localStorage.picsrc = UNIQUE_IMAGE_L;
      console.log(localStorage.greetGardener);
    } else if (lightItems.length < 2 && ((localStorage.picsrc === undefined) || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L))){
        document.getElementById("user-image").src = "/TMG.com/SPARE-PICS/person.png";
        localStorage.picsrc = "/TMG.com/SPARE-PICS/person.png";
        console.log(localStorage.greetGardener);
    } else if (lightItems.length > 0 && ((localStorage.picsrc === "/TMG.com/SPARE-PICS/person.png") || (localStorage.picsrc === "/TMG.com/SPARE-PICS/person_one.jpg") || (localStorage.picsrc === undefined) || (localStorage.picsrc === UNIQUE_IMAGE_D) || (localStorage.picsrc === UNIQUE_IMAGE_L))){
      document.getElementById("user-image").src = "/TMG.com/SPARE-PICS/person_one.jpg";
      localStorage.picsrc = "/TMG.com/SPARE-PICS/person_one.jpg";
      console.log(localStorage.greetGardener);
    }
    toggleItems = null;
} 

pusherExist();
var pusher;
function pusherExist(){
let togglePushBall = document.getElementById("toggle-push-ball");
console.log("Local Storage Pusher: ", localStorage.pusher);
if(localStorage.pusher === undefined){
    pusher = 1;
    console.log(`Pusher: ${pusher}`);
    registerServiceWorkerForPush(pusher)
    togglePushBall.classList.add('push');
} else if(Number(localStorage.pusher) === 0){
    pusher = Number(localStorage.pusher);
    console.log(`Pusher: ${pusher}`);
    registerServiceWorkerForPush(pusher)
    togglePushBall.classList.remove('push');
} else if(Number(localStorage.pusher) === 1){
    pusher = Number(localStorage.pusher);
    console.log(`Pusher: ${pusher}`);
    registerServiceWorkerForPush(pusher)
    togglePushBall.classList.add('push');
}

togglePushBall.addEventListener('click',()=>{
    subscribePush()
})
document.getElementById("push-phrase").addEventListener('click',()=>{
    subscribePush()
})
}

function subscribePush(){
    let togglePushBall = document.getElementById("toggle-push-ball");
    if(pusher === 0){
    pusher ++;
    togglePushBall.classList.add('push');
    registerServiceWorkerForPush(pusher)
    localStorage.pusher = pusher;
    console.log(`pusher enabled. Pusher = ${pusher}`)
    } else{
    pusher = 0;
    togglePushBall.classList.remove('push');
    registerServiceWorkerForPush(pusher)
    localStorage.pusher = pusher;
    console.log(`pusher disabled. Pusher = ${pusher}`)
    }
}


function lightExist(){
    console.log("Local Storage Lighter: ", localStorage.lighter);
    if(localStorage.lighter === undefined){
        lighter = 0;
        console.log(`Lighter: ${lighter}`);
    } else if(Number(localStorage.lighter) === 0){
        lighter = Number(localStorage.lighter);
        console.log(`Lighter: ${lighter}`);
    } else if(Number(localStorage.lighter) === 1){
        lighter = 0;
        lightMode();
    }
}
  
    lightExist();


async function registerServiceWorkerForPush(pusherValue) {
    await navigator.serviceWorker.register('service-worker.js');
    await navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    if(pusherValue === 1){
        // registration worked
        console.log('Registration succeeded. ',registration);
    }
    else if(pusherValue === 0){
    registration.unregister().then((boolean)=>{
    if(boolean){
    console.log('Unregistration succeeded.',registration);
    } else{
        console.log("Unregistration failed.")
    }
    })
    }
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    })
}

 

var mFa;
var mFb;
if(document.body.id === "movies-page"){
    mFa = -3300;
    mFb = -3200;
}

if(document.body.id === "series-page"){
    mFa = -900;
    mFb = -800;
}

if(document.body.id === "cartoons-page"){
    mFa = -300;
    mFb = -200;
}

if(document.body.id === "anime-page"){
    mFa = -200;
    mFb = -100;
}


function movingPicture(){
    let mousedownCounter = 0;
    const header = document.getElementById("title");
    const movingPictures = document.querySelectorAll(".moving-picture");
    const movingVideos = document.querySelectorAll(".moving-picture-video")
    const previewButtons = document.querySelectorAll(".preview-button");
    const endPreviewButtons = document.querySelectorAll(".end-preview-button");
    const watchTrailerButtons = document.querySelectorAll(".watch-trailer-buttons");
    const movingLine = document.querySelector(".moving-line");
    const movingTitles = document.querySelectorAll(".moving-picture-title");
    const movingAbouts = document.querySelectorAll(".moving-picture-about");                                                                                             
    const movingButtons = document.querySelectorAll(".moving-picture-button");
    const movingLinks = document.querySelectorAll(".moving-picture-link");
    const movingPictureImageCoversLeft = document.getElementsByClassName("moving-picture-image-cover-left");
    const movingPictureImageCoversRight = document.getElementsByClassName("moving-picture-image-cover-right");
    let loadingPage = document.getElementById("loading-page");

    movingVideos.forEach((movingVideo)=>{
        movingVideo.onwaiting = function(){
            loadingPage.classList.add('buffering');
        }
        movingVideo.onplaying = function(){
            loadingPage.classList.remove('buffering');
        }
    })
    
    function playTrailer(i){
        t=i;
        movingPictureImageCoversLeft[i].classList.add('inactive');
        movingPictureImageCoversRight[i].classList.add('inactive');
        watchTrailerButtons[i].style.display = "none";
        mousedownCounter++;
        header.style.display = "none";
        movingLine.style.display = "none";
        if (mousedownCounter == 1){
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
    
    function reversePlayTrailer(x){
        movingPictureImageCoversLeft[x].classList.remove('inactive');
        movingPictureImageCoversRight[x].classList.remove('inactive');
        watchTrailerButtons[x].style.display = "flex";
        mousedownCounter = 0;
        setTimeout(()=>{header.style.display = "block";},1500)
        setTimeout(()=>{movingLine.style.display = "block";},1500)
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
        if (movingPictures[x].computedStyleMap().get("transform")[0].x.value == 0){
            document.getElementById("left-arrow").style.display="none";
        }
        else{
            document.getElementById("left-arrow").style.display = "block";
        }
    
        if(movingPictures[x].computedStyleMap().get("transform")[0].x.value == mFa){
            document.getElementById("right-arrow").style.display="none";
        } else {
            document.getElementById("right-arrow").style.display = "block";
        }
    }
    
    let doubleClickCounter = 0;
    movingPictures.forEach((movingPicture,i) => {
        movingPicture.addEventListener("dblclick",() =>{
        doubleClickCounter++;
        if(doubleClickCounter == 1){  
           playTrailer(i)
        }
        })
    })
    
    watchTrailerButtons.forEach((watchTrailerButton,i) => {
        watchTrailerButton.addEventListener("click",() =>{
           playTrailer(i)
        })
    })
    
    
    let intervalID = null;
        console.log(`Interval: ${intervalID}`)
    function intervalManager(flag, animate, time) {
        if(flag){
            let Time = parseInt(time);
            console.log(`Time:${Time}`)
            intervalID = setInterval(animate,Time)
            console.log(`Interval: ${intervalID}`)
        }
        else{
            clearInterval(intervalID)
            console.log(`Interval: ${intervalID}`)
        }
    }
    
    intervalManager(true, movingFrame, 35000);
    
    function movingFrame() {
        loadingPage.classList.remove('buffering');
        movingPictures.forEach((movingPicture,r) => {
        movingPicture.style.transform = `translateX(${
        movingPicture.computedStyleMap().get("transform")[0].x.value
        -100}%)`;
        reversePlayTrailer(r);
        console.log(`Interval:${intervalID}`);
        doubleClickCounter = 0;
        if (movingPicture.computedStyleMap().get("transform")[0].x.value == mFa){
            movingPicture.style.transform="translateX(0)";
            document.getElementById("left-arrow").style.display="none";
        }
        else{
            document.getElementById("left-arrow").style.display = "block";
        }
        if(movingPicture.computedStyleMap().get("transform")[0].x.value == mFb){
            document.getElementById("right-arrow").style.display="none";
        } else {
            document.getElementById("right-arrow").style.display = "block";
        }
    })}
    
    let animationStopped = 0;
    previewButtons.forEach((previewButton) => {
        previewButton.addEventListener("mousedown", () =>{
        animationStopped ++;
        previewButton.style.display = "none";
        intervalManager(false, movingFrame, 35000);
        })
     })
     
    endPreviewButtons.forEach((endPreviewButton,i) => {
        endPreviewButton.addEventListener("mousedown", () => {
        loadingPage.classList.remove('buffering');
        reversePlayTrailer(i);
        doubleClickCounter = 0;
        if (animationStopped === 1){
        intervalManager(true, movingFrame, 30000);
        animationStopped = 0;
        }
        })
     })
    
    const RightArrow = document.querySelector(".right-arrow");
    const LeftArrow = document.querySelector(".left-arrow");
    movingPictures.forEach((movingPicture) =>{
        RightArrow.addEventListener("click",()=>{
        LeftArrow.style.display = "block";
        movingPicture.style.transform = `translateX(${
        movingPicture.computedStyleMap().get("transform")[0].x.value
        -100}%)`;
        if(movingPicture.computedStyleMap().get("transform")[0].x.value === mFb){
            document.getElementById("right-arrow").style.display="none";
        }
    })})
    movingPictures.forEach((movingPicture) =>{
        LeftArrow.addEventListener("click",()=>{
        RightArrow.style.display = "block";
        movingPicture.style.transform = `translateX(${
        movingPicture.computedStyleMap().get("transform")[0].x.value
        +100}%)`;
        if((movingPicture.computedStyleMap().get("transform")[0].x.value) === -100){
            document.getElementById("left-arrow").style.display="none";
        }
    })})
    }
    
    movingPicture()
    
    
    

function searchMenuFunction(){
    let input, filter, ul, li, p, i, menuFound;
    input= document.getElementById("my-menu-search");
    filter=input.value.toUpperCase();
    ul=document.getElementById("myMenuBar");
    li=ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++){
        p = li[i].getElementsByTagName("p")[0];
        if
        (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
            menuFound = true;
            li[i].style.display="block";
        } else {
            li[i].style.display="none";
        }
        if(menuFound){
        document.getElementById("menu-not-found").style.display = "none";    
        } else {
        document.getElementById("menu-not-found").style.display = "block";
        }
    }
}


const search = () =>{
    let input= document.getElementById("Search");
    const searchbox = document.getElementById("Search").value.toUpperCase();
    const movieitems = document.getElementById("search-menu");
    const movie = document.querySelectorAll(".search-lines");
    const mname = movieitems.getElementsByTagName("p");
    for(let n=0 ; n< mname.length; n++){
        let match = movie[n].getElementsByTagName('p')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;
            let resultFound;
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                resultFound = true;
                movie[n].style.display="block";
            }else{
                movie[n].style.display="none";
            }
            if(input.value === ''){
                for(let i=0; i < mname.length; i++){
                    movie[i].style.display="none";
                    document.getElementById("search-error").style.display="block";
                    document.getElementById("no-search-result").style.display="none";
                }
            }else{
                document.getElementById("search-error").style.display="none";
            }
            if(resultFound) {
                document.getElementById("no-search-result").style.display="none";
            }
            else{
                document.getElementById("no-search-result").style.display="block";
            }
        }
    }
}

function revealSearchMenu(){
    document.getElementById("initial").style.opacity="0.9";
    document.getElementById("content-box").style.opacity="0.9";
    document.getElementById("search").style.display="none"; 
    document.getElementById("search-menu").style.display="block";
    document.getElementById("search-error").style.display="none";
    const movie = document.querySelectorAll(".search-lines");
    for(let i=0; i< movie.length; i++){
        movie[i].style.display = "none";
    }
    document.getElementById("Search").focus();
}

function concealSearchMenu(){
    document.getElementById("initial").style.opacity="1";
    document.getElementById("content-box").style.opacity="1";
    document.getElementById("search-menu").style.display="none";
    document.getElementById("search").style.display="block"; 
    document.getElementById("search-error").style.display="none";
    document.getElementById("no-search-result").style.display="none";
    document.getElementById("Search").value='';
}

document.getElementById("navigator").addEventListener('click', ()=> {
    navigatorMenuOpenFunction()
})
document.getElementById("navigator").addEventListener('mousedown', ()=> {
    navigatorMenuOpenFunction()
})
document.getElementById("navigator").addEventListener('mouseup', ()=> {
    navigatorMenuOpenFunction()
})

function navigatorMenuOpenFunction() {
    document.getElementById("hidden-navigator-panel").style.width="65vw";
    document.getElementById("top-content").style.opacity="0.35";
    document.getElementById("content-box").style.opacity="0.35";
}
function cancelMenuFunction() {
    document.getElementById("hidden-navigator-panel").style.width="0vw";
    document.getElementById("top-content").style.opacity="1";
    document.getElementById("content-box").style.opacity="1";
}
let afters = document.querySelectorAll(".view-tiles,.r-view-tile");
afters.forEach(after=>{
    after.classList.add("line");
})

const rPanels = document.querySelectorAll(".r-panel");
const hiddenrPanels = document.querySelectorAll(".hidden-r-panel");
let panelTogglers = document.querySelectorAll(".panel-toggler");
let tcheck = 0;

panelTogglers.forEach(panelToggler => {
    panelToggler.addEventListener('click',() => {toggleAllPanels(panelToggler)})
})

function toggleAllPanels(panelToggler){
    tcheck ++;
    panelTogglers.forEach(panelToggle => {
        panelToggle.classList.toggle('close');
    })  
    if(tcheck === 1){
        rPanels.forEach((rPanel,i) => {
            rPanel.classList.add('close');
            rPanel.classList.remove('open');
            hiddenrPanels[i].classList.add('open');
            hiddenrPanels[i].classList.remove('close');
            panelToggler.innerHTML = "Close All";
            panelTogglers.forEach(panelToggle => {
                panelToggle.innerHTML = "Close All";
            })            
        })
    } else {
        tcheck = 0;
        rPanels.forEach((rPanel,i) => {
            rPanel.classList.add('open');
            rPanel.classList.remove('close');
            hiddenrPanels[i].classList.add('close');
            hiddenrPanels[i].classList.remove('open');
            panelToggler.innerHTML = "Open All";
            panelTogglers.forEach(panelToggle => {
                panelToggle.innerHTML = "Open All";
            })     
        })
    }
}


function openPanel(panelName, hiddenPanelName){
    document.getElementById(panelName).classList.add('close');
    document.getElementById(panelName).classList.remove('open');
    document.getElementById(hiddenPanelName).classList.add('open');
    document.getElementById(hiddenPanelName).classList.remove('close');
}

function pager(){
    let toTop = document.getElementById("to-top");
    let toBottom = document.getElementById("to-bottom");
    let removeScrolls = document.getElementById("remove-quick-scrolls");
    let quickScrollShow = document.getElementById("quick-scroll-show");
    let quickScroll = document.getElementById("quick-scroll-wrapper");
    let quickScrolls = document.getElementById("quick-scrolls");
    
    removeScrolls.addEventListener('click', ()=>{
       quickScroll.style.display = "none";
    })
    
    toTop.addEventListener('click', ()=>{
       scrollToTop()
    })
    
    toBottom.addEventListener('click', ()=>{
       scrollToBottom()
    })
    
    quickScrollShow.addEventListener('click', ()=>{
        quickScrolls.classList.toggle('show');
    })
    
    function scrollToTop() {        
        setTimeout(function () {
            window.scrollTo({
                top: 0,
            })
    }, 100);
    };
    
    function scrollToBottom() {
        setTimeout(function () {
            window.scrollTo({
                top: document.body.scrollHeight
            })
        }, 100);
    }
    
    
    
    var circle = document.getElementById("circle");
    var length = circle.getTotalLength();
    
    // The start position of the drawing
    circle.style.strokeDasharray = length;
    circle.style.strokeDashoffset = length;
    
    
    function scrollfunction() {
        let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
        let draw = length * scrollpercent;
        let angle = 180 * scrollpercent;
      
        // Reverse the drawing (when scrolling upwards)
        quickScrollShow.style.transform = `rotate(${angle}deg)`;
        circle.style.strokeDashoffset = length - draw;
      }
      
    
    
    function pageBottom () {
        const onscroll = () => {
          quickScrolls.classList.remove('show');
          const scrolledTo = window.scrollY + window.innerHeight;
          const threshold = 0;
          const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo;
          const isReachTop = window.scrollY === 0;
          if (isReachBottom || isReachTop){
            quickScroll.style.display = "flex";
          }
          scrollfunction()
        };
          
          window.addEventListener("scroll", onscroll);
        return () => {
          window.removeEventListener("scroll", onscroll);
        };
        
      }
     
    pageBottom();
    }
    pager()
    
    