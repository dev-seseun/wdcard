// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty("--vh", `${vh}px`);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let intro = document.querySelector("#intro");
let introH1 = document.querySelector("#intro h1");
let introH2 = document.querySelectorAll("#intro h2");
let introImg = document.querySelector("#intro .img-box");
let introText = document.querySelector("#intro .text-box");
let introTouch = document.querySelector("#intro #touch-box");

let visual = document.querySelector("#visual .img-box");
let visualScroll = document.querySelector("#visual #scroll-box");

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
  introTl.to("body", {
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
$(introTouch).click(function () {
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
    padding: "1.5rem 2rem",
    borderColor: "rgba(255,255,255,0.5)",
    background: "rgba(0,0,0,0.15)",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to("#intro .box-1", {
    borderColor: "rgba(255,255,255,0.5)",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to("#intro .box-2", {
    borderColor: "rgba(255,255,255,0.5)",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to(intro, {
    padding: "0 2rem",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to(intro, {
    delay: 0.5,
    height: "46vh",
    zIndex: 1,
    duration: 1,
    ease: "power2.out",
  });
  introTouchTl.to("#intro .box-1", {
    delay: -1,
    transform: "rotate(3deg)",
    duration: 1,
    ease: "power2.out",
  });
  introTouchTl.to("#intro .box-2", {
    delay: -1,
    transform: "rotate(-5deg)",
    duration: 1,
    ease: "power2.out",
  });
  introTouchTl.to(introText, {
    margin: 0,
    delay: -1,
    duration: 1,
    ease: "power4.out",
  });
  // 비쥬얼
  introTouchTl.to(visual, {
    delay: -1,
    filter: "blur(0px)",
    transform: "scale(1)",
    duration: 4,
    ease: "power2.out",
  });
  // introTouchTl.to(intro, {
  //   y: 0,
  //   duration: 1,
  //   ease: "power4.out",
  // });
  setTimeout(function () {
    $("main").removeClass("fixed");
  }, 4500);
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
    type: "fraction",
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
