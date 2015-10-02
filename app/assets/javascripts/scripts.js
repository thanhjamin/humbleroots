$(document).ready(function() {

    /* ========== SMOOTH SCROLLING BY CLICKING MAIN MENU SECTIONS ========== */

    $(".navbar-barnaul").find("a[href^='#']").on('click', function(e) {
        /* Prevent standart hrefs functions */
        e.preventDefault();
        //e.defaultPrevented;
        /* Let's scroll it
         * 1000 — scrolling delay in ms (1 second), you can change it to your value */
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top-75}, 1000);

    });

    $("#learn-more").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top-75}, 1000);
    });

    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar-barnaul").css({
                    'background-color': 'rgba(23, 132, 189, 1)',
                    '-webkit-box-shadow': '0 2px 2px -2px rgba(0, 0, 0, .52)',
                    '-webkit-transition': 'background-color 1s',
                    'transition': 'background-color 1s',
                 });
            } else {
                $('.navbar-barnaul').css({
                    'background-color': 'transparent',
                    '-webkit-box-shadow': '0 0px 0px 0px rgba(0, 0, 0, 0)'
                });
            }
        });
    }

    /* ========== FIX & UNFIX NAVBAR ON TOP & BODY TOP_MARGIN ========== */

    // /* On page load */
    // if ( $(document).width() < 768) {
    //     $('.navbar-barnaul').removeClass('navbar-fixed-top');
    //     $('body').css('margin-top','0');
    // } else {
    //     $('.navbar-barnaul').addClass('navbar-fixed-top');
    //     $('body').css('margin-top','76px');
    // };

    // /* On window resize */
    // $(window).resize(function() {
    //     if ( $(document).width() < 768) {
    //         $('.navbar-barnaul').removeClass('navbar-fixed-top');
    //         $('body').css('margin-top','0');
    //     } else {
    //         $('.navbar-barnaul').addClass('navbar-fixed-top');
    //         $('body').css('margin-top','76px');
    //     };
    // });



    /* ========== BACKGROUND IMAGES SCROLLING PARALLAX ========== */

    // $(window).stellar({
    //     horizontalScrolling: false
    // });



    /* ========== FEEDBACK FORM ========== */

    $("#feedback-form").submit(function() {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "assets/feedback.php",
            data: str,
            success: function(response) {
                if(response == 'PRINYAL') {
                    result = '<div class="alert alert-success">Thank you! We will answer you soon!</div>'; // Success message
                    setTimeout("location.reload(true);",5000);
                } else {
                    result = response;
                }
                $('#feedback_messages').html(result);
            }
        });
        return false;
    });

    //Feedback form validate
    $('#feedback-form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        success: function(element) {
            element
                .addClass('valid')
                .closest('.form-group').removeClass('error').addClass('success');
        }
    });



    /* ========== NEWSLETTER FORM ========== */

    $("#newsletter-form").submit(function() {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "assets/newsletter.php",
            data: str,
            success: function(response) {
                if(response == 'PRINYAL') {
                    result = '<div class="alert alert-success">Well done! You\'re singned up!</div>'; // Success message
                    setTimeout("location.reload(true);",5000);
                } else {
                    result = response;
                }
                $('#newsletter-messages').html(result);
            }
        });
        return false;
    });


    



    /* ========== FIT VIDEO ========== */

    // $(".video-embedd").fitVids();



    /* ========== GMAP ========== */
    // var gmap;
    //     gmap = new GMaps({
    //         div: '#gmap',
    //         lat: 53.36669,
    //         lng: 83.750005,
    //         zoomControl : true,
    //         zoomControlOpt: {
    //             style : 'SMALL',
    //             position: 'TOP_LEFT'
    //         },
    //         panControl : true,
    //         streetViewControl : true,
    //         mapTypeControl: true,
    //         overviewMapControl: false
    //     });
    //     gmap.addMarker({
    //         lat: 53.36669,
    //         lng: 83.750005,
    //         title: 'Address',
    //         infoWindow: {
    //             content: '<h5>Our address:</h5><p>Chervonnaya st., 8,<br>Barnaul,<br>Russia</p>'
    //         }
    //     });



    /* ========== COUNTDOWN ========== */
    // var tillDate = new Date();

    // tillDate = new Date(tillDate.getFullYear() + 1, 1 - 1, 1);
    // // new Date(year, mth - 1, day, hr, min, sec) - date/time to count down to
    // // or numeric for seconds offset, or string for unit offset(s):
    // // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds

    // $('.countdown').countdown({

    //     labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
    //     // The expanded texts for the counters

    //     labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
    //     // The display texts for the counters if only one

    //     until: tillDate,

    //     timezone: null,
    //     // The timezone (hours or minutes from GMT) for the target times,
    //     // or null for client local

    //     format: 'ydHMS', // Format for display - upper case for always, lower case only if non-zero,
    //     // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
    //     layout:
    //     // Build your own layout for the countdown
    //         '{y<}<li>{yn}<span>{yl}</span></li>{y>}'         // Years
    //             + '{d<}<li>{dn}<span>{dl}</span></li>{d>}'       // Days
    //             + '{h<}<li>{hn}<span>{hl}</span></li>{h>}'       // Hours
    //             + '{m<}<li>{mn}<span>{ml}</span></li>{m>}'       // Minutes
    //             + '{s<}<li>{sn}<span>{sl}</span></li>{s>}',      // Seconds


    //     tickInterval: 10 // Interval (seconds) between onTick callbacks
    // });
});