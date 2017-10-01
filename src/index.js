module.exports = function zeros(expression) {
  var counter = 0;
  var arr = expression.split('*');
  function factorial(n) {
    return (n >= 1) ? n * factorial(n - 1) : 1;
  }  

  var result = factorial(arr);

  if ( result % 10 === 0) {
    counter++;
  }
  alert(counter);
}
