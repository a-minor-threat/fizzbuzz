window.onload = (function(){

for (var i=1;i<=100;i++)
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
});
