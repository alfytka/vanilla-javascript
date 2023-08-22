class Calculator {
   constructor(outputTextElement) {
      this.outputTextElement = outputTextElement;
      this.clear();
   }

   clear() {
      this.outputOperand = '';
      this.operation = undefined;
   }

   delete() {
      this.outputOperand = this.outputOperand.toString().slice(0, -1);
   }

   appendNumber(number) {
      if (number === '.' && this.outputOperand.includes('.')) return;
      this.outputOperand = this.outputOperand.toString() + number.toString();
   }

   chooseOperation(operation) {
      if (this.outputOperand === '') return;
      if (this.operation !== undefined) {
         // this.
      }
      this.operation = operation;
      this.previousOperand = this.outputOperand;
      this.outputOperand = '';
   }

   compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.outputOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch(this.operation) {
         case '+':
            computation = prev + current;
            break;
         case '-':
            computation = prev - current;
            break;
         case '*':
            computation = prev * current;
            break;
         case '/':
            computation = prev / current;
            break;
         default:
            return;
      }
      this.outputOperand = computation;
      this.operation = undefined;
      this.previousOperand = ''
   }

   updateDisplay() {
      this.outputTextElement.textContent = this.outputOperand;
   }
}

const outputTextElement = document.querySelector('[data-output]');
const calculator = new Calculator(outputTextElement);

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
   });
});

equalsButton.addEventListener('click', () => {
   calculator.compute();
   calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
   calculator.clear();
   calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
   calculator.delete();
   calculator.updateDisplay();
});
