window.onload = function() {
	var oDiv = document.getElementById('div1');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var Li = oUl.getElementsByTagName('li');
	oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
	oUl.style.width = Li[0].offsetWidth * Li.length + 'px';

	var speed = 2

	function move() {

		if (oUl.offsetLeft < -oUl.offsetWidth / speed) {

			oUl.style.left = '0'

		}


		if (oUl.offsetLeft > 0) {

			oUl.style.left = -oUl.offsetWidth / speed + 'px';

		}
		oUl.style.left = oUl.offsetLeft + speed + 'px';
		//oUl.style.left = oUl.offsetLeft-2+'px';

	}

	var timer = setInterval(move, 30)

	oDiv.onmouseover = function() {

		clearInterval(timer);

	}

	oDiv.onmouseout = function() {

		timer = setInterval(move, 30)

	}

}
