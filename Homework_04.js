//Первая задача

let str = "1234";
let num = str.split("");
let sum = 0;

for (let i = 0; i < num.length; i++) {
	sum = sum + +num[i];
}

alert(sum);

//Вторая задача

let name = "Кракатау";
let reg = /а/ig;

name = name.replace(reg, 'аа');

alert(name);

//Третья задача

let txtPwd = "Введите пароль\nДлинна не меньше 9 символов\nОбязательны английские буквы верхнего и нижнего регистра\nОбязательно содержит больше двух цифр\nОбязательно содержит один из этих символов !, $, #, %";
let pwd = prompt(txtPwd);


for (;;) {
	let regEn = /[A-Z]/g;
	let regEn2 = /[a-z]/g;
	let num = /\d{3}|\d.+\d.+\d|\d{2}.+\d|\d.+\d{2}/g;
	let symbol = /[!,$,#,%]/g;
	
	if (pwd.length < 9) {
		alert("Ваш пароль слишком короткий");
		pwd = prompt(txtPwd);
	} else if (regEn.test(pwd) == false) {
		alert("В Вашем пароле нет английских букв\nс верхним регистром");
		pwd = prompt(txtPwd);
	} else if (regEn2.test(pwd) == false) {
		alert("В Вашем пароле нет английских букв\nс нижним регистром");
		pwd = prompt(txtPwd);
	} else if (num.test(pwd) == false) {
		alert("В Вашем пароле нет нужного количества цифр");
		pwd = prompt(txtPwd);
	} else if (symbol.test(pwd) == false) {
		alert("В Вашем пароле нет специального символа");
		pwd = prompt(txtPwd);
	}
	 else {
		 alert("Ваш пароль установлен!");
		 break;
	}
}