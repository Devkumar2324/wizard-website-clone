function page1animation(){
  let t1 = gsap.timeline();
t1.from("nav h1, nav h4  ,nav button", {
  y:-20,
  opacity:0,
  duration:0.5,
  stagger:0.2,

})
t1.from(".center-part1 h1", 
{
  opacity:0,
  x:-200,
  delay:0.2,
 
  duration:0.8

})
t1.from(".center-part1 p",{
  opacity:0,
  x:-100,
})
t1.from(" .center-part1 button",{
  opacity:0,
  duration:0.5


})
t1.from(" .center-part2 img",{
  opacity:0,
  duration:0.8,
  

},"-=1")


}
page1animation();
function sectionimage(){
  let t3=gsap.timeline({
    scrollTrigger:{
      trigger:".section-images",
      scroller:"body",
      markers:false,
      start:"top 70%",
      end:"top 90%",
      scrub:3,
    }
  })
  t3.from(".section-images img",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:1,
    delay:1.5,
    
  })
}
sectionimage();
function middlesection(){
  let t2 = gsap.timeline({
    scrollTrigger:{
      trigger:".services",
      scroller:"body",
      markers:false,
      start:"top 90%",
      end:"top 0",
      
      end:"top 90%",
      scrub:2,
    }
  })
  t2.from(" .services ",{
    y:50,
    opacity:0,
    duration:0.2,
    delay:1,
   
  }
  )
  
}
middlesection();

function mainsection(){
  let t4=gsap.timeline({
    scrollTrigger:{
      trigger:".container",
      scroller:"body",
      markers:false,
      start:"top 40%",
      end:"top 0",
      scrub:2,
    }
  })
  t4.from(".elm.line1.left",{
    x:-300,
    opacity:0,
   duration:0.8,
  },"dev")
  t4.from(".elm.line1.right",{
    x:300,
    opacity:0,
    duration:0.8,
  
  },"dev")
  t4.from(".elm.line2.left",{
    x:-300,
    opacity:0,
    duration:0.8,
  
  },"dev1")
  t4.from(".elm.line2.right",{
    x:300,
    opacity:0,
    duration:0.8,
  },"dev1")

}
mainsection();




