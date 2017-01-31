 var pointsArray = document.getElementsByClassName('point');
 
 var animatePoints = function(points) {

                var revealPoint = function(arrayIndex){
                     arrayIndex.style.opacity = 1;
                     arrayIndex.style.transform = "scaleX(1) translateY(0)";
                     arrayIndex.style.msTransform = "scaleX(1) translateY(0)";
                     arrayIndex.style.WebkitTransform = "scaleX(1) translateY(0)";
                }

            forEach(points, revealPoint);
 };
animatePoints(pointsArray);

window.onload = function() {
         if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener("scroll", function(event) {
             if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
 }