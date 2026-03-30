(function ($) {
    $.fn.zodiacCard = function () {

        // Style each card
        this.css({
            "background": "#cebcff",
            "padding": "20px",
            "border-radius": "10px",
            "width": "400px",
            "height": "225px",
            "margin": "20px auto",
            "box-shadow": "0 2px 6px rgba(8, 5, 39, 0.64)",
            "display": "none",   // start hidden for animation
            "align-items": "center",
            "justify-content": "center",
            "text-align": "center"
        });

        // Slide down animation
        this.slideDown(400);

        return this; // keep plugin chainable
    };
})(jQuery);
