describe("Тестирование домашняя работа", function(){
	it("Позитивный тест: x=16", function(){
		let rez = calcYTest(16);
		expect(rez).toBe(4.0625);
	});

	it("Негативный тест: x=0", function(){
		let rez = calcYTest(0);
		expect(rez).toBe(Infinity);
	});

	it("Негативный тест: x=-16", function(){
		let rez = calcYTest(-16);
		rez = typeof rez;
		expect(rez).toBe('number');
	});
});
