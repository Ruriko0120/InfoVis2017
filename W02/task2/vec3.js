//Constructor
Vec3 = function(x,y,z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

Vec3.prototype.sum = function()
{
	return this.x+this.y+this.z;
}

Vec3.prototype.min = function()
{
	var m1 = Math.min(this.x,this.y,this.z);
	return m1;
}

Vec3.prototype.mid = function()
{
    var m2 = this.x+this.y+this.z-(Math.max(this.x,this.y,this.z)+Math.min(this.x,this.y,this.z));
    return m2;
}


Vec3.prototype.max = function(){

var m3 = Math.max(this.x,this.y,this.z);
return m3;

}

   function AreaOfTriangle(v0,v1,v2){
    var va = new Vec3(v1.x-v0.x,v1.y-v0.y,v1.z-v0.z);
    var vb = new Vec3(v2.x-v0.x,v2.y-v0.y,v2.z-v0.z);
    var S = (1/2)*(Math.sqrt(Math.pow((va.y* vb.z)-(va.z*vb.y),2)+Math.pow((va.z*vb.x)-(va.x*vb.z),2)+Math.pow((va.x*vb.y)-(va.y*vb.x),2)));
    return S;
    }
  
