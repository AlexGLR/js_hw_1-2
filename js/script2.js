var names=[];

for (i=0; i<5; i++) {
	names[i] = prompt ("Введите с заглавной буквы имя № " + [i+1] , "");
}
var userName = prompt("Введите с заглавной имя пользователя" , "");

var result;
for(i=0; i<names.length; i++) {
	if (names[i]== userName){
		var result=names[i];
	}
}

if (result){
	alert (result +' , Вы успешно вошли!');
}else {
	alert ('Такого имени в базе нет!');
}