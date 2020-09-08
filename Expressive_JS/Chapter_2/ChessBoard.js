//----------------------------------------Выразительный JS глава 2
//--------------------------------------------"Шахматная доска"
/*Напишите программу, создающую строку, содержащую решётку size x size, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.*/

let size=8;
let string=' #';//Base string||Начальная строка
let resStr='';//Result string||Рузельтирующая строка
for(i=0;i<size;i++){
	string+=string[i];//String generation by incrimination on last but one symbol
};					//Генерация строки путем приращения предпоследнего символа
for(i=0;i<size;i++){
	resStr+=(string[i]==' '?string.substring(0,size):string.substring(1,size+1))+'\n';//Extraction and incrimention of required string 
};																				//Извлечение и включение требуемой строки
console.log(resStr);