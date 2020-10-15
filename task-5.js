"use strict";

// ========================= 5 ========


// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const mySpan = document.getElementById('name-output');
const nInput = document.getElementById('name-input');
nInput.addEventListener('input', function(){
  if (this.value.length !== 0) {
    mySpan.innerText = this.value;
  } else {
    mySpan.innerText = "незнакомец"
 };
})
