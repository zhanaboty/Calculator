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
<<<<<<< HEAD

    if(btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];
      
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
      
      if(operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');
      
      if(equation)
        input.innerHTML = eval(equation);
        
      decimalAdded = false;
    }
    
    else if(operators.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];
      
      if(inputVal != '' && operators.indexOf(lastChar) == -1) 
        input.innerHTML += btnVal;
      
      else if(inputVal == '' && btnVal == '-') 
        input.innerHTML += btnVal;
      
      if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }
      
      decimalAdded =false;
    }
    
    else if(btnVal == '.') {
      if(!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }

    
    else {
      input.innerHTML += btnVal;
    }
    
    e.preventDefault();
  } 
}
  
=======
 }  
>>>>>>> 7bbc3423d7eca85d2fe89e0a094d078a3e74c4cf
