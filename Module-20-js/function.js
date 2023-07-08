alert('Hellow World!')
//20.2
function income(money) {
    money = money + 10;
    document.write("Monthly Earning = ", money);
}
income(200);

//20.3
function add(a, b, c, d, e) {
    var sum;
    sum = a + b + c + d + e;
    document.write("<br>Sum of a,b,c,d,e = ", sum);

}
add(2, 3, 4, 5, 6);
//20.4
function add2(money1, money2) {

    var sum = money1 + money2;
    document.write("<br>Collected Money1 = ", money1);
    document.write("<br>Collected Money2 = ", money2);
    document.write("<br>Total money for buying singaras = ", sum);
    return sum;
}
function quantity() {
    var TotalMoney = add2(60, 30);
    document.write("<br>Price per singara = 10");
    var AmountOfSingaras = TotalMoney / 10;
    return AmountOfSingaras;
}
document.write("<br>Total Quantity of Singaras = ", quantity());
//20.5
function square(x, y) {
    var p = Math.pow(x, y);
    document.write("<br>Square of " + x + " to the power " + y + " = ", p);
}
var a = prompt("Enter first number = ");
var b = prompt("Enter second number = ");
square(a, b);


document.write(t);