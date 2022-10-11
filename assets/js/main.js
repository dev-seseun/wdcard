// pc일 경우 화면 전환
const filter = "win16|win32|win64|mac|macintel";
// if (navigator.platform && filter.indexOf(navigator.platform.toLowerCase()) >= 0) {
//   $("body").css("opacity", 1).html('<div class="pc-description">모바일로 확인해주세요🌻</div>');
// } else {
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const intro = document.querySelector("#intro");
const introH1 = document.querySelector("#intro h1");
const introH2 = document.querySelectorAll("#intro h2");
const introImg = document.querySelector("#intro .img-box");
const introText = document.querySelector("#intro .text-box");
const introTouch = document.querySelector("#intro #touch-box");

const visual = document.querySelector("#visual .img-box");
const visualScroll = document.querySelector("#visual #scroll-box");

// split
$(".split").each(function () {
  const charArr = $(this).text().split("");
  let tagWrapArr = "";
  for (let i = 0; i < charArr.length; i++) {
    tagWrapArr += `<span>${charArr[i]}</span>`;
  }
  $(this).html(tagWrapArr);
});

// intro animate
setTimeout(function () {
  const introTl = gsap.timeline();
  // 상진이와 승은이가 결혼합니다.
  introTl.to("body", {
    delay: 1,
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

  const introTouchTl = gsap.timeline();
  introTouchTl.to(introTouch, { opacity: 0, visibility: "hidden", duration: 0.5 });
  introTouchTl.to(introImg, {
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
  });
  introTouchTl.to(introText, {
    color: "#fff",
    padding: "1.5rem 2rem",
    background: "rgba(0,0,0,0.15)",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to(introH1, {
    transform: "scale(0.9)",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to(introH2, {
    transform: "scale(0.9)",
    delay: -1.5,
    duration: 1.5,
    ease: "power4.out",
  });
  introTouchTl.to("#intro .box-1", {
    borderColor: "rgba(255,255,255,0.75)",
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
    transform: "translate(2px,2px)",
    duration: 1,
    ease: "power2.out",
  });
  introTouchTl.to("#intro .box-2", {
    delay: -1,
    transform: "translate(-2px,-2px)",
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

// swiper
const swiper = new Swiper(".swiper", {
  effect: "fade",
  zoom: true,
  speed: 600,
  threshold: 20,
  loop: true,
  // lazy: true,
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

$(".btn-copy").click(function () {
  $(this).siblings(".data-copy").select();
  const copy = document.execCommand("copy");
  if (copy) {
    $(".toast").toast("show");
  }
});
// }
