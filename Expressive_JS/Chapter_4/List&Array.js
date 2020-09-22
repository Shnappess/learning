//----------------------------------------Выразительный JS глава 4
//Напишите функцию arrayToList, которая строит такую структуру,
//получая в качестве аргумента [1, 2, 3], а также функцию listToArray,
//которая создаёт массив из списка. Также напишите вспомогательную функцию prepend,
//которая получает элемент и создаёт новый список, где этот элемент добавлен спереди
//к первоначальному списку, и функцию nth, которая в качестве аргументов принимает
//список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.

function arrayToList(inputArr){

	if(!inputArr.length)return(undefined);//Cheking input array for void||Проверка входного массива на пустоту

	let outputList={//Initialisation of output list||Инициализация выходного списка
		value:inputArr[inputArr.length-1],
		rest:null,
	};

	for(i=inputArr.length-2;i>=0;i--){
		outputList={//Creating list elemets||Создание списка элементов
			value:inputArr[i],
			rest:outputList,
		};
	};

	return(outputList);

};

function listToArray(inputList){

	let outputArr=[];//Output array initialisation||Инициализация выходного массива

	for(let List=inputList;;){
		outputArr.push(List.value);//Adding list element`s value to array||Добавление значения элемента списка в массив
		if(List.rest==null)break;//Checking for last element of the list||Проверка на последний элемент списка
		List=List.rest;//Going into next element of the list||Переход к следующему элементу списка
	};

	return(outputArr);
};

function prepend(newElement,inputList){
	let outputList={//Creating output list||Создание выходного списка
		value:newElement,
		rest:inputList,
	};
	return(outputList)
};

function nth(inputList, position){//position указывает номер элемента списка сверху вниз начиная с 0

	if(position<0)return(undefined);//Checking for negative position||Проверка на отрицательную позицию

	let consumableList=inputList;//Creating list duplicate to avoid by-effects
								//Создание дупликата списка воизбежание побочных эффектов
	for(i=0;i<position;i++){
		if(consumableList.rest==null)return(undefined);//Checking for out of list position
		consumableList=consumableList.rest;				//Проверка на отстутствие в списке элемента с заданной позицией
	};

	return(consumableList.value);

};

function nthRecursion(inputList, position){

	if(position<0)return(undefined);//Checking for negative position||Проверка на отрицательную позицию

	if(position==0)return(inputList.value);

	if(inputList.rest==null)return(undefined);//Checking for out of list position
											//Проверка на отстутствие в списке элемента с заданной позицией
	return(nthRecursion(inputList.rest, position-1));

};