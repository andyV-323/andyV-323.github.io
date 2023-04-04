function myFunction() {
		var dots = document.getElementById("dots");
		var moreText = document.getElementById("more");
		var btnText = document.getElementById("myBtn");
		var image = document.getElementById("memoji2");

		if (dots.style.display === "none") {
		dots.style.display     = "inline";
		btnText.innerHTML      = "Read more";
		moreText.style.display = "none";
		image.style.marginTop  = "250px";
    } else {
		dots.style.display     = "none";
		btnText.innerHTML      = "Read less";
		moreText.style.display = "inline";
		image.style.marginTop  = "450px";
    }
}
//how fast the logo stays on then fades out
$(window).on("load", function() {
    $(".loader .inner").fadeOut(1000, function() {
        $(".loader").fadeOut(1100);
    });
})


//the animation for the letters being typed on slides
$(document).ready(function() {
    var typed = new Typed(".typed", {
        strings: ["&lt; &#8725; Software Engineer&gt;", "&lt; &#8725; Mobile App Developer&gt;",
            "&lt; &#8725; Full Stack Developer&gt;", "&lt; &#8725; Student&gt;"
        ],
        typeSpeed: 70,
        backspeed: 200,
        smartBackspace: true,
        loop: true,
        showCursor: true

    });


    //the isotope animation for the thumbnails

    $(".items").isotope({
        filter: '*',
        animationsOptions: {
            duration: 1500,
            easing: 'linear',
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
                easing: 'linear',
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
    $("html, body").animate({ scrollTop: targetPosition - 100 }, "slow");
})
//hamburger on small navigation bar menu open and close
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n
    .addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));