class Iron{
	constructor(x,y){
	  var options ={
	    'restitution':0.8,
		'friction':3,
		'density':30
	 }
    
	
	// assign options to the rubber ball
        this.body = Bodies.rectangle(x, y, 30, 15, options);
        this.width = 30;
        this.height = 15;
		World.add(world, this.body);

	}
	display(){
			var ironpos=this.body.position;
			var angle= this.body.angle;
			push();
			translate(ironpos.x, ironpos.y);
			rotate(angle);
			rectMode(CENTER)
		    fill("brown");
			rect(0,0,this.Width,this.height);
			pop();
	}
};