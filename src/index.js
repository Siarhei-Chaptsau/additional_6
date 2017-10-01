module.exports = function zeros(expression) {
  var counter = 0;
  var expression;
  var expressionNumber = parseInt(expression);
  function factorial(n) {
    return (n >= 1) ? n * factorial(n - 1) : 1;
  }  

  var result = factorial(expressionNumber);

  if ( result % 10 === 0) {
    counter++;
  }
  alert(counter);
}
