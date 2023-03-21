var num_jia = document.getElementById("num-jia");
		var num_jian = document.getElementById("num-jian"); 
		var input_num = document.getElementById("input-num"); 
		num_jia.onmousedown = function() {
			var i = 0; 
			mouseTime = setInterval(function() { 
				add();
				i++ 
			}, 1000);
			if (i == 0) { 
				add();
			}
		}

		function add() { 
			if (input_num.value >= 999) {
				input_num.value = 999;
			} else {
				input_num.value = parseInt(input_num.value) + 1;
			}
		}
		num_jia.onmouseup = function() { 
			clearInterval(mouseTime); 
		}
		num_jian.onmousedown = function() {
			var i = 0;
			mouseTime = setInterval(function() {
				minus();
				i++ 
			}, 1000); 
			if (i == 0) {
				minus();
			}
		}

		function minus() {
			if (input_num.value <= 1) {
				input_num.value = 1;
			} else {
				input_num.value = parseInt(input_num.value) - 1;
			}
		}
		num_jian.onmouseup = function() {
			clearInterval(mouseTime);
		}