// Вторая задача

let data = {
	x:[],
	y:[],
	line: {color: 'green'},
};

let layout = {
	title: 'Домашняя работа',
	xaxis: {
		title: 'Ось X',
	},
	yaxis:{
		title: 'Ось Y',
	}
};


function calcY(x) {
	let y;

	if(x >= 1){
		y = 5 / x;
	} else {
		y = x * x - 4 * x;
	}
	return y;
}

for(let i = -5; i <= 5; i = i + 0.01){
	data.x.push(i);
	data.y.push(calcY(i));
}

function pole(n) {
	for (let i = 0; i < n; i++) {
		let di
		for (let j = 0; j < n; j++) {

		}
	}
}

pole(3)
