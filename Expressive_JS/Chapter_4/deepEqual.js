//-----------------------Выразительный JS глава 4
//Оператор == сравнивает переменные объектов, проверяя,
//ссылаются ли они на один объект. Но иногда полезно было бы
//сравнить объекты по содержимому.Напишите функцию deepEqual,
//которая принимает два значения и возвращает true, только если
//это два одинаковых значения или это объекты, свойства которых
//имеют одинаковые значения, если их сравнивать рекурсивным вызовом
//deepEqual.Чтобы узнать, когда сравнивать величины через ===,
// а когда – объекты по содержимому, используйте оператор typeof.
//Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение. 

function deepEqual(firstInObj, secondInObj){

	if(typeof firstInObj!=typeof secondInObj){//Cheking objects for types different from each other||Проверка на различие типов
		console.log(`Different types`);
		return(false);
	};

	if(typeof firstInObj=='object'){//Objects handler||Обработчик объектов

		if(firstInObj===null||secondInObj===null){//null handler||Обработчик значения null
				if(firstInObj===secondInObj)return(true);
				console.log('One of the objects is null but another isn`t')
				return(false);	
		return(true);
		};

		let firstKeys=Object.keys(firstInObj);//Get the object keys array
		let secondKeys=Object.keys(secondInObj);//Получение массива свойств объекта

		if(firstKeys.length!=secondKeys.length){//Cheking for different numbers of keys||Проверка на разное количество свойств
			console.log(`Objects have different numbers of keys`)
			return(false);
		};

		for(i=0;i<firstKeys.length;i++){//Cheking for differnt kyes`s names||Проверка на разные имена свойств
			if(firstKeys[i]!=secondKeys[i]){
				console.log(`Objects have different keys\`s names`);
				return(false);
			};
		};

		for(i=0;i<firstKeys.length;i++){//Recursive objects handler||Рекурсивный обработчик объектов
			if(!deepEqual(firstInObj[firstKeys[i]], secondInObj[firstKeys[i]])){
				return(false);
			};
		};
	};	

	if(typeof firstInObj!='object'){//Not objects handler||Обработчик примитивов
		if(firstInObj!==secondInObj){
			console.log(`Objects\`s values are different`);	
			return(false);
		};
	};

	return(true);
};