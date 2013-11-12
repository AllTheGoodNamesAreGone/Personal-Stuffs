function f1(x,y) {
if(x.value == null || x.value == "0")  /*say you press a button 1,then with this.form.screen.value you get the value on screen. so if screen is blank or has 0
                                        then it will asign it value 1,otherwise number on the button you press,will be cancaneted to it      */
x.value = y                          
else
x.value += y
}

function exp(form)
{form.screen.value = Math.exp(form.screen.value);}

function ln(form) 
{form.screen.value = Math.log(form.screen.value);}

function sqrt(form) 
{form.screen.value = Math.sqrt(form.screen.value);}

function square(form)  
{form.screen.value = eval(form.screen.value) * eval(form.screen.value)}

function sin(form)  
{ form.screen.value = Math.sin(form.screen.value);}

function cos(form)  
{form.screen.value = Math.cos(form.screen.value);}

function tan(form) 
{form.screen.value = Math.tan(form.screen.value);}

function DELETE(x) 
{x.value = x.value.substring(0, x.value.length - 1)}

function PLUS_MINUS(x) {
if(x.value.substring(0, 1) == "-")
x.value = x.value.substring(1, x.value.length)
else
x.value = "-" + x.value
}

function RESULT(form)  {
form.screen.value = eval(form.screen.value)}

function SQUARE(form){
form.screen.value =eval(form.screen.value)*eval(form.screen.value);
}

function checkSqrt(x)
{  if(x>=0)
return true;
else
  alert('check your entry');
  }
  function ONE(){
  document.getElementById('Display').style.visibility="visible";}
function TWO(){
document.getElementById('Display').style.visibility="hidden";}


  function check_ln(x)
  { if(x>0)
  return true;
  else
  alert('ln is defined only for positive real numbers');
  }