gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: 'none', duration:2});

gsap.utils.toArray('.box').forEach(b => {
    ScrollTrigger.create({
    trigger: b,
    start: 'top top',
    scrub: true,
    pin: true,
    pinSpacing: false,
    markers: true
})
})