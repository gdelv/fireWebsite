let img = document.querySelectorAll("div .picture-container");
let overlay = document.querySelectorAll("div .overlay");
//on click show description
for(let i = 0 ; i < img.length; i++) {
    img[i].addEventListener('click', event => {
        img[i].style.zIndex = "0"
        overlay[i].style.zIndex = "6"
    })
}

//on double click hide description
for(let i = 0 ; i < overlay.length; i++) {
    overlay[i].addEventListener('dblclick', event => {
        img[i].style.zIndex = "7";
        overlay[i].style.zIndex = "0"
    })
}


// navbar on both pages stick to top when user scrolls down 

// let homeNavBar = document.querySelector("#homeHeader");
// let teamNavBar = document.querySelector("#teamHeader");
// let stickHome = homeNavBar.offsetTop;
// let stickTeam = teamNavBar.offsetTop;

// function navStick1() {
//     if (window.pageYOffset >= stickHome) {
//       homeNavBar.classList.add("sticky")
//     } else {
//       homeNavBar.classList.remove("sticky");
//     }
// }

// function navStick2() {
//     if (window.pageYOffset >= stickTeam) {
//       teamNavBar.classList.add("sticky")
//     } else {
//       teamNavBar.classList.remove("sticky");
//     }
// }

// window.onscroll = function() {navStick1()};
// window.onscroll = function() {navStick2()};


//Read more button


// function readMoreOne() {
//     let dotsOne = document.querySelector("#dotsOne")
//     let moreOneText = document.getElementById("moreOne");
//     let btnOneText = document.getElementById("readMoreBtnOne");

//     if (dotsOne.style.display === "none") {
//         dotsOne.style.display = "inline";
//         btnOneText.innerHTML = "Read more";
//         moreOneText.style.display = "none";
//       } else {
//         dotsOne.style.display = "none";
//         btnOneText.innerHTML = "Read less";
//         moreOneText.style.display = "inline";
//       }


// }

// function readMore() {
//     let dots = document.getElementById("dots");
//     let moreText = document.getElementById("more");
//     let btnText = document.getElementById("readMoreBtn");

//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }

//Pause videos
let video = document.querySelector("#windBladeVideo");
let pauseBtn = document.querySelector("#pauseBtn");
function pauseVideo() {
    if (video.paused) {
      video.play();
      pauseBtn.innerHTML = "Pause";
    } else {
      video.pause();
      pauseBtn.innerHTML = "Play";
    }
  }

  let videoTeam = document.querySelector("#sunriseVideo");
  let pauseBtnTeam = document.querySelector("#pauseBtnTeam");
  function pauseVideoTeam() {
      if (videoTeam.paused) {
        videoTeam.play();
        pauseBtnTeam.innerHTML = "Pause";
      } else {
        videoTeam.pause();
        pauseBtnTeam.innerHTML = "Play";
      }
    }
  