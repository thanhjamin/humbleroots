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
});