function doNothingSlowly(num) {
    for (var i = 0; i < num; i++)
        for (var j = 0; j < num; j++)
            for (var k = 0; k < num; k++);
};

doNothingSlowly(2000);

postMessage("Done");