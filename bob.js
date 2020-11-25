/*class BOB{

    constructor(x,y,radius ){
        var Goption={
            restitution:0.5,
            friction:0.3,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius)
        this.radius=radius;
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
    pop()
        }

        }*/

        class BOB{
            constructor(x,y,r)
	{
		var options={
			//isStatic:false,
			restitution:0.2,
			friction:3,
			density: 3
			
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(255,0,0)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
        