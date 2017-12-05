var buffer = new ArrayBuffer(16);

var int32View = new Int32Array(buffer);
int32View[0] = 99999;
console.log(int32View);

int32View[1] = 3.232;
console.log(int32View);