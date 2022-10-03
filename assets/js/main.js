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

// intro animate
setTimeout(function () {
  var introTl = gsap.timeline();
  // 상진이와 승은이가 결혼합니다.
  introTl.to("main", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
  });
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
  // 2022년 11월 13일 일요일, 오후 1시 30분
  introTl.fromTo(
    "#intro .text-box .date",
    {
      y: -5,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.in",
    }
  );
  // 디엘웨딩홀, 아모르홀에서
  introTl.fromTo(
    "#intro .text-box .place",
    {
      y: -5,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.in",
    }
  );
  // 아이콘
  introTl.fromTo(introTouch, { opacity: 0, visibility: "hidden" }, { opacity: 1, visibility: "visible", duration: 0.5, ease: "power1.in" });
}, 500);

// touch animate
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
  introTouchTl.to(introText, {
    color: "#fff",
    textShadow: "0 0 5px rgba(0,0,0, 0.2)",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to(intro, {
    height: "50vh",
    zIndex: 1,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to(introText, {
    margin: 0,
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  // 비쥬얼
  introTouchTl.to(visual, {
    delay: -1.5,
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
  }, 5000);
});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  zoom: true,
  speed: 600,
  threshold: 20,
  loop: true,
  // autoHeight: true,
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
  mapHeight: "320",
}).render();
