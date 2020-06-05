// Первая задача

function Product(name, price) {
    this.product = {};
    this.product.name = name;
    this.product.price = price;
}

function Cart() {
    let arrProduct = [];
    let amountProduct;
    let sumProduct = 0;

    this.addProduct = function(product) {
        let key = arrProduct.length;
        arrProduct[key] = product;
    }
    this.getSum = function() {
        let iteration;
        for (let i = 0; i < arrProduct.length; i++) {
            iteration = arrProduct[i].product.price;
            sumProduct = iteration + sumProduct;
        }
		sumProduct = ('Стоимость товаров в корзине: ' + sumProduct + ' руб.')
        return sumProduct;
    }
    this.getAmount = function() {
        amountProduct = arrProduct.length;
        amountProduct = ('Количество товаров в корзине: ' + amountProduct + ' шт.');

        return amountProduct;
    }
}


let product0 = new Product('Ёлка', 450);
let product1 = new Product('Сосна', 300);
let product2 = new Product('Пихта', 825);
let cart = new Cart();

cart.addProduct(product0);
cart.addProduct(product1);
cart.addProduct(product2);

console.log(cart.getSum());
console.log(cart.getAmount());

// Вторая задача

function Person(name, age, gender, interests) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.interests = interests;

	this.toString = function () {
		return 'Имя: ' + this.name + '. Возраст: '
		+ this.age + ' лет. Пол: ' + this.gender + '. Интересы: '
		+ this.interests + '.';
	}
}

function Student(name, age, gender, interests, university)  {
	Person.call(this, name, age, gender, interests);
	this.university = university;
	this.toString = function() {
		return 'Студент: ' + this.name + '. Возраст: '
		+ this.age + ' лет. Пол: ' + this.gender + '. Интересы: '
		+ this.interests + '. Обучается в ' + this.university + '.';
	}
}

let person = new Person('Сергей', 27, 'м',  'музыка, программирование');
let student = new Student('Сергей', 27, 'м',  'музыка, программирование', 'ИТМО');

console.log(person.toString());
console.log(student.toString());

 // Третья задача

 function User() {
     this.toString = function() {
         return ('Имя: ' + this.name + '. Возраст: ' + this.age + ' лет.');
     }
 }

 User.anonim = function() {
     let user = new User;
     user.name = 'Аноним';
     user.age = 'неопределенное количество'
     return user;
 }

 User.data = function(data) {
     let user = new User;
     user.name = data.name;
     user.age = data.age;
     return user;
 }

 let user1 = {
     name: 'Костя',
     age: '29',
 };

 let userPrint = new User.data(user1);
 let guest = new User.anonim();

 console.log(userPrint.toString());
 console.log(guest.toString());

// Четвертая задача


/*
#1 Window.postMessage  Предоставляет безопасный способ для одного окна передать строку с данными в другое окно, которое должно находиться в пределах того же домена, что и первое.

#2 Window.BigInt это встроенный объект, который предоставляет способ представлять целые числа больше 253 - 1, наибольшего числа, которое JavaScript может надежно представить с Number примитивом. Это максимальное значение можно получить, обратившись к Number.MAX_SAFE_INTEGER.

#3 Window.crypto дает доступ к интерфейсу Crypto. Этот интерфейс предоставляет веб-странице доступ к встроенным в браузер возможностям криптографии.

#4 Window.fullScreen Это свойство указывает, отображается ли окно в полноэкранном режиме или нет.

#5 Window.menubar Возвращает объект menubar, который может быть добавлен и убран из окна.

#6 Window.personalbar Возвращает объект personalbar, который может быть добавлен и убран из окна.

#7 Window.name Свойство name может использоваться для установки и получения имени текущего окна. Оно становится доступным после его создания.

#8 Window.status Получает/устанавливает текст в statusbar внизу браузера.

#9 Window.open Открывает новое окно.

#10 Window.navigator является свойством только для чтения и возвращает ссылку на объект Navigator, который может запросить информацию о приложении, запустившем скрипт.

*/
