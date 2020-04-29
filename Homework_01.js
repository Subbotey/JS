//Первая задача

let uchastok, gryadki, ostatok;
uchastok = 1000;
gryadki = 25 * 15;
ostatok = uchastok - gryadki;
alert(`В первом задании осталось ${ostatok} м2`);

//Вторая задача

let oval_01, oval_02, kolco;
oval_01 = 15 * 100;
oval_02 = 600;
kolco = oval_01 - oval_02;
alert(`Площадь кольца ${kolco} см2`);

//Третья задача

let number_01 = prompt("Введите первое число");
let number_02 = prompt("Введите второе число");
let number_03 = prompt("Введите третье число");
let res_01, res_02;
number_01 = Number(number_01);
number_02 = Number(number_02);
number_03 = Number(number_03);
res_01 = (number_01 < number_02) ? number_01 : number_02;
res_02 = (res_01 < number_03) ? res_01 : number_03;
alert(`Самое маленькое число ${res_02} !`);

//Четвертая задача

let number_04 = 10, number_05 = 8.5, number_06 = 11.45, number_07, number_08, res_03;
number_07 = number_04 - number_05;
number_08 = number_06 - number_04;
res_03 = (number_07<number_08) ? number_05 : number_06;
console.log(`Это число ${res_03} Ближе к 10`);

//Пятая задача
