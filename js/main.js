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



//  Gallery
function openImage(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    
    modal.style.display = 'block';
    modalImage.src = src;
  }
  
  function closeImage() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  
//  Gallery

    // Testimonials carousel
  
    
})(jQuery);
// pop form

function showPopup() {
    var popupMain = document.getElementById('popUpMain');
    var overlay = document.getElementById('overlay');
    var hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

    if (!hasSeenPopup) {
        popupMain.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closePopup() {
    sessionStorage.setItem('hasSeenPopup', 'true');
    document.getElementById('popUpMain').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var cancelBtn = document.getElementById('cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closePopup);
    }
});

// Call showPopup on page load
window.onload = showPopup;

// pop form
// total-count
// script.js



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
                                        