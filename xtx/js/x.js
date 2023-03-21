var cont = document.querySelector('.cont');
var mask = document.querySelector('.mask');
var big = document.querySelector('.big');
var big_img = document.querySelector('.big_img');
 
cont.addEventListener('mouseover',function(){
     mask.style.display = 'block';
     big.style.display = 'block';
})
cont.addEventListener('mouseout',function(){
      mask.style.display = 'none';
      big.style.display = 'none';
})
cont.addEventListener('mousemove',function(e){
 
      var mouseX = e.pageX ;
      var mouseY = e.pageY ;
        
      var boxLeft = cont.offsetLeft ;
      var boxTop = cont.offsetTop ;
 
      var x = mouseX - boxLeft ;
      var y = mouseY - boxTop ;
 
      var moveX = x - mask.offsetLeft/2 ;
      var moveY = y - mask.offsetHeight/2;
 
      if( moveX <= 0){
          moveX = 0 ;
      }else if( moveX >= cont.offsetWidth-mask.offsetWidth){
          moveX = cont.offsetWidth-mask.offsetWidth;
      }
 
      if( moveY <= 0){
          moveY = 0 ;
      }else if ( moveY >= cont.offsetHeight-mask.offsetHeight){
          moveY = cont.offsetHeight-mask.offsetHeight;
      }
 
      mask.style.top = moveY + 'px' ;
      mask.style.left = moveX + 'px' ;
 
      var maskMaxX = cont.offsetWidth - mask.offsetWidth;
      var maskMaxY = cont.offsetHeight - mask.offsetHeight ;
 
      var bigImgMaxX = big_img.offsetWidth - big.offsetWidth ;
      var bigImgMaxY = big_img.offsetHeight - big.offsetHeight ;
	  
      var bigX = moveX * bigImgMaxX / maskMaxX ;
      var bigY = moveY * bigImgMaxY / maskMaxY ;
 
      big_img.style.left = -bigX+'px';
      big_img.style.top = -bigY +'px';
	 
        
})