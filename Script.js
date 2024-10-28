function addToDisplay(value) {
    document.getElementById('display').value  +=value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function deleteLast() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }

  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function trigFunction(func) {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math[func](eval(currentValue));
  }

  function mathFunction(func) {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = Math[func](eval(currentValue));
  }