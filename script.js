var btn = document.querySelector("#icn i");
var pots = document.querySelector("#pots ");
var img = document.querySelector("#pots img");
var p = document.querySelector("#pots p");

var pots1 = document.querySelector("#pots1 ");
var img1 = document.querySelector("#pots1 img");
var p1 = document.querySelector("#pots1 p");
var know1 = document.querySelector("#know1");

var pots2 = document.querySelector("#pots2 ");
var img2 = document.querySelector("#pots2 img");
var p2 = document.querySelector("#pots2 p");
var know2 = document.querySelector("#know2");

var pots3 = document.querySelector("#pots3 ");
var img3 = document.querySelector("#pots3 img");
var p3 = document.querySelector("#pots3 p");
var know3 = document.querySelector("#know3");
var know = document.querySelector("#know");
var count = 0;
var big = document.querySelector("#big ");

var h3 = document.querySelector("#overlay h3 ");

h3.addEventListener("click",function(){
    document.querySelector("#overlay").style.transform='translateY(-100%)';
    document.querySelector("#overlay").style.transition = 'all 1s linear';

});


btn.addEventListener("click", function () {
    count++;
    if (count === 1) {
        big.style.opacity = '0';
        // big.style.transition = "width 1s ease";
        big.style.transition = 'all 1s linear';
        pots.style.transform = "scale(1.5)";
        img.style.transform = "scale(1.5)";
        pots.style.transition = "width 1s ease";
        pots.style.transition = 'all 1s linear';

        pots.style.left = '100px';
        pots.style.top = '280px';
        p.style.display = 'flex';
        know.style.display = 'flex';

        pots1.style.transition = "width 1s ease";
        pots1.style.transition = 'all 1s linear';
        pots1.style.left = '550px';

        pots2.style.left = '820px';
        pots2.style.transition = "width 1s ease";
        pots2.style.transition = 'all 1s linear';

        pots3.style.left = '1100px';
        pots3.style.transition = "width 1s ease";
        pots3.style.transition = 'all 1s linear';

    }
    if (count === 2) {
        pots1.style.transition = "width 1s ease";
        pots1.style.transition = 'all 1s linear';
        pots1.style.left = '550px';

        pots2.style.left = '820px';
        pots2.style.transition = "width 1s ease";
        pots2.style.transition = 'all 1s linear';

        pots3.style.left = '1100px';
        pots3.style.transition = "width 1s ease";
        pots3.style.transition = 'all 1s linear';



    }
    if (count === 3) {
        pots.style.transform = "scale(1)";
        img.style.width = "130px";
        img.style.height = "130px";
        pots.style.transition = "width 1s ease";
        pots.style.transition = 'all 1s linear';
        pots.style.left = '1100px';
        pots.style.top = '420px';



        pots1.style.transform = "scale(1.5)";
        img.style.transform = "scale(1.5)";
        pots1.style.transition = "width 1s ease";
        pots1.style.transition = 'all 1s linear';
        p1.style.display = 'flex';
        know1.style.display = 'flex';


        pots1.style.left = '100px';
        pots1.style.top = '280px';
        p.style.opacity = '0';
        know.style.opacity = '0';

        pots2.style.transition = "width 1s ease";
        pots2.style.transition = 'all 1s linear';
        pots2.style.left = '550px';

        pots3.style.left = '820px';
        pots3.style.transition = "width 1s ease";
        pots3.style.transition = 'all 1s linear';

    }
    if (count === 4) {
        pots1.style.transform = "scale(1)";
        img.style.transform = "scale(-0.2)";
        pots1.style.transition = "width 1s ease";
        pots1.style.transition = 'all 1s linear';
        pots1.style.left = '1100px';
        pots1.style.top = '420px';



        pots2.style.transform = "scale(1.5)";
        img.style.transform = "scale(1.5)";
        pots2.style.transition = "width 1s ease";
        pots2.style.transition = 'all 1s linear';
        p2.style.display = 'flex';
        know2.style.display = 'flex';


        pots2.style.left = '100px';
        pots2.style.top = '280px';
        p1.style.opacity = '0';
        know1.style.opacity = '0';

        pots3.style.transition = "width 1s ease";
        pots3.style.transition = 'all 1s linear';
        pots3.style.left = '550px';

        pots.style.left = '820px';
        pots.style.transition = "width 1s ease";
        pots.style.transition = 'all 1s linear';

    }
    if (count === 5) {
        pots2.style.transform = "scale(1)";
        img.style.transform = "scale(-0.2)";
        pots2.style.transition = "width 1s ease";
        pots2.style.transition = 'all 1s linear';
        pots2.style.left = '1100px';
        pots2.style.top = '420px';



        pots3.style.transform = "scale(1.5)";
        img.style.transform = "scale(1.5)";
        pots3.style.transition = "width 1s ease";
        pots3.style.transition = 'all 1s linear';
        p3.style.display = 'flex';
        know3.style.display = 'flex';


        pots3.style.left = '100px';
        pots3.style.top = '280px';
        p2.style.opacity = '0';
        know2.style.opacity = '0';

        pots.style.transition = "width 1s ease";
        pots.style.transition = 'all 1s linear';
        pots.style.left = '550px';

        pots1.style.left = '820px';
        pots1.style.transition = "width 1s ease";
        pots1.style.transition = 'all 1s linear';

    }

})



var t1=gsap.timeline();
t1
.from("#para ",{
    opacity:0,
     x: -180,
     stagger:.4,
      ease:Expo.easeInOut,
     duration:5
 })
.from("#b ",{
    opacity:0,
     x: -180,
     stagger:.7,
      ease:Expo.easeInOut,
     duration:2
 })
.from("#big ",{
    opacity:0,
     x: -180,
     stagger:.4,
      ease:Expo.easeInOut,
     duration:2
 })
.from("#a ",{
   opacity:0,
    x: -180,
  stagger:.4,
     ease:Expo.easeInOut,
    duration:2
})

.from("#pots ",{
    opacity:0,
     y: 180,
   stagger:.1,
      ease:Expo.easeInOut,
     duration:2
 })
 .from("#pots1 ",{
    opacity:0,
     y: 180,
   stagger:.1,
      ease:Expo.easeInOut,
     duration:2
 })
 .from("#pots2 ",{
    opacity:0,
     y: 180,
   stagger:.1,
      ease:Expo.easeInOut,
     duration:2
 })

 .from("#nav ",{
    opacity:0,
     y: -180,
   stagger:.1,
      ease:Expo.easeInOut,
     duration:2
 })
 .from("#icn ",{
    opacity:0,
     x: 180,
     stagger:.1,
      ease:Expo.easeInOut,
     
 })