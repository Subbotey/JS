// Первая задача

let a = {
    name: 'static',
    count: 0,
};

function foo(data0, data1, data2) {
	let arr = [];
	
	for (;data2 >= 0; data2--) {
		if (data2 >= 1) {
			let obj = {...data0}
			arr.push(obj);
			data0.count += 1;
		}else {
			data0.count = 0;
		}
	}
	return arr;
}
	
console.log(foo(a, 'count', 10));
console.log(a);

// Вторая задача

function randomInt(min = 1, max = 100) {
	let arr = [];
	let rand;
	
	return function displayNum() {
		let temp;
		
		if (arr.length == max) {
			arr.splice(/0 - &{max}/);
		}
		
		rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		
		for (let i = 0; i <= arr.length; i++) {
			if (rand == arr[i]) {
				return displayNum();
				break;
			} else {
				temp = true;
			}
		}
		arr.push(rand);
		console.log(rand);
	}
}

let randNum = randomInt();

randNum();

// Третья задача

// Первый вариант, с обработкой в функции без создания дополнительного ключа
let student = {
	name: "Пётр",
	surname: "Иванов",
	age: "30",
	interest: ["JavaScript ","HTML ","CSS"],
	place: "ИТМО",
};

function getCard(data) {
	function card() {
		console.log(this.name + " " + this.surname + ". Возраст " + this.age + ". Интересы: " + this.interest + ". Учится в " + this.place);
		delete data.card;
	};
	
	data.card = card;
	
	return data.card();
}

getCard(student); 

// Второй вариант, вывод через метод объекта

let student2 = {
	name: "Иван",
	surname: "Петров",
	age: "24",
	interest: ["Python ","Физика ","Рыбалка"],
	place: "ИТМО",
	card () {
		console.log(this.name + " " + this.surname + ". Возраст " + this.age + ". Интересы: " + this.interest + ". Учится в " + this.place);
	}
};

student2.card();

// Четвертая задача

function n(data) {
	let n = data;
	let temp;
	
	if (data <= 1) {
		return 1;
	}
	
	calc(n);
	
	function calc(n) {
		if (n != 1) {
			temp = data	* (n - 1);
			data = temp;
			return calc(n -= 1);
		}
	};
	return temp;
}

let factorial = n(3);
console.log(factorial);

// Пятая задача

let arrPr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

arrPr.sort(function(item1, item2){
	return item1.price - item2.price;
});

console.log(arrPr);