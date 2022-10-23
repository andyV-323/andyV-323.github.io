		
//how fast the logo stays on then fades out
		$(window).on("load", function(){
			$(".loader .inner").fadeOut(1000, function() {
				$(".loader").fadeOut(1100);
			});
		})
	



//how fast the slides fade to next
	$ (document).ready(function(){

		$('#slides').superslides({
			animation:'fade', 
			play: 3100,
			pagination: 0

		});
//how many skill items are display per pixel
	/*	$('.owl-carousel').owlCarousel({
    loop:true,
  	items:4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:4
        },
        938:{
            items:6
        }
    }
});
		//the carousel and pie chart animation... when topOffset is reached start the piechart animation
		var skillsTopOffset = $(".skills").offset().top;

		$(window).scroll(function(){

			console.log(window.pageYOffset);
				
				if(window.pageYOffset > skillsTopOffset - $(window).height() + 700){

					$('.chart').easyPieChart({
			easing: 'easeInOut',
			barColor: '#fff',
			trackColor: false,
			scaleColor:false,
			lineWidth: 4,
			size: 152,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});


			}
		});
*/

//the animation for the letters being typed on slides
		var typed = new Typed(".typed", {
			strings: ["Software Engineer.", "Student.", "Gamer."],
			typeSpeed: 110,
			loop: true,
			startDelay: 1000,
			showCursor: false

		});

		
		//the isotope animation for the thumbnails
		
		$(".items").isotope({
			filter: '*',
			animationsOptions: {
				duration: 1500,
				easing:'linear',
				queue: false
			}
		});


//filter buttons 
		$("#filters a").click(function() {
			$("#filters .current").removeClass("current");
			$(this).addClass("current");

			var selector = $(this).attr("data-filter");

			$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing:'linear',
				queue: false
			}

		});

			return false;

		});
		});

		$(".nav-item  a").click(function(e) {
			e.preventDefault();

			var targetElement = $(this).attr("href");
			var targetPosition = $(targetElement).offset().top;
			$("html, body").animate({scrollTop: targetPosition - 100},"slow");
		})
//hamburger on small navigation bar menu open and close
		const hamburger = document.querySelector(".hamburger");
		const navMenu = document.querySelector(".nav-menu");

		hamburger.addEventListener("click" , () => {
			hamburger.classList.toggle("active");
			navMenu.classList.toggle("active");
		})

		document.querySelectorAll(".nav-link").forEach(n => n
			.addEventListener("click", () => {
				hamburger.classList.remove("active");
			navMenu.classList.remove("active");
			}))
		function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
			

		





		
	

	