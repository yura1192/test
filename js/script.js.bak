var canvas, ctx, ctxBcg, canvasBcg;
var clickX;
var clickY;
// инициализация
$(function(){
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');
	
	width = $(window).width();
	height = $(window).height();
	
	canvas.width = width;
	canvas.height = height;

	
	
	// Загрузка музыки и звуков
//canvas.ontouchstart = function(e) { 
	//console.log(canvas);

//}
	// привязываем событие нажатия мыши (для перетаскивания)
	//$('#scene').mousedown(function(e) {
	//canvas.ontouchstart = function (e) {
	//menu.draw(ctx);
		//ctx.clearRect(0, 0, width, height);
		//clickX = e.offsetX || 0;
		//clickY = e.offsetY || 0;
		//clickX = e.touches[0].pageX || 0;
		//clickY = e.touches[0].pageY || 0;
		
		//ctx.fillRect(0, 0, clickX, clickY);
		
   // };
var d=3;

    //$('#scene').mousemove(function(e) { // привязываем событие движения мыши для перетаскивания выбранной окружности
	 var handler1=function(e,f) {
            var mouseX;
            var mouseY;
			if (e.offsetX)
			{
			mouseX = e.offsetX || 0;
			mouseY = e.offsetY || 0;
			}else{
			mouseX = e.touches[0].pageX || 0;
			mouseY = e.touches[0].pageY || 0;
			}
			console.log(e);
		ctx.clearRect(0, 0, width, height);
		//ctx.fillRect(0, 0, mouseX, mouseY);
		  ctx.fillStyle = "#00F";
			ctx.strokeStyle = "#F00";
			ctx.font = "italic 15pt Arial";
			ctx.fillText(mouseX+", "+mouseY, mouseX, mouseY);

	}

	canvas.addEventListener('touchmove', handler1,false);

    //$('#scene').mouseup(function(e) { // событие mouseup - очистка выбранной окружности
	//canvas.ontouchend = function(e) {
	
			
//    }

    //setInterval(drawScene, 30); // скорость отрисовки
});