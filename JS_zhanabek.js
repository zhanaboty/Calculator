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
    if(btnVal == 'AC') {
      input.innerHTML = '';
      decimalAdded = false;
    }
    else if(btnVal== 'Delete') {
      var equation = inputVal;
      input.innerHTML = equation.slice(0,equation.length-1);
      decimalAdded = false;
    }
    else if(btnVal== 'π') {
      input.innerHTML = Math.PI;
      decimalAdded = false;
    }
    else if(btnVal== 'e') {
      input.innerHTML = Math.E;
      decimalAdded = false;
    }
    else if (btnVal=='sqrt2(x)'){
      var equation = inputVal;
      input.innerHTML = Math.pow(equation.slice(0,equation.length),0.5);
      decimalAdded = false;
    }
    else if (btnVal=='sqrt3(x)'){
      var equation = inputVal;
      input.innerHTML = Math.pow(equation.slice(0,equation.length),1/3);
      decimalAdded = false;
    }
    else if (btnVal=='e^x'){
      var equation = inputVal;
      input.innerHTML = Math.pow(Math.E,equation);
      decimalAdded = false;
    }
    else if (btnVal=='sqrty(x)'){
      var equation = inputVal;
      var arr = equation.split('.')
      var a=arr[0];
      var b=arr[1];
      input.innerHTML = Math.pow(a,1/b);
      decimalAdded = false;
    }
    else if (btnVal=='sin'){
      var equation = inputVal;
      input.innerHTML = Math.sin(equation * Math.PI / 180);
      decimalAdded = false;
    }
    else if (btnVal=='cos'){
      var equation = inputVal;
      input.innerHTML = Math.cos(equation * Math.PI / 180);
      decimalAdded = false;
    }
    else if (btnVal=='tan'){
      var equation = inputVal;
      input.innerHTML = Math.tan(equation * Math.PI / 180);
      decimalAdded = false;
    }
    else if (btnVal=='ctg'){
      var equation = inputVal;
      input.innerHTML = 1/(Math.tan(equation * Math.PI / 180));
      decimalAdded = false;
    }
    else if (btnVal=='x^y'){
      var equation = inputVal;
      var arr = equation.split('.');
      var a=arr[0];
      var b=arr[1];
      input.innerHTML = Math.pow(a,b);
      decimalAdded = false; 
    }
    else if (btnVal=='Mod'){
      var equation = inputVal;
      var arr = equation.split('.');
      var a = arr[0];
      var b = arr[1];
      input.innerHTML = a % b;
      decimalAdded = false; 
    }
    else if (btnVal=='x^3'){
      var equation = inputVal;
      input.innerHTML = Math.pow(equation, 3);
      decimalAdded = false;
    }
    else if (btnVal=='+/-'){
      var equation = inputVal;
      input.innerHTML = (-1)*equation;
      decimalAdded = false;
       }
    else if (btnVal=='10^x'){
      var equation = inputVal;
      input.innerHTML = Math.pow(10,equation);
      decimalAdded = false;
       }
      else if (btnVal=='x!'){
      var equation = inputVal;
      input.innerHTML = sFact(equation);
      decimalAdded = false;
       }
      else if (btnVal=='x^2'){
      var equation = inputVal;
      input.innerHTML = Math.pow(equation,2);
      decimalAdded = false;
    }
    else if (btnVal=='1/x'){
      var equation = inputVal;
      input.innerHTML = 1/equation;
      decimalAdded = false;
      }
    
      else if (btnVal=='Ln(x)'){
      var equation = inputVal;
      input.innerHTML = Math.log(equation);
      decimalAdded = false;
      }
      else if (btnVal=='log(x)'){
      var equation = inputVal;
      input.innerHTML = Math.log(equation)/Math.log(2);
      decimalAdded = false;
      }
    
      else if (btnVal=='lg(x)'){
      var equation = inputVal;
      input.innerHTML = Math.log(equation)/Math.log(10);
      decimalAdded = false;
      }
      else if (btnVal=='%'){
        var equation = inputVal;
        var arr = equation.split('.');
        var a = arr[0];
        var b = arr[1];
        input.innerHTML=a*(b/100);
        decimalAdded=false;

      }