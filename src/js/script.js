// Функция устанавливает таймер
// Функция для определения времени разницу
// Функция обновления таймера
//
// let days = document.querySelector('#days');
// let hours = document.querySelector('#hours');
// let minutes = document.querySelector('#minutes');
// let seconds = document.querySelector('#seconds');
//
//
//
// const task = (num) => {
//     if (num < 10) {
//         return `0${num}`
//     } else {
//         return num
//     }
// };
//
// let deadline = new Date('2022-01-25'); // время окончания
//
// const day = (days, hours, minutes, seconds) => {
//     let current = new Date(); // наст. время
//     let result = Date.parse(deadline) - Date.parse(current); //  времни оталось...
//     seconds.textContent = task(Math.floor(result / 1000 % 60));
//     minutes.textContent = task(Math.floor(result / 1000 / 60) % 60);
//     hours.textContent = task(Math.floor(result / 1000 / 60 / 60) % 24 - 6) ;
//     days.textContent = task(Math.floor(result / 1000 / 60 / 60 / 24));
//
//     let timerId = setInterval(()=>{
//         day(days,hours,minutes,seconds)
//     },1000);
//     if (result < 0){
//         clearInterval(timerId);
//         days.textContent = '00';
//         hours.textContent = '00';
//         minutes.textContent = '00';
//         seconds.textContent = '00';
//     }
//
// };
// day(days, hours, minutes, seconds);


// Функция устанавливает таймер
// Функция для определения времени разницу
// Функция обновления таймера


let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let second = document.querySelector('#seconds');
let date = document.querySelector('.input');
let btnSet = document.querySelector('.btn');
let resetBtn = document.querySelector('.resetBtn');


const addZero = (num) => {
    if (num < 10) {
        return ` 0${num}`
    } else {
        return num
    }
};

btnSet.addEventListener('click', () => {
    let deadline = date.value;
    if (Date.parse(deadline) > Date.parse(new Date()) + 360000) {
        const day = (days, hours, minutes, second) => {
            let current = new Date();
            let result = Date.parse(deadline) - Date.parse(current);
            second.textContent = addZero(Math.floor(result / 1000 % 60));
            minutes.textContent = addZero(Math.floor(result / 1000 / 60 % 60));
            hours.textContent = addZero(Math.floor(result / 1000 / 60 / 60 % 24 - 6));
            days.textContent = addZero(Math.floor(result / 1000 / 60 / 60 / 24));
            let timerId = setInterval(() => {
                day(days, hours, minutes, second)
            }, 1000);
            if (result < 0) {
                clearInterval(timerId);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                second.textContent = '00';
            }

            resetBtn.addEventListener('click', ()=>{
                clearInterval(timerId);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                second.textContent = '00';
            })
        };
        day(days, hours, minutes, second);
    } else {
        alert('Ошибка');
        date.value = ''
    }


});


//


// let deadline = new Date('2022-01-25');
//
//
// const day = (days, hours, minutes, seconds) =>{
//     let current = new Date();
//     let result = new Date(deadline) - current;
//     seconds.textContent = Math.floor(result / 1000) % 60;
//     minutes.textContent = Math.floor(result / 1000 / 60) % 60;
//     hours.textContent = (Math.floor(result / 1000 / 60 /60) % 24) - 6;
//     days.textContent = Math.floor(result / 1000 / 60 /60 / 24);
//
//     setInterval(() => {
//         day(days, hours, minutes, seconds)
//     }, 1000);
// };
//
// day(days, hours, minutes, seconds);