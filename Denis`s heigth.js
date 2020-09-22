//Вова выше Максима на 10 сантиметров,
//Максим выше Дениса на 25 сантиметров,
//а Егор ниже Дениса на 5 сантиметров.
//Задайте рост Дениса из консоли,
//чтобы при это сразу вывелся рост Максима, Вовы и Дениса

function guysHeigth(DenHeigth){
	if(DenHeigth===NaN||DenHeigth<59.9||DenHeigth>226.1){//Input check||Проверка входных данных
		console.log('Incorrect value');
		return(undefined);
	}; 	
	let MaximHeigth=DenHeigth+25;
	let VovaHeigth=MaximHeigth+10;
	let EgorHeigth=MaximHeigth-5;
	return[MaximHeigth, VovaHeigth, DenHeigth];
};

let DenHeigth=parseInt(prompt('Введите рост Дениса(в сантиметрах):'));
console.log(guysHeigth(DenHeigth));