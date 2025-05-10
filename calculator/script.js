let display = document.getElementById("display");
let display1 = document.getElementById("display1");

  function press(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculate() {
    try {
      display1.value = eval(display.value); 
    } catch {
      display.value = "Error";
    }
  }
  
  function Backspace(){
    display.value = display.value.slice(0,-1)
  }





document.addEventListener('keydown', function (e) {
  let key = e.key


  if('0123456789+-/*.%'.includes(key)){
    press(key);

  }else if (key === 'Enter'){
    calculate();

  }else if (key === 'c'){
    clearDisplay();

  }else if (key === 'Backspace'){
    display.value = display.value.slice(0,-1)

  }
})

