//Scope
var a= 12;
const b=33;
let c=44;
var d=50;

document.write(`<p> a= ${a}</p>`);
document.write(`<p> b= ${b}</p>`);
document.write(`<p> c= ${c}</p>`);
document.write(`<p> d= ${d}</p><hr>`);

if(d>20){
    var x=100;
    let y= 200;
    const z=300;

    document.write(`<p> x= ${x}</p>`);
    document.write(`<p> y= ${y}</p>`);
    document.write(`<p> z= ${z}</p><hr>`);
}

document.write(`<p> x= ${x}</p>`);
// document.write(`<p> y= ${y}</p>`);
// document.write(`<p> z= ${z}</p>`);


var isAdmin=false;
document.write(`<p> isAdmin= ${typeof(isAdmin)}</p>`);
document.write(`<p> isAdmin= ${isAdmin}</p>`);

var title ="welcome to js";
document.write(`<p> title= ${title}</p>`);

var yy=34.44;
document.write(`<p>yy=${typeof(yy)}</p>`);
document.write(`<p> yy= ${yy}</p>`);
//array
var colors=["orange", "blue", 100, 103.00 ,true]
document.write(`<p>colors=${typeof(colors)}</p>`);
document.write(`<p> colors= ${colors}</p>`);

//objects
var user={
    name:"pavan", 
    email:"jdis@gmail.com"
};
document.write(`<p>user=${typeof(user)}</p>`);
document.write(`<p> user= ${user}</p>`);

function defaultFun()
{
    document.write(`<p>This is default function</p>`);
}
defaultFun();
function parameterFun(name,email){
    document.write(`<p>This is parameterized function</p>`);
    document.write(`<p>first  parameter is: ${name} function</p>`);
    document.write(`<p>second  parameter is: ${email} function</p>`);
}
parameterFun("pavan", "admin@gmail.com");