// 购物车
$(".shop-car-btn p a").click(function() {

	var img = $(this).parent().siblings("img").attr("src");
	var txt = $(this).parent().siblings("p.top_name").html();
	var money = $(this).siblings("span").html();
	$(".lieb").append("<img style='float:left' src='" + img +
		"' width='50' height='50' /><p style='float:left'>" + txt + "</p><p style='float:left'>" +
		money + "</p><br/>");
	play(event);
});
// 物品飞入动画
function play(event) {
	var s_left = event.clientX;
	var s_top = event.clientY;
	var e_left = $(".xtx-car a").offset().left;
	var e_top = $(".xtx-car a").offset().top;
	var _this = $(event.target);
	var img = _this.parent().siblings("img").attr("src");
	var flyer = $("<img src='" + img + "' width='50' style='border-radius:50%'/>");
	flyer.fly({
		start: {
			left: s_left,
			top: s_top
		},
		end: {
			left: e_left,
			top: e_top
		},
		onEnd: function() {
			flyer.fadeOut("slow", function() {
				$(this).remove();
			});
		}
	})
}
// 加购物车数量
window.onload = function() {
	var count = 0;
	var obt = document.getElementById("bt");
	var odiv = document.getElementById("antzone");
	odiv.innerHTML = count;
	obt.onclick = function() {
		count = count + 1;
		odiv.innerHTML = count;
	}
}
// 边框选择
var sku = document.getElementsByName('.sku');
var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		for (var i = 0; i < lis.length; i++) {
			lis[i].style.border = "";
		}
		this.style.border = "solid 1px black";
	}
}
