"use strict";

const input = document.getElementById("font-size-slider");
const span = document.getElementById("text");

const rangeInput = document.getElementById('font-size-control')
rangeInput.addEventListener('input', (e) => {
    span.style.fontSize = e.currentTarget.value + "px";
    console.log(rangeInput.value)
})