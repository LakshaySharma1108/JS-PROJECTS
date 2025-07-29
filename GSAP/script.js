function page1animation() {
    const tl = gsap.timeline();
  
    tl.from('nav h1, nav h4, nav button', {
      y: -30,
      opacity: 0,
      delay: 1,
      duration: 0.8,
      stagger: 0.1,
    });
  
    tl.from('.center-part1 h1', {
      x: -200,
      opacity: 0,
      duration: 0.5,
    });
  
    tl.from('.center-part1 p', {
      x: -300,
      opacity: 0,
      duration: 0.4,
    });
  
    tl.from('.center-part1 button', {
      opacity: 0,
      duration: 0.4,
    });
  
    tl.from('.center-part2 img', {
      opacity: 0,
      duration: 0.4,
    }, "-=1"); // starts 1s earlier
  
    tl.from(".section1bottom img", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    });
  }
  
  // Call it on load
  page1animation();
  
  
  // Scroll-triggered animation for Section 2
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      scroller: "body",
      markers: true, // set to false if not debugging
      start: "top 60%",
      end: "top 0%",
      scrub: 2,
    }
  });
  
  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5
  });
  
  tl2.from(".elem.line1.left , .elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 1,
    stagger:0.5,
  },"sametime");
  
  tl2.from(".elem.line1.right, .elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 1,
    stagger:0.5,
  },"sametime");
  