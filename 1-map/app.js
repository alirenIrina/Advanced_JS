'use strict';

const dataBase = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' }
];

const uniqueIds = [...new Set(dataBase.map(({ id }) => id))];

const unique = uniqueIds.map(item => dataBase.find(({ id }) => id === item));

console.log(unique);


