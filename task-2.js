"use strict";

// ======================== 2 =========

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после
// чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


const ul1 = document.getElementById('ingredients').append(...ingredients);
const li1 = document.createElement('li');