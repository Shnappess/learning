//----------------------------------------Выразительный JS глава 3

/*Напишите функцию countBs, которая принимает строку в качестве аргумента,
и возвращает количество символов “B”, содержащихся в строке.Затем напишите
функцию countChar, которая работает примерно как countBs,
только принимает второй параметр — символ, который мы будем искать в строке
(вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.*/

function countChar(str, chr){
	let count=0;//Count value||Счетное значение
	for(i=0;i<str.length;i++){
		if(str[i]==chr){//Symbol coincedence check||Проверка совпадения символов
			count++;
		};
	};
	return(count);
};

let inputString=prompt('Введите строку, в которой будем искать:');
let soughtChar=prompt('Введите искомый символ:');

if(soughtChar.length!=1){
	do{
		soughtChar=prompt('Введите искомый символ(один):');
	}while(soughtChar.length!=1);
};

console.log(`countChar('${inputString}','${soughtChar}'):${countChar(inputString,soughtChar)}`);