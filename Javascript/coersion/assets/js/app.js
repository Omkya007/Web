var cl=console.log;

var x=1000;
cl(x); //global scope

function test(){
    cl(y);
     var y=100; //function scope
    cl(y);
    var x=1000;
    x=1000;
    cl(x);
}
test();
cl(x);


//coersion

// var x="10";
// var y="20";
// var res=x+y;
// cl(res ,typeof res);

// var x=10;
// var y;
// var res=x+y;
// cl(res);

// var x="10";
// var y=true;
// var res=x+y;
// cl(res);

// var x=10;
// var y=true;
// var res=x+y;
// cl(res);

// var x=10;
// var y=null;
// var res=x+y;
// cl(res);


// var a=10;
// var b=10;
// var c='10';
// var e=10;
// var y;
// var p=true;


// var res=a+b+y+c+e-p;
// cl(res);

var c1=1;
var b1=++c1 + ++c1 + ++c1;
cl(b1);

var c1=1;
var b1=c1++ + c1++ + c1++;
cl(b1);

var a="200"-10+10+true-"200"+"200"+"100";
cl(a);



