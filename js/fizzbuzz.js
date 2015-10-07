window.onload = (function(){

var ask = parseInt(prompt("Supply a number"),10);

if (isNaN(ask))
{
    alert("You did not enter in a number. Please reload page and try again.");
    console.log("User did not enter a number.");
}

fizzbuzz(ask);
});


function fizzbuzz(max) {
for (var i=1;i<=max;i++)
{
    if (i%3 === 0 && i%5 === 0)
    {
        document.write("<br> fizzbuzz");
    } else if (i%5 === 0) {
        document.write("<br> buzz");
    } else if (i%3 === 0) {
        document.write("<br> fizz");
    } else {
        document.write("<br>",i);
    }

}

}