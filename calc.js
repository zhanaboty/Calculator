var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
function sFact(num){
  var rval=1;
  for (var i = 2; i<=num; i++){
    rval=rval*i;
  }
  return rval;
}
for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.querySelector('.table');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
 }