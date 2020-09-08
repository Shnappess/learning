//----------------------------------------Выразительный JS глава 3

/*Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.
Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число
и возвращать булевское значение.*/

function isEven(num) {
	if(num<0){num=-num};//Cheking for pos/neg||Проверка знака числа
	switch(num){
		case 0:
			return(true);//Output if num is even||Вывод если четное
		case 1:
			return(false);//Output if num is even||Вывод если нечетное
	}; 
	return(isEven(num-2));//Recursive num handler||Рекурсивный обработчик числа
};

console.log(`isEven(5): ${isEven(5)}`);
console.log(`isEven(8): ${isEven(8)}`);
console.log(`isEven(-10): ${isEven(-10)}`);