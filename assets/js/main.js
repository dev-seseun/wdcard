gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let container = document.querySelector("main");

// smooth scrolling container
// let height;
// function setHeight() {
//   height = container.clientHeight;
//   document.body.style.height = height + "px";
// }
// ScrollTrigger.addEventListener("refreshInit", setHeight);
// gsap.to(container, {
//   y: () => -(height - document.documentElement.clientHeight),
//   ease: "none",
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 2,
//     invalidateOnRefresh: true,
//   },
// });

let intro = document.querySelector("#intro");
let introH1 = document.querySelector("#intro h1");
let introH2 = document.querySelectorAll("#intro h2");
let introImg = document.querySelector("#intro .img-box");
let introText = document.querySelector("#intro .text-box");
let introTouch = document.querySelector("#intro .touch-box");
let visual = document.querySelector("#visual .img-box");

// split
$(".split").each(function () {
  var charArr = $(this).text().split("");
  var tagWrapArr = "";
  for (var i = 0; i < charArr.length; i++) {
    tagWrapArr += `<span>${charArr[i]}</span>`;
  }
  $(this).html(tagWrapArr);
});

setTimeout(function () {
  var introTl = gsap.timeline();
  introTl.fromTo(
    "#intro .text-box h1 span",
    {
      y: -4,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      ease: "power3.out",
    }
  );
  introTl.fromTo(
    "#intro .text-box h2 span",
    {
      y: -2,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.5,
      ease: "power3.out",
    }
  );
  introTl.fromTo(introTouch, { opacity: 0, visibility: "hidden" }, { opacity: 1, visibility: "visible", duration: 0.5 });
}, 200);

$("#intro .touch-box").click(function () {
  const audio = document.querySelector("audio");
  audio.play();

  var introTouchTl = gsap.timeline();
  introTouchTl.to(introTouch, { opacity: 0, visibility: "hidden", duration: 0.5 });
  introTouchTl.to(introImg, {
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
  });
  introTouchTl.to(intro, {
    borderRadius: "0 0 100px 100px",
    duration: 1,
    ease: "power3.out",
  });
  introTouchTl.to(intro, {
    y: "-100%",
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to(introText, {
    opacity: 0,
    duration: 2,
  });
  // 스타일변경
  introTouchTl.to(intro, {
    height: "auto",
    borderRadius: "0 0 40px 40px",
  });
  introTouchTl.to(introText, {
    display: "flex",
    padding: "0.5rem 1.5rem",
    margin: 0,
    duration: 0,
    opacity: 1,
  });
  introTouchTl.to(introH1, {
    display: "none",
    duration: 0,
  });
  introTouchTl.to(introH2, {
    fontSize: "0.9rem",
    marginLeft: "0.5rem",
    duration: 0,
  });
  introTouchTl.to(introText, {
    opacity: 1,
    duration: 0,
  });
  //
  introTouchTl.to(visual, {
    filter: "blur(0px)",
    duration: 2,
  });
  // introTouchTl.to(intro, {
  //   y: 0,
  //   duration: 1,
  //   ease: "power4.out",
  // });
  setTimeout(function () {
    $("main").removeClass("fixed");
  }, 6000);
});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  zoom: true,
  speed: 600,
  threshold: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 지도
new daum.roughmap.Lander({
  timestamp: "1664461519874",
  key: "2bvqt",
  mapWidth: "100%",
  mapHeight: "400",
}).render();
