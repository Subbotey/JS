// Первая задача

// Вычитал что на одно действие одна функция
// В первых двух пытался это реализовать
// В третьей, все в одной

// Сравнение длины и суммы
function checkArr(data0, data1) {
	if (data0.length == data1.length) {
		if (sumArr(data0, data1) == true) {
			return true;
		}
		return false;
	}
	return false;
}

function sumArr(data0, data1) {
	let temp0 = 0;
	let temp1 = 0;

	for (let i = 0; i < data0.length; i++) {
		temp0 = data0[i] + temp0;
		temp1 = data1[i] + temp1;
	}
	if (temp0 == temp1) {
		return true;
	}
	return false;
}

let arr0 = [1, 4, 3, 2];
let arr1 = [1, 2, 3, 4];
let result = checkArr(arr0, arr1);

console.log(result);

// Сравнение длины и полного соответствия массива
function checkArr2(data0, data1) {
	if (data0.length == data1.length) {
		if (compareArr(data0, data1) == true) {
			return true;
		}
		return false;
	}
	return false;
}

function compareArr(data0, data1) {
	let temp;
	
	for (let i = 0; i < data0.length; i++) {
		if (typeof data0[i] == typeof data1[i]) {
			if (data0[i] == data1[i]) {
				temp = true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	return temp;
	}

let arr2 = [1, '2', 3, 4];
let arr3 = [1, '2', 3, 4];
let result1 = checkArr2(arr2, arr3);

console.log(result1);

// Сравнение длины и полного соответствия массива одной функцией
function checkArr3(data0, data1) {
	let temp;
	
	if (data0.length == data1.length) {
		for (let i = 0; i < data0.length; i++) {
			if (typeof data0[i] == typeof data1[i]) {
				if (data0[i] == data1[i]) {
					temp = true;
				} else {
				return false;
				}
			} else {
			return false;
			}
		}
		return temp;
	}
	return false;
}

let arr4 = [1, 2, 3, 4];
let arr5 = [1, '2', 3, 4];
let result2 = checkArr3(arr4, arr5);

console.log(result2);

// Вторая задача

function range(start, end, step = 1) {
	let tempArr = [];
	tempArr.push(start);
	
	for (let i = start; i < end; i = start) {
		let sum = start + step;
		start = sum;
		if (sum <= end) {
			tempArr.push(start);
		}
	}
	return tempArr;
}

let resultRange = range(1, 10, 4);
console.log(resultRange);

// Третья задача

// Вывод данных объекта в консоль
let num = 1;
let student = {
	name: "Пётр",
	surname: "Иванов",
	age: "30",
	interest: ["JavaScript","HTML","CSS"],
	place: "ИТМО",
};

function getStudInfo(data) {
	let temp = [];
	let obj = {};
	
	if (typeof data == typeof obj) {
		temp = data;
		return temp;
	}
	return "Переданные данные не являются объектом";
}

let studentData = getStudInfo(student);

console.log(studentData);

// Вывод данных объекта в консоль массивом
let num2 = 1;
let student2 = {
	"Имя": "Пётр",
	"Фамилия": "Иванов",
	"Возраст": "30",
	"Интересы": ["JavaScript","HTML","CSS"],
	"Масто обучения": "ИТМО",
};

function getStudInfo2(data) {
	let temp = [];
	let obj = {};
	
	if (typeof data == typeof obj) {
		for (let key in data) {
			temp.push(key + ":" + data[key]);
		}
		return temp;
	}
	return "Переданные данные не являются объектом";
}

let studentData2 = getStudInfo2(student2);

console.log(studentData2);