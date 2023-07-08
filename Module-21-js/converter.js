// alert('Coverter');
// function inchesToFeet(inches) {

//     const feet = inches / 12;
//     return feet;

// }

// const result = inchesToFeet(144);
// document.write("Feet = ", result, "<br>");


//Loop For sum of odd number from array
var array = [2, 3, 4, 5, 6, 7, 8, 9]
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {            //loop for odd number
        index = array[i];
        document.write(index, "<br>");
    }
}

//var array2 = [2, 3, 4, 5, 6, 7, 8]
var sum = 0;                            //loop for sum of array elements
for (var j = 0; j < array.length; j++) {
    sum = sum + array[j];
}
document.write("<br>Sum =", sum);


// Array includes,Concat,Splice
const num1 = [5, 6, 8, 9, 0, 5, 3, 2];
const num2 = [30, 40, 50]

document.write("<br>", num1.includes(30));

const newArray = num1.concat(num2);
document.write("<br>", newArray);

var x = num1.splice(1, 3);
document.write("<br>", x);




