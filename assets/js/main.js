gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let container = document.querySelector("main");
let visual = document.querySelector("#visual");
let filter = document.querySelector("#visual .filter");

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
  // visual
  var tl = gsap.timeline();
  tl.to("#visual", {
    filter: "blur(0px)",
    duration: 2,
    ease: "power2.out",
  });
  tl.fromTo(
    "#visual h1 span",
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
  tl.fromTo(
    "#visual h2 span",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    }
  );
}, 200);
