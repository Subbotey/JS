// Первая задача
// Цветные часы

function getTime() {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	let dot = document.createElement('div')
	let clock = document.createElement('div');
	let hNum = document.createElement('div');
	let mNum = document.createElement('div');
	let sNum = document.createElement('div');
	let placeClock = document.getElementById('placeClock');

	if (minutes <= 9) {
		minutes = '0' + minutes;
	}

	if (seconds<= 9) {
		seconds = '0' + seconds;
	}

	clock.className = 'divClock';
	hNum.className = 'timeColorBlue';
	mNum.className = 'timeColorRed';
	sNum.className = 'timeColorGreen';
	hNum.innerHTML = hours;
	mNum.innerHTML = minutes;
	sNum.innerHTML = seconds;
	dot.innerHTML = '<strong>&nbsp;:&nbsp;</strong>'

	clock.append(hNum);
	clock.append(dot);
	clock.append(mNum);
	clock.append(dot.cloneNode(true));
	clock.append(sNum);
	placeClock.appendChild(clock);
	setTimeout(() => clock.remove(), 1000);
	setTimeout(getTime, 1000);

}

getTime();

// Вторая задача
// Вывод карточек из массива

let sevenDays = [
	{
		title: 'Круассаны "7 days"',
		taste: 'клубники',
		price: 110,
		img: 'd7_klubnika.jpg',
	},{
		title: 'Круассаны "7 days"',
		taste: 'вареной сгущенки',
		price: 110,
		img: 'd7_sguha.jpg',
	},{
		title: 'Круассаны "7 days"',
		taste: 'какао-ваниль',
		price: 125,
		img: 'd7_double.jpg',
	},{
		title: 'Круассаны "7 days"',
		taste: 'шоколада',
		price: 110,
		img: 'd7_shoko.jpg',
	}
];

function addProduct(arr) {
	let product = document.createElement('div');

	product.className = 'productCard';
	product.setAttribute("id", "productCard");

	for(let i = 0; i < arr.length; i++){
		let title = document.createElement('h2');
		let img = document.createElement('img');
		let price = document.createElement('p');
		let taste = document.createElement('p');
		let divCard = document.createElement('div');

		title.innerText = arr[i].title;
		img.setAttribute("src", "img/" + arr[i].img);
		price.innerText = "Стоимость " + arr[i].price + " руб.";
		taste.innerText = 'Со вкусом ' + arr[i].taste;

		divCard.className = 'divCard';
		divCard.appendChild(title);
		divCard.appendChild(img);
		divCard.appendChild(taste);
		divCard.appendChild(price);
		product.appendChild(divCard);
	}
	placeClock.after(product);
}

addProduct(sevenDays);

// Третья задача
// Светофор

function svetoforAnim() {
	let product = document.getElementById('productCard')
	let svetofor = document.createElement('div');
	let svetoforSection1 = document.createElement('div');
	let svetoforSection2 = document.createElement('div');
	let svetoforSection3 = document.createElement('div');
	let redLamp = document.createElement('div');
	let yellowLamp = document.createElement('div');
	let greenLamp = document.createElement('div');

	svetofor.className = 'svetofor';
	svetoforSection1.className = 'svetoforSection';
	svetoforSection2.className = 'svetoforSection';
	svetoforSection3.className = 'svetoforSection';
	redLamp.className = 'redLamp';
	yellowLamp.className = 'yellowLamp';
	greenLamp.className = 'greenLamp';

	product.after(svetofor);
	svetofor.append(svetoforSection1);
	svetofor.append(svetoforSection2);
	svetofor.append(svetoforSection3);

	miganie();

	function miganie() {
		setTimeout(() => svetoforSection1.append(redLamp), 0);
		setTimeout(() => redLamp.remove(), 2000);
		setTimeout(() => svetoforSection2.append(yellowLamp), 2000);
		setTimeout(() => yellowLamp.remove(), 4000);
		setTimeout(() => svetoforSection3.append(greenLamp), 4000);
		setTimeout(() => greenLamp.remove(), 6000);
		setTimeout(() => svetoforSection2.append(yellowLamp), 6000);
		setTimeout(() => yellowLamp.remove(), 8000);
		return setTimeout(miganie, 8000);
	}

}
svetoforAnim();
