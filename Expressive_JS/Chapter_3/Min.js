//----------------------------------------Выразительный JS глава 3

/*Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.*/

function Min(num0, num1){
	if(num0>=num1){//">=" used for more speed if nums are equal
		return(num1);//Использовал ">=" для более быстрого выполнения, если числа равны
	}else{
		return(num0);
	};
};
let num0=parseInt(prompt('Введите первое число:'));//Data input
let num1=parseInt(prompt('Введите второе число:'));//Ввод данных
console.log(`Min(${num0},${num1}):${Min(num0,num1)}`);
