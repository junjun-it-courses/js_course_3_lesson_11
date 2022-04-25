'use strict'

// В стрелочных функциях, this привязан к окружению, в котором была создана функция.
// В глобальной области видимости this будет указывать на глобальный объект.

// var globalObject = this;
// var foo = (() => this);
// console.log(foo() === globalObject); // true
//
// const a1 = item => item + 1;
// const a2 = (item) => item + 1;
// const a3 = (item = 12) => item + 12;
// const a4 = (item , index) => item + index;
// const a5 = (item = 100 , index) => item + index;
// const a6 = (item = 100 , index) => {
//     return  10 + 20;
// };

//
// function example() {
//     // function body
// }
//
// let ex = () => {
//
// }


// Свойство this стрелочной функции нельзя переоределить, оно будет всегда указывать
// на то окружение в котором находится

// Вызов функции как метода объекта
//
// let obj = {
//     name: 'Vova',
//     example: () => {
//         // НЕ ссылается на текущий объект но хранит ссылку на window (global object)
//         console.log(this);
//     }
// }
//
// obj.example();

let obj2 = {
    name: 'Vlad',
    lastName: 'Shaitan',
    age: 10,
    // getFullName: function () {
    //     console.log(this.name + ' ' + this.lastName);
    // },

    example: function () {
        // ссылается на текущий объект
        console.log(this);
        // let self = this;
        //
        // const ex2 = function () {
        //     console.log(this, self);
        // }
        //
        // ex2();


        const ex = () => {
            console.log(this)
        }

        ex();

    }
}

obj2.example()
// obj2.getFullName()