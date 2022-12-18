gsap.registerPlugin(
  ScrollSmoother,
  ScrollTrigger,
  ScrollToPlugin,
  MorphSVGPlugin
);
MorphSVGPlugin.convertToPath(
  "circle, rect, ellipse, line, polygon, polyline, g"
);

ScrollSmoother.create({
  smooth: 1.15,
  effects: true,
  smoothTouch: 0,
});

const goToAbout = () => {
  gsap.to(window, { duration: 0, scrollTo: "#about" });
};
const goToRoadmap = () => {
  gsap.to(window, { duration: 0, scrollTo: "#roadmap" });
};
const goToTeam = () => {
  gsap.to(window, { duration: 0, scrollTo: "#team" });
};
const goToFaq = () => {
  gsap.to(window, { duration: 0, scrollTo: "#faq" });
};

var swiper = new Swiper(".roadmap-swiper", {
  navigation: {
    nextEl: ".roadmap-swiper-next",
    prevEl: ".roadmap-swiper-prev",
  },
  slidesPerView: 2,
  loop: true,
  speed: 1000,
  spaceBetween: 15,
  breakpoints: {
    850: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".team-swiper", {
  navigation: {
    nextEl: ".team-swiper-next",
    prevEl: ".team-swiper-prev",
  },
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  spaceBetween: 15,
  effect: "coverflow",
  breakpoints: {
    700: {
      effect: "none",
      slidesPerView: 2,
    },
    850: {
      effect: "none",
      slidesPerView: 3,
    },
    1100: {
      effect: "none",
      slidesPerView: 4,
    },
  },
});

$(".show-header-mob").click(() => {
  $(".header-mob").css({ display: "block" });
  $("html").css({ overflowY: "hidden" });
});
$(".hide-header-mob").click(() => {
  $(".header-mob").css({ display: "none" });
  $("html").css({ overflowY: "unset" });
});
$(".header-mob-content > a").click(() => {
  $(".header-mob").css({ display: "none" });
  $("html").css({ overflowY: "unset" });
});

let landingAnim = gsap.timeline({
  paused: true,
});
landingAnim
  .fromTo(
    ".loading-screen",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.15,
    }
  )
  .fromTo(
    ".loading-screen",
    {
      x: 0,
    },
    {
      x: "200%",
      duration: 0.1,
    }
  )
  .fromTo(
    ".hero-left img",
    {
      opacity: 0,
      scale: 0,
      y: "10rem",
      x: "-10rem",
    },
    {
      scale: 1,
      opacity: "1.5",
      y: "0",
      x: "0",
      duration: 1,
      ease: Back.easeOut,
    },
    "<0"
  )
  .fromTo(
    ".hero-right h1",
    {
      opacity: 0,
      y: "10rem",
    },
    {
      opacity: "1",
      y: "0",
      duration: 0.75,
      ease: Back.easeInOut,
    },
    "<0"
  )
  .fromTo(
    ".hero-right p",
    {
      opacity: 0,
      y: "10rem",
    },
    {
      opacity: "1",
      y: "0",
      duration: 0.75,
      ease: Back.easeInOut,
    },
    "<0.1"
  )
  .fromTo(
    ".hero-right button",
    {
      opacity: 0,
      y: "10rem",
    },
    {
      opacity: "1",
      y: "0",
      duration: 0.75,
      ease: Back.easeInOut,
    },
    "<0.1"
  )
  .fromTo(
    ".hero-fluid-black",
    {
      top: "-10rem",
    },
    {
      top: "0",
      duration: 2,
      ease: Power1.easeInOut,
    },
    0
  )
  .fromTo(
    ".hero-fluid-black-mob",
    {
      y: "-5rem",
    },
    {
      y: "0",
      duration: 2,
      ease: Power1.easeInOut,
    },
    0
  )
  .fromTo(
    "header",
    {
      y: "-101%",
    },
    {
      y: "0",
      duration: 2,
      ease: Power1.easeInOut,
    },
    0
  );

$(window).on("load", function () {
  landingAnim.play(0);
});

let GetYoursAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".getyours-section",
    start: "top 80%",
  },
});

