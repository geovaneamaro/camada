// function para o funcionamento apprendTodisplay(valor)-value ,para funcionar
function appendToDisplay(value) {
    document.getElementById('display').value += value; //focando no documento
  }
  
  // Function para limpar o display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  //usando function para calcular
  function calculate() {
    var displayValue = document.getElementById('display').value;
  
    try {
      var result = eval(displayValue); // uso simplificado para a calculadora
      document.getElementById('display').value = result
    } catch (error) {
      document.getElementById('display').value = 'Erro';
    }
  }
  