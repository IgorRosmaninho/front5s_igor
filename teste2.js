

var a = parseInt(1);
var j ={};



for (var i = a + 0.1 ; i < a + 0.5 ; i += 0.1){
    var ii = i.toFixed(1);
    console.log(i)
    console.log(a)
    console.log(ii)
    j[ii] = ii;
}

console.log(j)


