function  f1(){

	var num, progNum, out, tempOut;
	progNum = Math.floor((Math.random()*10) + 1)
	tempOut = document.getElementByID(temp-out);
	tempOut.innerHTML = progNum;


	num = document.getElementByID("mynum").value;
	out = document.getElementByID("out");

	if (num == progNum) {
		out.innerHTML = "Ви вгадали";
	};

	else if (num > progNum) {
		out.innerHTML = "Ваше число більше, ніж число комп'ютера"

	};
	 else  {
		out.innerHTML = "Ваше число менше, ніж число комп'ютера"

	};
}
