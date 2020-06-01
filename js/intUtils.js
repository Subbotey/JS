// Первая задача

;( function () {
	window.myUtils = {
		minElemArr: function (obj) {
			let num = Math.min.apply( Math, obj );
			console.log('Самое маленькое число в массиве: '  + num);
			},
		maxElemArr: function (obj) {
			let num = Math.max.apply( Math, obj );
			console.log('Самое большое число в массиве: '  + num);
		},
		meanAr: function (obj) {
			let t = obj[0];

			for (let i = 0; i < obj.length -1; i++) {
				t = t + obj[i + 1];
			}
			t = t / obj.length;
			console.log('Среднее арифметическое значение массива: '  + t);
		},
		cloneArr: function (obj) {
			let newArr = [];

			for (let i in obj) {
				newArr[i] = obj[i];
			}
			newArr.push(15); // Добавляю для различия массивов в консоли
			return newArr;
		},
	};
}());
