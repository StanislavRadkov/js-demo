'use strict';

const count = 10000;

var arr = [];
var set = new WeakSet();

$('document').ready(() => {
    $('#run-with-array').click(() => {
        for (var i = 0; i < count; i++) {
            var elem = $('<span class="badge badge-primary">ELEMENT</span>');
            arr[i] = elem;
            // $('#holder').append(elem);
            // elem.remove();
        }

        console.log('USING ARRAY: DONE!');        
    });

    $('#clear-array').click(() => {
        arr.length = 0;
    });

    $('#run-with-weakSet').click(() => {
        for (var i = 0; i < count; i++) {
            var elem = $('<span class="badge badge-primary">ELEMENT</span>');
            set.add(elem);
            $('#holder').append(elem);
            elem.remove();
        }

        console.log('USING WEAKSET: DONE!');
    });

});
