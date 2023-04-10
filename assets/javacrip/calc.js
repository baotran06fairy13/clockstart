const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.calc-button');
let currentVal = '';

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const buttonVal = e.target.innerText;
    
    switch(buttonVal) {
      case 'C':
        currentVal = '';
        screen.innerText = '0';
        break;
      case '←':
        currentVal = currentVal.slice(0, -1);
        screen.innerText = currentVal || '0';
        break;
      case '=':
        currentVal = eval(currentVal);
        screen.innerText = currentVal;
        break;
      case '÷':
        currentVal = currentVal + '/';
        screen.innerText = currentVal;
        break;
      case '×':
        currentVal = currentVal + '*';
        screen.innerText = currentVal;
        break;
      case '+':
        currentVal = currentVal + '+';
        screen.innerText = currentVal;
        break;
      case '-':
        currentVal = currentVal + '-';
        screen.innerText = currentVal;
        break;
      default:
        if (currentVal.length > 0 && /[0-9]/.test(buttonVal) && /[0-9]/.test(currentVal[currentVal.length - 1])) {
          currentVal = currentVal + buttonVal;
        } else if (buttonVal === '0' && currentVal === '0') {
          currentVal = '0';
        } else {
          currentVal = currentVal + buttonVal;
        }
        screen.innerText = currentVal;
        break;
    }
  });
});