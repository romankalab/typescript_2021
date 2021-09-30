let a =2;
let b = 3;
let c = 4;
let equality = 0;
if (a == b)
    equality++;
if (b == c)
    equality++;
if (a != b && a == c)
    equality++;
if (equality != 0)
    equality++;
console.log(equality);