document.addEventListener('DOMContentLoaded', function() {
   
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
        interval: 3000, 
        wrap: true
    });

    
    setInterval(function() {
        myCarousel.next(); 
    }, 3000); 
});
