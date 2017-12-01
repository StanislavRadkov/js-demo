'use strict';

const count = 10000;

var arr = [];
var map = new WeakMap();

$('document').ready(() => {
    $('#run-with-array').click(() => {
        for (var i = 0; i < count; i++) {
            arr[i] = $('<span class="badge badge-primary">ELEMENT</span>')[0];
            $('#holder').append(arr[i]);

        }

        for (var i = 0; i < count; i++) {
            arr[i].remove();
        }

        console.log('USING ARRAY: DONE!');        
    });

    $('#clear-array').click(() => {
        arr.length = 0;
    });

    $('#run-with-weakMap').click(() => {
        for (var i = 0; i < count; i++) {
            map[i] = $('<span class="badge badge-primary">ELEMENT</span>')[0];
            $('#holder').append(map[i]);
            map[i].remove();
        }
        
        for (var i = 0; i < count; i++) {
            map[i].remove();
        }

        console.log('USING WEAKMAP: DONE!');
    });

});
