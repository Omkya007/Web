var a=[10,20,30,40];

console.log(a);
var info=document.getElementById("info2");
info.innerHTML=a;

//to update an array

a[3]=50;
console.log(a);
var info=document.getElementById("info3");
info.innerHTML=a;
// to get an random index 
var getage=a[3];
console.log(getage);
var info =document.getElementById("info4");
info.innerHTML=getage;

// to delete an element from array
delete a[3];
console.log(a);
var info=document.getElementById("info5");
info.innerHTML=a;

a[4]="50";

var info=document.getElementById("info");
info.innerHTML=a;



var skills=["Html","Css","Js","Jquery","Bootstrap","Saas","Angular"];
skills[skills.length-1]="javascript";

console.log(skills);
var info=document.getElementById("info6");
info.innerHTML=skills;

var getSkills=skills[5];
console.log(getSkills);

skills[4]="React";
console.log(skills);

delete skills[3];
console.log(skills);

console.log(skills[4]);

var info1=document.getElementById("info1");
info1.innerHTML=skills;



