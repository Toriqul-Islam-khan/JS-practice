alert('tikp')

//22.1
function add(a, b) {
    var sum = a + b;
    return sum;
}
document.write(add("Toriqul", "Islam "));

function triangle(a, b, c) {
    let s = a + b + c;
    let volume = Math.sqrt(s / 2);
    return volume;
}
document.write("<br>Volume of triangle is = ", triangle(4, 6, 8));

//23.4

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(" foo-bar<br>");
    }
    else if (i % 3 === 0) {
        document.write(" foo<br>");
    }
    else if (i % 5 === 0) {
        document.write(" bar<br>");
    }
    else {
        document.write("<br>", i, "<br>");
    }

}
//23.5

function woodrequirment(chairQuantity, tableQuantity, bedQuantity) {
    const chairwood = 10;
    const tablewood = 20;
    const bedwood = 30;
    totalwood = chairQuantity * chairwood + tableQuantity * tablewood + bedQuantity * bedwood;
    return totalwood;
}
document.write("<br>You Need Total-Wood =", woodrequirment(2, 2, 2)," cft");
