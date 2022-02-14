gsap.registerPlugin(ScrollTrigger);

gsap.to('.box2', {
    // scrollTrigger: '.box3',
    scrollTrigger: {
        trigger: '.box1',
        start: 'center 20%',
        endTrigger: '.box3',
        end: 'top 80%',
        markers: true,
        toggleActions: 'restart pause reverse pause',
    },
    x: 400,
    rotation: 360,
    duration: 3
})