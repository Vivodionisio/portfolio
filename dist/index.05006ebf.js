function a(){const a=gsap.timeline({defaults:{duration:1}});return a.from(".hill-1",{autoAlpha:0,x:"100px",duration:1,ease:"elastic.out(1, 0.75)"},"<60%").from(".hill-2, .stickman-1, .shadow-1, .bag-1, .bag-shadow-1, .stickman-9-blink",{x:"100px",duration:1,ease:"elastic.out(1, 0.75)"},"<20%").from(".hill-2, .stickman-1, .bag-1",{autoAlpha:0,stagger:.2},"<").from(".shadow-1, .bag-shadow-1",{autoAlpha:0,stagger:.2},"<20%").from(".hill-3",{autoAlpha:0,x:"50px",duration:.8,ease:"elastic.out(1, 0.75)"},"<5%").from(".mountain",{autoAlpha:0,x:"50px",duration:.8,ease:"elastic.out(1, 0.75)"},"<10%").to(".phantum-element, .bag-1",{pointerEvents:"auto"}),a}gsap.registerPlugin(MotionPathPlugin,ScrollTrigger),gsap.set(".stickman-scene",{autoAlpha:0}),gsap.set(".phantum-element, .bag-1",{pointerEvents:"none"}),ScrollTrigger.matchMedia({"(max-width: 935px)":()=>{1!==gsap.getProperty(".img-overlay","opacity")&&1!==gsap.getProperty(".stickman-scene","opacity")&&(gsap.set(".stickman-scene",{autoAlpha:0}),gsap.to(".stickman-scene",{scrollTrigger:{trigger:".stickman-scene",start:"top 30%",onEnter:()=>{1!==gsap.getProperty(".stickman-scene","opacity")&&a().play()}},autoAlpha:1,duration:.5}))},"(min-width: 935px)":()=>{1!==gsap.getProperty(".stickman-scene","opacity")&&(gsap.set(".stickman-scene",{autoAlpha:1}),a().play())}});
//# sourceMappingURL=index.05006ebf.js.map
