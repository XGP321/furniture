var doms = {
	carousel: document.querySelector('.carousel'),
	indicators: document.querySelectorAll('.indicator span')
};

function moveTo(index) {
	doms.carousel.style.transform = `translateY(-${index}00%)`;
	var active = document.querySelector('.indicator span.active');
	active.classList.remove('active');
	doms.indicators[index].classList.add('active');

}
doms.indicators.forEach(function(item, i) {
	item.onclick = function() {
		moveTo(i);
	};
});
