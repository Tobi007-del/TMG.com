var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

var ctx = canvas.getContext('2d');
ctx.font = '4vw Cursive';
ctx.fillText("Hello world!", 50, 50);


document.body.appendChild(canvas);


// var text = document.createElementNS('http://www.w3.org/2000/svg','text');
// text.setAttribute('x','0');
// text.setAttribute('y','50');
// text.style.fontFamily = 'Times New Roman';
// text.style.fontSize = '50';
// text.textContent = 'Hello World!';

// svg.appendChild(text);
// document.body.appendChild(svg);

myObject = {};
john = {firstname: "John", lastname: "Doe", fullname: "John Doe"};
billy = {
 firstname: "Billy",
 lastname: undefined,
 fullname: "Billy"
};
console.log(john.fullname); // John Doe
console.log(billy.firstname); // Billy
 
alert(john.fullname);

var greet = "Hello", who = "World";
console.log("%s,%s!",greet,who);


// function elementAt(event) {
//     return document.elementFromPoint(event.clientX, event.ClientY);
// }
// elementAt(canvas)

var w1 = new Worker('#1');
w1.onmessage = function (e) {
 console.log(e.data); // 'reached JS "file"
};
