gsap.registerPlugin(ScrollTrigger);
let tl1 = gsap.timeline(
  {
    scrollTrigger: {
      trigger: ".animation-section",
      toggleActions: "restart none none none",
      scrub: true,
      pin: true,
    
    }
  }
)

gsap.to(".section-bg",120,{
    scrollTrigger: {
      trigger: ".animation-section",
      toggleActions: "restart none none none",
      scrub: true,
      pin: true,
    
    },
    xPercent:-75,
    ease: "expo",
    delay:20,

    });
   let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animation-section",
      toggleActions: "restart none none none",
      start: 'center center',
      scrub: true,
        pin: true,
        
    }
  
  });

    tl.to(".left-content",50,{
        // scrollTrigger: {
        //   trigger: ".animation-section",
        //   toggleActions: "restart none none none",
        //   scrub: true,
        //   pin: true,
        
        // },
        delay:20,
        yPercent:0,
        immediateRender: false,
        ease:"curve",
        
  stagger:20,

        
    
        });
        gsap.from(".left-content",{
           delay:10,
            yPercent:2000,
            stagger:20,

        
            });

            tl1.to(".moniter-area",{
                // scrollTrigger: {
                //   trigger: ".animation-section",
                //   toggleActions: "restart none none none",
                //   scrub: true,
                //   pin: true,
                
                // },
                scale:1.2,
                ease: "expo",
                delay:50,
                duration:120
                
            
                });
            

                tl1.to(".laptop",{
                    // scrollTrigger: {
                    //   trigger: ".animation-section",
                    //   toggleActions: "restart none none none",
                    //   scrub: true,
                    //   pin: true,
                    //   start:"center center",
                    //   duration:50,
                      

                    
                    // },
                    ease: "Power2.easeOut",
                    yPercent:0,
                    opacity:1,
                    immediateRender: false,
                    yoyo:true,
                    repeat:1,
                    duration:150,
                    // repeatDelay: 2

                    
                
                    },
                    "-=5"
                    );
                    gsap.set(".laptop",{
                      yPercent:150,
                      opacity:0,



                    });
                    
                
                


                    gsap.to(".progress-container",50,{
                        scrollTrigger: {
                          trigger: ".animation-section",
                          toggleActions: "restart none none none",
                          scrub: true,
                          pin: true,
                        
                        },
                        ease: "expo",
                        delay:50,
                        xPercent:100,
                        opacity:1,
                        width:"100%"
                        
                    
                        }
                        
                        );
    
                        gsap.from(".progress-container", {
                            xPercent: 0,
                            opacity: 0,
                            ease: "expo",
                            width:0
                        });
                        // gsap.set(".progress-bar", {
                        //     xPercent: 0,
                           
                        // });
                        let tl2 =gsap.timeline
                        ({
                          scrollTrigger: {
                            trigger: ".animation-2",
                            toggleActions: "restart none none none",
                            start: 'center center',
                            scrub: true,
                              pin: true,
                              
                          }
                        
                        });
                        gsap.to(".top-globe",{
                          scrollTrigger: {
                            trigger: ".globe-area",
                            toggleActions: "restart none none none",
                            scrub: true,
                            pin: true,
                          
                          },
                          yPercent: 100,
                          duration:3,
                          ease:"expo",
                          scale:0.6,
                          delay:2

                        })
                        gsap.to(".bottom-globe",{
                          scrollTrigger: {
                            trigger: ".globe-area",
                            toggleActions: "restart none none none",
                            scrub: true,
                            pin: true,
                          
                          },
                          yPercent: -100,
                          duration:3,
                          ease:"expo",
                          scale:0.6,
                          delay:2

                        })
                        gsap.to(".globe-content",{
                          scrollTrigger: {
                            trigger: ".globe-content",
                            toggleActions: "restart none none none",
                            scrub: true,
                            pin: true,
                          
                          },
                          opacity:1,
                          delay:3,
                          ease:"expo",
                          scale:1.2,
                          duration:5
                        })
                        tl2.from("animation-2",{
                          backgroundColor:"white",
                          color:"black"

                        })
                     tl2.to(".section-content",{
                      opacity:0,
                      duration:2
                     })
                  
                     let tl3 =gsap.timeline
                     ({
                       scrollTrigger: {
                         trigger: ".section-3",
                         toggleActions: "restart none none none",
                         start: 'top',
                         pin:true,
                         ease:"expo",
                         
                           
                       }
                   

                     
                     },
                     
                     );
                  
                     tl3.to(".dot",{
                      x:140,
                      y:-20,
                      duration:0.2

                     })
                     tl3.to(".dot",{
                      x:180,
                      y:0,
                      duration:0.2

                      


                     })
                     
                     tl3.to(".dot",{
                      x:250,
                      y:100,
                      duration:0.2


                     })