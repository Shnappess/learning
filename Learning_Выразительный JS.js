//------------------------------------SHNAPPESS Aka Дима Ершов---------------------------------------------------------


//------------------------------------Marein_Haverbeke_Vuerazitelnuei_JavaScript_Sovr

//------------------------------------страница 57 упр. "Построение треугольника в цикле"
//--Различие 0.0 и 1. версий в том, что 0.0 может вывести "треугольником" любую строку,
//--версии же 1. могут выводить треугольник любых размеров. 

//-----version 0.0:

function triangleInACycle0(){
	let text="#######";//String which will be used as triangle`s material||Строка которая будет использоваться как материал для треугольника
	for(i=1; i<=7; i++){
		console.log(`${text.substring(0,i)}\n`)//Cutting the string to substrings required length||Нарезаем строку на подстроки необходимой длинны
	};
};

//--C версиями 1.0 и 1.1 вопрос следующий: какая из них лучше? В производительности разницы быть не должно.
//--Но 1.0, на мой вкус, проще для восприятия.

//-----version 1.0:

function triangleInACycle1(size){
	let str='';//Just a void string variable||Просто пустая строковая переменная
	for(i=0;i<size;i++){
		str+='#';//Incremention on '#' symbol to raise string length||Приращение к строке символа "#"
		console.log(`${str}\n`);
	};
};

//-----version 1.1:

function triangleInACycle1(size){
	let str='';//Just a void string variable||Просто пустая строковая переменная
	for(i=0;i<size;i++){
		console.log(`${str+='#'}\n`);//Incremention on '#' symbol to raise string length, and printing out
	};								//Приращение к строке символа "#" и вывод на печать
};

//------------------------------------страница 57-58 упр. "FizzBuzz"
//---Сверх ТЗ добавил вывод в консоль значения счетчика цикла - для наглядности.
//-----version 0.0:

function fizzBuzz0(){
	for(i=1;i<=100;i++){
		if(!(i%3)){//Multiplicity check||Проверка на кратность
			console.log(`${i}: Fizz`)
		} else{
			if(!(i%5)){//Multiplicity check||Проверка на кратность
				console.log(`${i}: Buss`)
			};
		};
	};
};

//-----version 0.1:

function fizzBuzz1(){
	for(i=1;i<=100;i++){
		if(!(i%3)){//Multiplicity check
			console.log(`${i}: Fizz${!(i%5)?'Buzz':''}\n`);//Printing out and check for multiplies of 5
														//Печать результата и проверка кратности пяти
		};
		if(!(i%5)){//Multiplicity check||Проверка на кратность
			console.log(`${i}: Buzz\n`);
		};
	};
};

//------------------------------------страница 58 упр. "Шахматная доска"
//--Вместо введения переменной oddCounter можно было бы использовать i как счетчик четности,
//--но тогда первый символ первой строки зависил бы от четности size.

//-----version 0.0:

function checkMateDesk0(size){
	let oddCounter=false;//Toggle variable for output generation||Переменная-переключатель для генерации строки на вывод
	let oddString=' ';//Base string||Начальная строка
	let evenString='#';//Another one base string||Начальная строка
	for(i=size;i>1;i--,oddCounter=!oddCounter){//Generation strings required length||Генерация строки необходимой длинны
		oddString+=(oddCounter?' ':'#');//Odd string||Нечетная строка
		evenString+=(oddCounter?'#':' ');//Even string||Четная строка
	};
	oddCounter=false;//Clear value
	for(i=size;i>0;i--, oddCounter=!oddCounter){
		console.log(`${oddCounter?evenString:oddString}\n`);//Alternately printing out the strings||Поочередная печать строк
	};
};

//---В версии 1.0 в качестве счетчика четности используется сама строка, кроме того вместо отдельных четной и нечетной строки
//---используется однач строка на один символ длиннее и необходимая подстрока извлекается из нее
//------version 1.0:

function checkMateDesk1(size){
	let string=' #';//Base string||Начальная строка
	for(i=0;i<size;i++){
		string+=string[i];//String generation by incrimination on last but one symbol
	};					//Генерация строки путем приращения предпоследнего символа
	for(i=0;i<size;i++){
		console.log(`${string[i]==' '?string.substring(0,size):string.substring(1,size+1)}\n`);//Extraction and printing out required string 
	};																					//Извлечение и вывод на печать требуемой строки
};