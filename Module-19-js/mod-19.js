alert("virus");
var age = [20, 30, 49, 50, 55];
document.write("Index Number = " + age.indexOf(60));
document.write("Index Number = " + age.indexOf(49));

// while loop
var completeModule = 0;
while (completeModule <= 80) {
    document.write("<br>Your course is Incomplete " + completeModule);
    completeModule++;
}
/* For loop */
var i;
for (i = 0; i <= 10; i++) {
    document.write("<br>Number is =", i);
}
for (i = 0; i <= 10; i++) {
    document.write("<br> I Love You Naba ", i);
}
// break
var numbers = [30, 35, 40, 45, 50, 55, 60]
for (var j = 0; j < numbers.length; j++) {
    if (numbers[j] >= 40) {
        break;
    }
    document.write("<br>", numbers[j]);

}
//continue
var numbers = [30, 35, 40, 45, 50, 32, 23]
for (var j = 0; j < numbers.length; j++) {
    var number = numbers[j]
    if (number >= 40) {
        continue;
    }
    document.write("<br> New", numbers[j],);

}

var t = 10;
while (t >= 1) {
    document.write("<br>", t, " Naba");
    t--;
}
var t;
for (t = 10; t > 0; t--) {
    document.write("<br>Toriqul ", t);
}


// Practice Prblem indexof,replace,push,pop,shift,unshift,splice
var fruits = ['Apple', 'Banana', 'Orange'];
document.write("<br>Index Number of Banana =", fruits.indexOf('Banana'));
fruits[1] = "Mango";
document.write("<br>", fruits);
fruits.pop();
document.write("<br>", fruits);
fruits.push('Watermilon');
document.write("<br>", fruits);

var mobile = ['Nokia', 'samsung', 'Oppo', 'Symphony', 'itel'];
var i = 0;
while (i <= 4) {
    var mobileName = mobile[i];
    document.write("<h1>I used " + mobileName + "</h1>");
    i++;
}