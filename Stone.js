class Stone{
	constructor(x,y){
	  var options ={
	    'restitution':0.8,
		'friction':0.9,
		'density':12
	 }
    
	
	
		
        this.width= 30;
        this.height=50;
	
		this.body=Bodies.rectangle(this.x, this.y, options);
		World.add(world, this.body);

	}
	display(){
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.Width,this.height);
			pop();
	}

};