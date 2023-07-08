// variable ,string,boolean,numeric
alert('Learn JavaScript');
document.write(isSingle + "<br>");
var age = 28;
var name = "Toriqul";
var sex = 'male';
var isSingle = true;
var tori = 15;

document.write(age + "<br>");
document.write(isSingle + "<br>");
document.write(name + "<br>");
document.write(sex + "<br>");
document.write(age + tori);
//value change of previous variable
var price = 10;
price = price + 10;
document.write("<br>New price = ", price);
//parseInt
var _price = '120';
document.write("<br>" + _price + "<br>");
// covert string to number
var _priceNumber = parseInt(_price);
_priceNumber += 10;
document.write(_priceNumber + "<br>");

//simple sum and sub

var given, totalCost, remaining;
given = 1000;
document.write("<br>Mom given taka = " + given);
totalCost = 700;
document.write("<br>Total Cost = " + totalCost);
remaining = given - totalCost;
document.write("<br>remaining= " + remaining);

// average
var math = 75.25, bio = 65, phy = 80, che = 35.45, bangla = 99.50;
var sum = math + bio + phy + che + bangla;
var average = sum / 5;
document.write("<br>" + average.toFixed(4));

//reminder
var x = 23;
var y = 5;
var z = x % y;
document.write("<br> 23 is divided by 5 and remaining in hand is =" + z)


