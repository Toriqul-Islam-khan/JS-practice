// array

var numbers = [12, 13, 23, 34, 17];
document.write(numbers[0]);
document.write("<br>" + numbers.length + "<br>");

//array string

var friendName = ["toriqul", "mamun", "sakib", "tamal", "saiful "];
document.write(friendName);
friendName[1] = "nava";          //position 1 is replace by naba position 2 for sakib
document.write("<br>" + friendName[0]);
document.write(" " + friendName[1]);
document.write("<br>" + friendName.length);

// array push
friendName.push("ripan"); //push use to add array element at the last position
document.write("<br>" + friendName);

var cutString = friendName.pop();  //pop return a value
document.write("<br>" + cutString);

document.write("<br>" + friendName);

// replace,push,pop,shift,unshift,splice

var marks = [75, 80, 85, 90, 95]
document.write("<br>" + marks);
marks[2] = 55;
document.write("<br>" + marks);
marks.push(100);
document.write("<br>" + marks);
marks.pop();
document.write("<br>" + marks);
marks.shift();
document.write("<br>" + marks);
marks.unshift(75);
document.write("<br>" + marks);
marks.splice(1, 2);
document.write("<br>" + marks);
// 
// if/else

var cost = 500, money = 1000;
if (cost <= money) {
    document.write("<br> I can go there");
}
else {
    document.write("I can't go you");
}

var isGraduate = false, salary = 20000, car = 2;
if (isGraduate == true && salary >= 20000 && car >= 1) {
    document.write("<br>Beye korte paro")
}
else {
    document.write("<br>Beyer dorker nai");
}
var isGraduate = false, salary = 20000;

if (isGraduate === true || salary >= 25000) {
    document.write("<br>You can marry");
}
else {
    document.write("<br>You cann't marry");
}