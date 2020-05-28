//Первая задача

let buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click', replaceClr, false);

function replaceClr (e) {
	let click = e.target;
	let elem = click.classList;
		
	if (elem[1] == 'clrRed') {
		click.classList.remove('clrRed');
		click.classList.add('clrGreen');
	} else if (elem[1] == 'clrGreen'){
		click.classList.remove('clrGreen');
		click.classList.add('clrRed');
	}
}

// Вторая задача

let replace = document.getElementById('replace');

replace.addEventListener('click', replaceNum, false);

function replaceNum(e) {
	let num = +replace.innerText;
	
	if (typeof num == "number") {
		num += 1;
		replace.innerText = num;
	}
}

// Третья задача

let commentsText = document.getElementsByTagName('textarea');
let comment = document.getElementById('comment');
let user = {
	name: 'Валера',
	date() {
	let dateNow = new Date ();
		return dateNow.toLocaleString();
	},
	avatar: 'avatarka.jpg',
};

comment.addEventListener('click', addComment, true);

function addComment(e) {
	let click = e.target;
	let text = commentsText[0].value;
	let buttonClick = click.className;
	let commentPlace = document.getElementById('commentPlace');

	if (buttonClick == 'buttonComment') {
		if (text != '') {
			let avatarka = document.createElement('img');
			let name = document.createElement('p')
			let textCommen = document.createElement('p');
			let date = document.createElement('div');
			let div = document.createElement('div');
			
			avatarka.setAttribute("src", "img/" + (user.avatar));
			avatarka.classList.add('imgComment');
			name.innerText = 'Пользователь: ' + user.name;
			date.innerText ='Написал: ' + user.date();
			textCommen.innerText = text;
			div.classList.add('commentIn');
			
			div.appendChild(avatarka);
			div.appendChild(name);
			div.appendChild(date);
			div.appendChild(textCommen);
			
			commentPlace.appendChild(div);
			
			commentsText[0].value = '';
			
		} else {
			alert('Введите текст комментария');
		}
	}
}

// Четвертая задача

let books = [
	book1 = {
		art: 458743,
		autor: 'А Лукьянов',
		title: '"Возможно"',
		description: 'Повесть рассказывает о приключениях летчика-испытателя, чей самолет терпит крушение.'
	},
	book2 = {
		art: 458744,
		autor: 'А Лукьянов',
		title: '"Путешествие"',
		description: 'Книга расскажет об удивительных приключениях Кости и Кати. Они попадают в другое время, и у них ...'
	},
	book3 = {
		art: 458745,
		autor: 'А Лукьянов',
		title: '"Извне"',
		description: 'Главный герой этого фантастического рассказа работал курьером по всей галактике. Но к нему обратились ...'
	},
	book4 = {
		art: 458746,
		autor: 'А Лукьянов',
		title: '"Фантазия"',
		description: 'Девушка Лида, которая любит читать книги, пошла вывести свою собаку Весту на улицу.'
	},
];

function renderBooks(arr) {
	let div = document.createElement('div');
	div.classList.add('conteiner');
	div.innerHTML = '<table><thead><th>Артикул</th><th>Автор</th><th>Название</th><th>Описание</th></thead><tbody id="book"></tbody></table>';
	document.body.appendChild(div);
	let tagBook = document.getElementById('book');

	
	for (let i = 0; i < arr.length; i++) {
		let art = document.createElement('td');
		let autor = document.createElement('td');
		let title = document.createElement('td');
		let description = document.createElement('td');
		let tr = document.createElement('tr');
		
		art.innerText = arr[i].art;
		autor.innerText = arr[i].autor;
		title.innerText = arr[i].title;
		description.innerText = arr[i].description;
		
		tr.appendChild(art);
		tr.appendChild(autor);
		tr.appendChild(title);
		tr.appendChild(description);
		
		tagBook.appendChild(tr);
	}
}

renderBooks(books)