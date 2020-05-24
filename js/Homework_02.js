//Первая задача

//Решение с поправками
let month = +prompt("Напишите номер месяца");

while (true) {
	let re = /^[0-9]+$/g;
	if (re.test(month) & month >= 1 & month <= 12) {
		break;
	}else
	alert("Месяца под таким номером нет!");
	month = +prompt("Напишите номер месяца");
}

if (month > 2 & month < 6) {
	alert("Это весенний месяц");
} else if (month > 5 & month < 9) {
	alert("Это летний месяц");
} else if (month > 8 & month < 12) {
	alert("Это осенний месяц");
} else if (month == 12 | (month>0 & month < 3)) {
	alert("Это зимний месяц");
}

//Второй вариант первой задачи
let month2 = +prompt("Напишите номер месяца");

switch (month2) {
	case 12:
	case 1:
	case 2:
		alert("Это зимний месяц");
		break;
	case 3:
	case 4:
	case 5:
		alert("Это весенний месяц");
		break;
	case 6:
	case 7:
	case 8:
		alert("Это летний месяц");
		break;
	case 9:
	case 10:
	case 11:
		alert("Это осенний месяц");
		break;
	default:
		alert("Месяца под таким номером нет!");
}

//Вторая задача

//Решение с поправками
let unit = +prompt("Выберите единицу измерения:\n1 — дециметр\n2 — километр\n3 — метр\n4 — миллиметр\n5 — сантиметр");


while (true) {
	let re = /^[0-9]+$/g;
	if (re.test(unit) & unit >= 1 & unit <= 5) {
		break;
	} else {
		alert("Введите цифру из списка!");
		unit = +prompt("Выберите единицу измерения:\n1 — дециметр\n2 — километр\n3 — метр\n4 — миллиметр\n5 — сантиметр");
	}
}

let length = +prompt("Введите длинну отрезка")

while (true) {
	let re = /^[0-9]+$/g;
	if (re.test(length) & length > 0) {
		break;
	} else {
		alert("Введите корректную длинну")
		length = +prompt("Введите длинну отрезка")
	}
}

if (unit == 1) {
	length /= 10;
	alert(`Длинна в метрах ${length} м`);
} else if (unit == 2) {
	length *= 1000;
	alert(`Длинна в метрах ${length} м`);
} else if (unit == 3) {
	alert(`Ваша длинна и так в метрах, она равна ${length} м`);
} else if (unit == 4) {
	length /= 1000;
	alert(`Длинна в метрах ${length} м`);
} else {
	length /= 100;
	alert(`Длинна в метрах ${length} м`);
}

//Третья задача

//Решение с поправками
let number = +prompt("Введите число от -999 до 999");

while (true) {
	let re = /^[-0-9 | 0-9]+$/g;
	if (re.test(number) & number >= -999 & number <= 999) {
		break;
	} else {
		alert("Введите цифру из указанного диапазона!");
		number = +prompt("Введите число от -999 до 999");
	}
}

if (number == 0) {
	alert("Ноль");
}else if (number > 0 & number < 10) {
	alert("Положительное однозначное число");
}else if (number < 0 & number > -10) {
	alert("Отритцательное однозначное число");
}else if (number > 9 & number < 100) {
	alert("Положительное двузначное число");
}else if (number < -9 & number > -100) {
	alert("Отритцательное двузначное число");
}else if (number > 99 & number < 1000) {
	alert("Положительное трехзначное число");
}else alert("Отритцательное трехзначное число");

//Четвертая задача

for (let i = 1; i < 101; i++) {

  if (i % 3 == 0 & i % 5 == 0){
	  console.log("ThreeFive");
	  continue;
  }else if (i % 3 == 0) {
	  console.log("Three");
	  continue;
  }else if (i % 5 == 0) {
	  console.log("Five");
	  continue;
  }
  console.log(i);
}

//Пятая задача

let year = +prompt("Введите год", '');

if (year % 4 != 0) {
	alert("Это обычный год");
}else if (year % 100 == 0) {
	if (year % 400 == 0) {
		alert("Это високосный год");
	}else alert("Это обычный год");
}else alert("Это високосный год");

//Шестая задача