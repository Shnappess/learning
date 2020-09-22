//----------------------------------------Выразительный JS глава 4
//Напишите две функции, reverseArray и reverseArrayInPlace.
//Первая получает массив как аргумент и выдаёт новый массив,
//с обратным порядком элементов. Вторая работает как оригинальный метод
//reverse – она меняет порядок элементов на обратный в том массиве,
//который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

function reverseArray(array){
	let reversedArray=[];//Final array||Итоговый массив
	for(i=array.length-1;i>=0;i--){
		reversedArray.push(array[i]);//Filling new array by elements from old array in reverse order
	};								//Наполнение нового массива элементами из старого массива в обратном порядке
	return(reversedArray);
};

function reverseArrayInPlace(array){
	for(i=0;i<Math.floor(array.length/2);i++){//Math.floor is here for skip center element in array with even amount of elements
		let buffer=array[i];				//Math.floor здесь для пропуска центрального элемента массива с четным числом элементов
		array[i]=array[array.length-1-i];//Changing elements place with each other||Меняем элементы местами
		array[array.length-1-i]=buffer;
	};
};

let inputArray=[];

while(true){//Infinity cycle for array input||Бесконечный цикл для ввода массива
	let inputValue=prompt('Введите произвольное количество элементов массива(по одному):');
	if(inputValue===''||inputValue==undefined)break;//Conditions for cycle end||Условия завершения цикла
	inputArray.push(inputValue);
};

alert(`reverseArray(${inputArray}): ${reverseArray(inputArray)}`);

reverseArrayInPlace(inputArray);

alert('Тот же массив, инвертированный функцией reverseArrayInPlace(): '+inputArray);