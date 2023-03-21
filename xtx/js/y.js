function randomNum(min, max) {
        	return Math.floor(Math.random() * (max - min) + min);
        }

        function randomColor(min, max) {
        	var r = randomNum(min, max);
        	var g = randomNum(min, max);
        	var b = randomNum(min, max);
        	return "rgb(" + r + "," + g + "," + b + ")";
        }
        drawPic();
        document.getElementById("changeImg").onclick = function(e) {
        	e.preventDefault();
        	drawPic();
        }

        function drawPic() {
        	var canvas = document.getElementById("canvas");
        	var width = canvas.width;
        	var height = canvas.height;
        	var ctx = canvas.getContext('2d');
        	ctx.textBaseline = 'bottom';

        	ctx.fillStyle = randomColor(180, 240);
        	ctx.fillRect(0, 0, width, height);
        	var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
        	for (var i = 0; i < 4; i++) {
        		var txt = str[randomNum(0, str.length)];
        		ctx.fillStyle = randomColor(50, 160);
        		ctx.font = randomNum(15, 40) + 'px SimHei';
        		var x = 10 + i * 25;
        		var y = randomNum(25, 45);
        		var deg = randomNum(-45, 45);
        		ctx.translate(x, y);
        		ctx.rotate(deg * Math.PI / 180);
        		ctx.fillText(txt, 0, 0);
        		ctx.rotate(-deg * Math.PI / 180);
        		ctx.translate(-x, -y);
        	}
        	for (var i = 0; i < 8; i++) {
        		ctx.strokeStyle = randomColor(40, 180);
        		ctx.beginPath();
        		ctx.moveTo(randomNum(0, width), randomNum(0, height));
        		ctx.lineTo(randomNum(0, width), randomNum(0, height));
        		ctx.stroke();
        	}
        	for (var i = 0; i < 100; i++) {
        		ctx.fillStyle = randomColor(0, 255);
        		ctx.beginPath();
        		ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
        		ctx.fill();
        	}
        }

