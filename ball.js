
function Ball(radius,color){
	if(radius===undefined)
	{
		radius=50;}
		if(color===undefined){
			color="#FF00FF";}
					
	this.x=0;
	this.y=0;
    this.radius=5;
    this.color=color;
}
Ball.prototype.draw=function(context){

	context.save();
    context.translate(this.x*3,this.y);
    context.fillStyle=this.color;
    context.beginPath();
   
	context.arc(0, 0, this.radius,0, (Math.PI *2), true);
				
    context.closePath();
    context.fill();
    context.restore();
    
}