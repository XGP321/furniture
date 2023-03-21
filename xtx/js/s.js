var aImgs = document.querySelectorAll('.xtx-main img');
var aLis = document.querySelectorAll('.xtx-main li');
var btnLeft = document.querySelector('.xtx-main .left');
var btnRight = document.querySelector('.xtx-main .right');
var index = 0;
var lastIndex = 0;
btnRight.onclick = function() {
	lastIndex = index;
	aImgs[lastIndex].className = '';
	aLis[lastIndex].className = '';
	index++;
	index %= aImgs.length;
	aImgs[index].className = 'on';
	aLis[index].className = 'active';
}
btnLeft.onclick = function() {
	lastIndex = index;
	aImgs[lastIndex].className = '';
	aLis[lastIndex].className = '';
	index--;
	if (index < 0) {
		index = aImgs.length - 1;
	}
	aImgs[index].className = 'on';
	aLis[index].className = 'active';
}
var timer = setInterval(function() {
	btnRight.click();
},4000)