GetYoursAnim.fromTo(
  ".figure-left",
  {
    left: "-5rem",
    opacity: 0,
  },
  {
    left: "2rem",
    opacity: 1,
    duration: 1.25,
    ease: Back.easeInOut,
  }
)
  .fromTo(
    ".figure-right",
    {
      right: "-5rem",
      opacity: 0,
    },
    {
      right: "2rem",
      opacity: 1,
      duration: 1.25,
      ease: Back.easeInOut,
    },
    "<0"
  )
  .fromTo(
    ".getyours-content h2",
    {
      y: "5rem",
      opacity: 0,
    },
    {
      y: "0",
      opacity: 1,
      duration: 1.25,
      ease: Back.easeInOut,
    },
    "<0"
  )
  .fromTo(
    ".getyours-content p",
    {
      y: "5rem",
      opacity: 0,
    },
    {
      y: "0",
      opacity: 1,
      duration: 1.25,
      ease: Back.easeInOut,
    },
    "<0.1"
  )
  .fromTo(
    ".gy-step-boxes",
    {
      y: "5rem",
      opacity: 0,
    },
    {
      y: "0",
      opacity: 1,
      duration: 1.25,
      ease: Back.easeInOut,
    },
    "<0.1"
  )
  .fromTo(
    ".getyours-content button",
    {
      y: "5rem",
      opacity: 0,
    },
    {
      y: "0",
      opacity: 1,
      duration: 1.25,
      ease: Back.easeInOut,
    },
    "<0.1"
  )
  .fromTo(
    ".getyours-content > span",
    {
      y: "5rem",
      opacity: 0,
    },
    {
      y: "0",
      opacity: 1,
      duration: 1.25,
      ease: Back.easeInOut,
    },
    "<0.1"
  );
let ComingSoonAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".comingsoon-section",
    start: "top 80%",
  },
});

ComingSoonAnim.fromTo(
  ".cs-pie-grid-card",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    ease: Back.easeInOut,
    stagger: {
      each: 0.15,
    },
  }
);
/* let roadmapAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".roadmap-section",
    start: "top 90%",
  },
});

roadmapAnim.fromTo(
  ".roadmap-slide-content",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    ease: Power4.easeInOut,
    stagger: {
      each: 0.15,
    },
  }
); */
let teamAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".team-section",
    start: "top 80%",
  },
});

teamAnim.fromTo(
  ".team-card",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.5,
    ease: Power4.easeInOut,
    stagger: {
      each: 0.15,
    },
  }
);
let faqCard = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq-section",
    start: "top 80%",
  },
});

faqCard.fromTo(
  ".faq-accordion-item",
  {
    y: "5rem",
    opacity: 0,
  },
  {
    opacity: 1,
    y: "0",
    duration: 1.5,
    ease: Power4.easeInOut,
    stagger: {
      each: 0.15,
    },
  }
);

// Set the date we're counting down to
var countDownDate = new Date("Feb 5, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

gsap.fromTo(
  ".seconds-pie",
  {
    "--p": "100",
  },
  {
    "--p": 0,
    duration: 1,
    repeat: -1,
    ease: Linear.easeInOut,
  }
);
gsap.fromTo(
  ".minutes-pie",
  {
    "--p": "100",
  },
  {
    "--p": 0,
    duration: 60,
    repeat: -1,
    ease: Linear.easeInOut,
  }
);
gsap.fromTo(
  ".hours-pie",
  {
    "--p": "100",
  },
  {
    "--p": 0,
    duration: 360,
    repeat: -1,
    ease: Linear.easeInOut,
  }
);
gsap.fromTo(
  ".days-pie",
  {
    "--p": "100",
  },
  {
    "--p": 0,
    duration: 8640,
    repeat: -1,
    ease: Linear.easeInOut,
  }
);
