function Hint(){
	this.drawHint = function(){
		ctx.translate(200,100);
		drawLevel(ctx);
		
	var transformBlock = {m11:1,
	m12:0,
	m21:(animate ? cur_blockSizeX : 0),
	m22:1,
	dx:0,
	dy:0};

	var loopX = 0;
	var loopY = 0;
	var light = 0;
	circlesCount = 4;
	
	drawField(ctx);

	if (cur_blockSizeX + jump_stepX > 0.2 || cur_blockSizeX + jump_stepX < -0.2)
		jump_stepX = -jump_stepX;
	cur_blockSizeX += jump_stepX;

	processEyes();

	ctx.save();
	ctx.beginPath();
	ctx.rect(0, 0, blockSize*circlesCount, blockSize*circlesCount);
	ctx.clip();
	
    for (var i=0; i<circlesCount; i++) { // отобразить все окружности
	
		for(var j = 0; j < circlesCount; j++) {
			if((j*blockSize + offsetX[i])%fieldSize < 0)
			{
				loopX = fieldSize;
			}
			else loopX = 0;
			if((i*blockSize + offsetY[j])%fieldSize < 0)
			{
				loopY = fieldSize;
			}
			else loopY = 0;
			if(selectedCircleX != undefined) 
			{
				if((moving == 0 && (selectedCircleX==j || selectedCircleY==i)) || (moving == 1 && selectedCircleY==i) || (moving == 2 && selectedCircleX==j))
					light = 1;

			}
			if(offsetX[i] != 0)
			{
				var fantom_pos;
				var fantom_pos_x;				
				if(offsetX[i] > 0)
				{
					//Вычислить цвет и координаты блока фантома
					//Цвет = кол-во блоков - округленное до величины целых блоков смещение - это при движении вправо
					//Позиция = смещение mod размер блока - х
					fantom_pos = (circlesCount - Math.floor(offsetX[i] / blockSize)%circlesCount) - 1;
					fantom_pos_x = offsetX[i]%blockSize - blockSize;
				}
				if(offsetX[i] < 0)
				{
					//тут надо взять блок координаты которого находятся на первом местве в ряду
					fantom_pos = Math.floor(Math.abs(offsetX[i]) / blockSize)%circlesCount;
					fantom_pos_x = offsetX[i]%blockSize;
				}
				transformBlock.dx = fantom_pos_x + TranslateX;
				transformBlock.dy = (i*blockSize + offsetY[j])%fieldSize + loopY + TranslateY;
				
				draw(function(ctx){
				drawFantom(ctx, circles[i][fantom_pos].color,circles[i][fantom_pos].drawEyes,light);
				},transformBlock);	
			}
			if(offsetY[j] != 0)
			{
				var fantom_pos;
				var fantom_pos_y;
				if(offsetY[j] > 0)
				{
					//Вычислить цвет и координаты блока фантома
					//Цвет = кол-во блоков - округленное до величины целых блоков смещение - это при движении вправо
					//Позиция = смещение mod размер блока - х
					fantom_pos = (circlesCount - Math.floor(offsetY[j] / blockSize)%circlesCount) - 1;
					fantom_pos_y = offsetY[j]%blockSize - blockSize;
				}
				if(offsetY[j] < 0)
				{
					//тут надо взять блок координаты которого находятся на первом месте в ряду
					fantom_pos = Math.floor(Math.abs(offsetY[j]) / blockSize)%circlesCount;
					fantom_pos_y = offsetY[j]%blockSize;
				}
				//console.log(fantom_pos,fantom_pos_y);
				transformBlock.dx = (j*blockSize + offsetX[i])%fieldSize + loopX + TranslateX;
				transformBlock.dy = fantom_pos_y + TranslateY;
				
				draw(function(ctx){
				drawFantom(ctx, circles[fantom_pos][j].color,circles[fantom_pos][j].drawEyes,light);
				},transformBlock);	
			}
			transformBlock.dx = (j*blockSize + offsetX[i])%fieldSize + loopX + TranslateX;
			transformBlock.dy = (i*blockSize + offsetY[j])%fieldSize + loopY + TranslateY;
			
			circles[i][j].draw(ctx,transformBlock,light);

			light = 0;
		}
    }
	ctx.restore();
	}

}