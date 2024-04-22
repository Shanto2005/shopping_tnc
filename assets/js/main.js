document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#mntk_mmenu" ),
            "(max-width: 991px)"
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector( "a[href='#mntk_mmenu']" )
            .addEventListener( "click", ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
        });
    }
);


$('.bannerSlider').slick({
    infinite: false,
    fade: true,
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// FilterableProduct
// $(function () {
		
// 	var filterList = {	
// 		init: function () {
// 			$('#gallery').mixItUp({
// 				selectors: {
//   			  target: '.gallery-item',
//   			  filter: '.filter'	
//   		  },
//   		  load: {
//     		  filter: '.print, .strategy, .logo, .web'
//     		}     
// 			});		
// 		}
// 	};	
// 	filterList.init();	
// });


$('.sponsorSlideParent').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  $('.btmSliderParent').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});



document.addEventListener("DOMContentLoaded", function() {
  const shortContent = document.getElementById("mainberShortContent");
  const longContent = document.getElementById("mainberLongContent");
  const shortBtn = document.getElementById("shortBtn");
  const longBtn = document.getElementById("longBtn");
  const mainberShortContent = document.getElementById("mainberShortContent");
  
  shortBtn.addEventListener("click", function(){
    shortContent.style.display = "block";
    longContent.style.display = "none";
    mainberShortContent.style.display = "flex";
  });
  
  longBtn.addEventListener("click", function(){
    shortContent.style.display = "none";
    longContent.style.display = "block";
  });
});



$('.bannerContent').slick({
  infinite: true,
  autoplay: true,
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});



