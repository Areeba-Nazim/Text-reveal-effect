let locoScroll = () => {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locoScroll();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "#main",
    start: "1% 1%",
    end: "100% 50% ",
    markers: true ,
    pin: true,
    scrub: 33,
  }
});

tl.to(".text-1 ,.text-2 , .text-3 , .text-4 , .text-5 , .text-6", {
  width: "100%",
  ease: Power3.easeIn,
  stagger: .3
});


