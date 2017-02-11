/**
 * iRandomColor v1.0.0 
 * Copyright 2014, created by prasanth@codemagosLab
 * created for random coloring html elements 
 */
(function ($) {
    $.fn.iRandomColor = function (param) {
        var settings = $.extend({
            colors: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6',
                '#34495e', '#16a085', '#27ae60', '#2980b9', '#f1c40f',
                '#e74c3c', '#e67e22', '#F62459', '#F22613', '#d35400',
                '#bdc3c7','#1388e8'
            ],
            shuffle: false
        }, param);
        if (settings.shuffle === true) {
            settings.colors = shuffleArray(settings.colors);
        }
        function shuffleArray(array) {
            var counter = array.length, temp, index;
            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * counter);
                // Decrease counter by 1
                counter--;
                // And swap the last element with it
                temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        }
        function getColor(no) {
            var colorArrayLimit = settings.colors.length - 1;
            if (no > colorArrayLimit) {
                var noDiff = no - colorArrayLimit - 1;
                return getColor(noDiff);
            } else {
                return settings.colors[no];
            }
        }
        var $elem = $(this);
        $elem.each(function (count) {
            $(this).css({
                'background': getColor(count)
            });
        });
        return this;
    };
})(jQuery);



/*
new file added by ashik
hello world
*/
