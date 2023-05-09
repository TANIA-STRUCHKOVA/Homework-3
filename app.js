//  Урок 11 Cicles



// Задача №1


/*
let arrNum1 = Number(prompt('Введите первое число диапазона'),)
let arrNum2 = Number(prompt('Введите второе число диапазона'),)

let numberRange = []

if (arrNum1 <= arrNum2) {

	let numberRange = []
	if (arrNum1 <= arrNum2) {
		while (arrNum1 <= arrNum2) {
			numberRange.push(arrNum1++)
		}
		console.log("Числа диапазона по возрастанию:" + numberRange)
	}
	let sumNum = numberRange.length

	if (sumNum < 5) {
		alert("Введите корректные данные! Диапазон менее пяти значений!")
	}

}

else if (arrNum1 >= arrNum2) {
	let numberRange = []
	if (arrNum1 >= arrNum2) {
		while (arrNum1 >= arrNum2) {
			numberRange.push(arrNum1--)
		}
		console.log("Числа диапазона по убыванию:" + numberRange)
	}
	let sumNum1 = numberRange.length

	if (sumNum1 < 5) {
		alert("Введите корректные данные!")
	}
}

*/





// Задача №2


/*
let pinCode = prompt('Введите, пожалуйста, PIN-код !')
if (pinCode === "12345") { alert("Добро пожаловать!") }

else if (pinCode != "12345") {
	alert('Неверный PIN-код, осталось 2 попытки!')
	let pinCode1 = prompt('Введите PIN-код! Осталось 2 попытки...')

	if (pinCode1 === "12345") { alert("Добро пожаловать!") }

	else if (pinCode != "12345") {
		alert('Неверный PIN-код! Осталась 1 попытка!')
		let pinCode2 = prompt('Введите PIN-код! Осталась 1 попытка...')

		if (pinCode2 === "12345") { alert("Добро пожаловать!") }

		else  if (pinCode != "12345") {
			alert('Неверный PIN-код! Попробуйте позже...')


			let pukCode = prompt('Введите, пожалуйста, PUK-код !')
			if (pukCode === "54321") { alert("Добро пожаловать!") }

			else if (pukCode != "54321") {
				alert('Неверный PUK-код, осталось 2 попытки!')

				let pukCode1 = prompt('Введите PUK-код! Осталось 2 попытки...')
				if (pukCode1 === "54321") { alert("Добро пожаловать!") }
				else if (pukCode != "54321") {
					alert('Неверный PUK-код! Осталась 1 попытка!')

					let pukCode2 = prompt('Введите PUK-код! Осталась 1 попытка...')
					if (pukCode2 === "54321") { alert("Добро пожаловать!") }
					else if (pukCode != "54321") {
						alert('Неверный PUK-код! Попробуйте позже...')
					}
				}
			}
		}
	}
}

*/





// Задача №3


/*
let arrNum1 = Number(prompt('Введите первое число диапазона'),)
let arrNum2 = Number(prompt('Введите второе число диапазона'),)
let numberRange = []

while (arrNum1 <= arrNum2) {
	numberRange.push(arrNum1++)
}
console.log('Числа заданного диапазона: ' + numberRange)


let check = numberRange.some(function (elem) {
	if (elem < 100) {
		return (console.log('Числа меньше 100 !'))
	} else {
		return (console.log('Числа больше 100 !'))
	}
})
console.log(check)

let check1 = numberRange.some(function (elem) {
	if (elem % 2 === 0) {
		return (console.log('Чётное!'))
	} else {
		return (console.log('Нечётное!'))
	}
})
console.log(check1)

let check2 = numberRange.some(function (elem) {
	if (elem >= 0) {
		return (console.log('Положительное!'))
	} else {
		return (console.log('Отрицательное!'))
	}
})
console.log(check2)

*/






//Задача №4


/*
let arrNum1 = Number(prompt('Введите первое число диапазона'),)
let arrNum2 = Number(prompt('Введите второе число диапазона'),)
let numberRange = []

while (arrNum1 <= arrNum2) {
	numberRange.push(arrNum1++)
}

let boob = 7
console.log(numberRange.slice(0, boob))

*/