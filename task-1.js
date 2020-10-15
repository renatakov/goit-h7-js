"use strict";

// =================== 1 =========
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesList = document.querySelector("#categories");
// console.dir(categoriesList);
console.log(`В списке ${categoriesList.children.length} категории`);
const categoriesItems = document.getElementsByClassName('item')
// console.log(categoriesItems);
const item = (Array.from(categoriesItems)).forEach((element) => {
    console.log(`Категория: ${element.children[0].textContent}`);
    console.log(`Количество элементов: ${element.children[1].children.length}`);
})