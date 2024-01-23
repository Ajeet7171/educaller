(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    // nav


 $$(document).ready(function() {
    // Toggle mobile menu visibility
    $('.hamberger-button').click(function() {
        $('.mobile-menu').slideToggle();
    });

    // Close mobile menu when a menu item is clicked
    $('.mobile-menu a').click(function() {
        $('.mobile-menu').slideUp();
    });

    // Close mobile menu when clicking outside the menu
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.mobile-menu').length && !$(e.target).closest('.hamberger-button').length) {
            $('.mobile-menu').slideUp();
        }
    });

    // Prevent menu close when clicking on the menu itself
    $('.mobile-menu').click(function(e) {
        e.stopPropagation();
    });
});
 

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
// pop form
document.addEventListener("DOMContentLoaded", function () {
    var inquiryModal = new bootstrap.Modal(document.getElementById('inquiryModal'), {
        backdrop: 'static',
        keyboard: false
    });
    inquiryModal.show();
});
// pop form
// total-count
// script.js

document.addEventListener("DOMContentLoaded", function () {
    odometerInit();
});

function odometerInit() {
    const odometerItems = document.querySelectorAll('.odometer');
    if (odometerItems.length > 0) {
        odometerItems.forEach(function (item) {
            let theme = item.dataset.theme;
            if (!theme) {
                theme = 'default';
            }

            let odometerInstance = new Odometer({
                el: item,
                theme: theme,
                format: item.dataset.format
            });
            odometerInstance.render();
            odometerInstance.update(item.dataset.final);
        });
    }
}

// total-count


    //  Gallary



    $(document).ready(function () {
        $('.edu-gallery-grid').on('click', function () {
            // Get the image source
            var imgSrc = $(this).find('.thumbnail img').attr('src');

            // Create a modal container
            var modalContainer = $('<div class="modal-container"></div>');

            // Create a modal image
            var modalImage = $('<img src="' + imgSrc + '" alt="Large Image">');

            // Append the modal image to the modal container
            modalContainer.append(modalImage);

            // Append the modal container to the body
            $('body').append(modalContainer);

            // Close the modal on click
            modalContainer.on('click', function () {
                $(this).remove();
            });
        });
    });

    //  Gallary
                                        
                                        //   cousre js


                                        // footer signup button
                                        function clearPlaceholder(element) {
                                            element.placeholder = '';
                                        }
                                    
                                        function restorePlaceholder(element) {
                                            element.placeholder = 'Your email';
                                        }
                                    
                                        // footer signup button

                                        // scroll


                                        $(document).ready(function() {
                                            // Show or hide the back-to-top button based on scroll position
                                            $(window).scroll(function() {
                                                if ($(this).scrollTop() > 100) {
                                                    $('.back-to-top').fadeIn();
                                                    $('body').addClass('scrolled');
                                                } else {
                                                    $('.back-to-top').fadeOut();
                                                    $('body').removeClass('scrolled');
                                                }
                                            });
                                        
                                            // Scroll to the top when the button is clicked
                                            $('.back-to-top').click(function() {
                                                $('html, body').animate({scrollTop: 0}, 800);
                                                return false;
                                            });
                                        });
                                        // scroll

                                        // scrollig
                                        