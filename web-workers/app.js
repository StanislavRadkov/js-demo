'use strict';

function doNothingSlowly(num) {
    for (var i = 0; i < num; i++)
        for (var j = 0; j < num; j++)
            for (var k = 0; k < num; k++)
                                ;
}

$('document').ready(() => {
    $('#calculate').click(() => {
        $('#result').text('Working');
        doNothingSlowly(2000);
        
    });
});

$('document').ready(() => {
    $('#webworker').click(() => {
        var myWorker = new Worker('web-worker.js');
        $('#result').text('Working');
        
        myWorker.onmessage = function(e) {
            $('#result').text(e.data);
        }
    });
});