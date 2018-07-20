document.writeln("<h1>Factorials of 1 to 10</h1>");
document.writeln("<table>");

for(var i = 0; i <= 10; i++) 
  document.writeln("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
  document.writeln("</table>");
  
  function factorial(number){
    if(number <=1)
      return 1;
    else
      return number * factorial(number -1);}