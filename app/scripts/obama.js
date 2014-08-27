// obama.js
( function($) {
    // document.ready
    $( function() {
        // set the date we're counting down to
        var target_date = new Date("Jan 20, 2017").getTime();

        // get tag element
        var $countdown = $("#countdown");
        var recalculate = function () {
            // variables for time units
            var days, hours, minutes, seconds;

            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            // do some time calculations
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);

            /*figured this out like a boss, Needed to convert the int
            to a string and then take take the string and give it a color
            with a new var */

            var n = seconds.toString();
            var color = n.fontcolor("darkred");

            var sLetter = "s";
            var sColored = sLetter.fontcolor("darkred");

            // format countdown string + set tag value
            $countdown.html( days + "d, " + hours + "h, "
            + minutes + "m, " + color + sColored );
        };
        // run once on pageload
        recalculate();

        // update the tag with id "countdown" every 1 second
        setInterval(recalculate, 1000);
    });
})(jQuery);
