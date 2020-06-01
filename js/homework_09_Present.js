// Четвертая задача

let arr2 = [];
let id = [];

pole(4)

function pole(n) {
	let table = document.createElement('table');
	let count = document.createElement('div');

	if (n == 1) {
		alert('Такое значение использовать нельзя!');
		return;
	}

	table.setAttribute('id', 'table');
	count.setAttribute('id', 'count');
	count.classList.add('count');
	count.innerText = 3;

	for (let i = 0; i < n; i++) {  // Создаем таблицу N x N
		let tr = document.createElement('tr');

        table.appendChild(tr);

		for (let j = 0; j < n; j++) {
			let td = document.createElement('td');

			id.push(1); //Пушим в массив для создания уникальных ID
            td.setAttribute('id', 'td' + (id.length - 1)); // Присваиваем ID
			td.innerText = 'Найди приз';
            tr.appendChild(td);
		}
	}
    document.body.appendChild(table);
    document.body.appendChild(count);
	return addPresent(id);
}

function addPresent(id) {
	let n = Math.sqrt(id.length);

	while (arr2.length != n) {
		randNum()
	}

	function randNum() {
		let min = 1;
		let max = id.length;
		let rand;

		rand = min - 0.5 + Math.random() * (max - min + 1);
		rand = Math.round(rand);
		rand = rand - 1;

		for (let i = 0; i <= arr2.length; i++) {

			if ('td' + rand == arr2[i]) {
				return randNum();
			}
		}
		arr2.push('td' + (rand));
	}
}

let table = document.getElementById('table');

table.addEventListener('click',countClick, false);

function countClick(e) {
	let countNum = document.getElementById('count');
	countNum = +count.innerText;

	if (countNum != 1 & countNum != 0) {
		countNum -= 1;
		count.innerText = countNum;
		showPresent(e)
	} else if (countNum == 1) {
		countNum -= 1;
		count.classList.add('countStop');
		count.innerText = countNum;
		showPresent(e)
	} else {
		alert('Вы использовали все попытки!');
	}
}

function showPresent(e){
	let clickElem = e.target;
	let target =  e.target;
	let temp = true;
	clickElem = clickElem.id;

	for (var i = 0; i < arr2.length; i++) {

		if (arr2[i] == clickElem) {
			temp = true;
			break;
		} else {
			temp = false;
		}
	}
	if (temp == true) {
		target.innerText = 'Приз!';
		target.classList.add('yes')
	} else {
		target.innerText = 'Тут нет.';
		target.classList.add('no')
	}
}
