var canvas=function(id){
  // Set up the canvas and context
  this.canvas = document.getElementById(id);
  if (this.canvas.getContext){
    this.ctx = this.canvas.getContext('2d');
  }
  else{
    alert("Your browser is not supported at this time.")
  }
  
  this.line=function(x1,y1,x2,y2,color){
    this.ctx.beginPath();
    this.ctx.moveTo(x1,y1);
    this.ctx.strokeStyle=color; // If not color supplied, canvas defaults to black
    this.ctx.lineTo(x2,y2);
    this.ctx.stroke();
  }
  
  this.arc=function(x,y,radius, startAngle, endAngle, fillcolor,bordercolor, anticlockwise){
    if(!anticlockwise) anticlockwise=false;
    this.ctx.beginPath();
    this.ctx.strokeStyle=bordercolor;
    this.ctx.fillStyle=fillcolor;
    // Convert Degrees to radians
    var astartAngle=(Math.PI/180)*startAngle;
    var aendAngle=(Math.PI/180)*endAngle;
    this.ctx.arc(x, y, radius, astartAngle, aendAngle, anticlockwise);
    if(fillcolor!==undefined && fillcolor!==false) this.ctx.fill();
    if(bordercolor!==undefined && bordercolor!==false) this.ctx.stroke();
  }
  
  this.circle=function(x,y,radius,fillcolor,bordercolor){
    this.arc(x,y,radius,0,360,fillcolor,bordercolor);
  }
  
  this.rect=function(x,y,width,height,fillcolor,bordercolor){
    if(fillcolor!==undefined && fillcolor!==false){
      this.ctx.fillStyle=fillcolor;
      this.ctx.fillRect(x,y,width,height);
    }
    if(bordercolor!==undefined && bordercolor!==false){
      this.ctx.strokeStyle=bordercolor;
      this.ctx.strokeRect(x,y,width,height);
    }
  }
  /*
  this.roundedRect=function(x,y,width,height,fillcolor,bordercolor,radius){
    if(radius===false || radius===undefined){      
      // Default radius is 10% of the shortest side
      if(width>height) radius=height/10;
      else radius=width/10;
      radius=Math.round(radius);
    }
    this.rect(x-radius,y-radius,width-radius,height-radius,fillcolor);
    //this.circle(x,y,radius,fillcolor);
  }*/
  
  this.clear=function(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
  
}
