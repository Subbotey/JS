//Первая задача

//Добавление в конец массива
let arrA = [12, 4, 3, 10, 1, 20];
let arrB = [-3, -7, -100, -33];
let arrC =[];

for (let i = 0; i < arrA.length; i++) {
	arrC.push(arrA[i]);
}

for (let i = 0; i < arrB.length; i++) {
	arrC.push(arrB[i]);
}
	 
alert("Второй массив в конце\n" +arrC);

//Добавление в начало массива
let arrAa = [12, 4, 3, 10, 1, 20];
let arrBb = [-3, -7, -100, -33];
let arrCc =[];

for (let i = 0; i < arrAa.length; i++) {
	arrCc.push(arrAa[i]);
}

for (let i = 0; i < arrBb.length; i++) {
	arrCc.unshift(arrBb[i]);
}
	 
alert("Второй массив в начале\n" +arrCc);

//Вторая задача

//Вариант без замены данных в массиве
let area = [ null, 0, null, 0, null, 1, 1, null, null ];
let symbol = [];
let table = `<table "cellspacing="5px" border="1px"><tbody>`;
for (i = 0; i < area.length; i++) {
	if (area[i] == null) {
		symbol.push("");
	} else if (area[i] == 0) {
		symbol.push("O");
	} else if (area[i] == 1)
		symbol.push("X");
}

table += `<tr><td>${symbol[0]}</td><td>${symbol[1]}</td><td>${symbol[2]}</td></tr>`;
table += `<tr><td>${symbol[3]}</td><td>${symbol[4]}</td><td>${symbol[5]}</td></tr>`;
table += `<tr><td>${symbol[6]}</td><td>${symbol[7]}</td><td>${symbol[8]}</td></tr>`;
table += `</tbody></table>`;

document.write(table);

//Вариант с заменой в массиве
let area2 = [ null, 0, null, 0, null, 1, 1, null, null ];
let table2 = `<table "cellspacing="5px" border="1px"><tbody>`;
for (i = 0; i < area2.length; i++) {
	if (area2[i] == null) {
		area2.splice(i,1,"");
	} else if (area2[i] == 0) {
		area2.splice(i,1,"O");
	} else if (area2[i] == 1)
		area2.splice(i,1,"X");
}

table2 += `<tr><td>${area2[0]}</td><td>${area2[1]}</td><td>${area2[2]}</td></tr>`;
table2 += `<tr><td>${area2[3]}</td><td>${area2[4]}</td><td>${area2[5]}</td></tr>`;
table2 += `<tr><td>${area2[6]}</td><td>${area2[7]}</td><td>${area2[8]}</td></tr>`;
table2 += `</tbody></table>`;

document.write(table2);

//Третья задача

//Первый вариант с сортировкой
let arr = [12,4,3,10,1,20];
let n = arr.length;

for (let i = 0; i < n-1; i++){
	for (let j = 0; j < n-1-i; j++){
		if (arr[j+1] < arr[j]) {
			let t = arr[j+1];
			arr[j+1] = arr[j];
			arr[j] = t;
		}
	}
 }

arr.shift();
arr.pop();
alert("Массив после сортировки\nбез максимального и минимального значения:\n" +arr);

//Второй вариант
let arr2 = [12,4,3,10,1,20];
let min = arr2[0], max = arr2[0];
for(let i = 1; i < arr2.length; i++){
	let num = arr2[i];
	if(num > max){
		max = num; 
	}
	if(num < min){
		min = num; 
	}	
}
console.log(min, max);

let indexMin = arr2.indexOf(min);
let indexMax = arr2.indexOf(max);

arr2.splice(indexMin, 1);
arr2.splice(indexMax -1, 1);

alert("Массив без максимального и минимального значения:\n" +arr2);
