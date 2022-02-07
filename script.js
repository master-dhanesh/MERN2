let tl = gsap.timeline({
        defaults: {duration: .5},
        yoyo:true,
        // repeat: -1,
        onRepeat: ()=> console.log('repeating...'),
        onUpdate: ()=> console.log('updating...'),
        onComplete: ()=> console.log('complete...'),
        onStart: ()=> console.log('start...'),
    });

tl.to('.box1', {y:100})
.to('.box2', {y:-100})
.to('.box3', {scale: 0})
.to('.box4', {scale: 2, opacity: 0})




// gsap.set('.box1', {y: -200} )

// var tween = gsap.to('.box',  {
//     repeat: -1,
//     yoyo: true,
//     y: 100,
//     delay: 1,
//     duration: .5,
//     ease: "bounce",
//     stagger: .2,
    // stagger: {
    //     amount: .2,
    //     grid: 'auto',
    //     from: 'left'
    // }
// })

// function util(){
//     tween.timeScale(2);
// }

// gsap.from('.box1',{
//     opacity: 0,
//     x: -200,
//     scale: 0,
//     delay: 1,
//     duration: .5
// })

// gsap.fromTo(".box1", {
//     opacity: 0,
//     x: -200,
//     scale: 0,
//     // delay: 1,
//     // duration: .5
// }, {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     delay: 1,
//     duration: 1,
//     ease: "slow"
// });