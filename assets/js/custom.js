//Append svg
var svg = d3.select("#content").append("svg")
    .attr("width", 970)
    .attr("height", 820)
  .append("g")
    .attr("transform", "translate(30,10)");


//Wrapper Rect
var rect = svg.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -20)
    .attr("y", 10)
    .attr("width", 950)
    .attr("height", 780)
    .attr('stroke','#000');  

for(var i=0;i<4;i++){
  var g_flow_wrapper = svg.append('g').attr('transform',function(){
    return "translate("+i*230 + ", 0)";
  })
  //Append Arrow
    rect = g_flow_wrapper.append("path")
    .attr("d", drawArrow(0, 120, 100, 150, 50))
    .style('stroke','#c60d16');

//Append Wrapper Rect
rect = g_flow_wrapper.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 110)
    .attr("y", 30)
    .attr("width", 110)
    .attr("height", 400)
    .attr('stroke','#000');    

//Apend sub rects.
rect = g_flow_wrapper.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 120)
    .attr("y", 40)
    .attr("width", 90)
    .attr("height", 120)
    .attr('stroke','#44d13c');    

rect = g_flow_wrapper.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 120)
    .attr("y", 170)
    .attr("width", 90)
    .attr("height", 120)
    .attr('stroke','#44d13c');

rect = g_flow_wrapper.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 120)
    .attr("y", 300)
    .attr("width", 90)
    .attr("height", 120)
    .attr('stroke','#44d13c');
}

//CRM PAYLOAD PROCESSING SECTION
var payload_g_wrapper = svg.append('g').attr('class','payload_wrapper').attr("transform", "translate(0,500)");
//Append container rect
var payload_g_wrapper_rect = payload_g_wrapper.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 0)
    .attr("y", -50)
    .attr("width", 910)
    .attr("height", 160)
    .attr('stroke','#000'); 

//Append 4 arrows and rects
for(var i=0;i<4;i++){
  var g_w = payload_g_wrapper.append('g').attr('class','g_wrapper').attr('transform',function(){
    return "translate("+i*220 + ", 0)";
  });

  rect = g_w.append("path")
    .attr("d", drawArrow(0, 20, 100, 20, 10))
    .style('fill','#000')
    .style('stroke','#000');

  var rect_wrapper = g_w.append('g');
  rect = rect_wrapper.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 105)
    .attr("y", -30)
    .attr("width", 110)
    .attr("height", 120)
    .attr('stroke','#44d13c');    
}


var g_wrapper = svg.append('g').attr('class','payload_wrapper').attr("transform", "translate(0,670)");
var g_left = g_wrapper.append('g');
var g_left_rect = g_left.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 0)
    .attr("y", -50)
    .attr("width", 450)
    .attr("height", 160)
    .attr('stroke','#000'); 

var g_lr = g_left.append('g').attr("transform", "translate(210,0)");;
var g_left_rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -10)
    .attr("y", -40)
    .attr("width", 220)
    .attr("height", 140)
    .attr('stroke','#000'); 

var rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 0)
    .attr("y", -10)
    .attr("width", 65)
    .attr("height", 100)
    .attr('stroke','#44d13c');   

var rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 67)
    .attr("y", -10)
    .attr("width", 65)
    .attr("height", 100)
    .attr('stroke','#44d13c');

var rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 133)
    .attr("y", -10)
    .attr("width", 65)
    .attr("height", 100)
    .attr('stroke','#44d13c');

//Information Section
var g_left = g_wrapper.append('g').attr('transform',"translate(480,0)");
var g_left_rect = g_left.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -20)
    .attr("y", -50)
    .attr("width", 450)
    .attr("height", 160)
    .attr('stroke','#000'); 

var g_lr = g_left.append('g').attr("transform", "translate(210,0)");;
var g_left_rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -10)
    .attr("y", -40)
    .attr("width", 220)
    .attr("height", 140)
    .attr('stroke','#000'); 

var rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 0)
    .attr("y", -10)
    .attr("width", 65)
    .attr("height", 100)
    .attr('stroke','#44d13c');   

var rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 67)
    .attr("y", -10)
    .attr("width", 65)
    .attr("height", 100)
    .attr('stroke','#44d13c');

var rect = g_lr.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 133)
    .attr("y", -10)
    .attr("width", 65)
    .attr("height", 100)
    .attr('stroke','#44d13c');
// Returns path data for a rectangle with rounded right corners.
// Note: it’s probably easier to use a <rect> element with rx and ry attributes!
// The top-left corner is ⟨x,y⟩.
function drawArrow(x, y, width, height, ahwidth) {
  var qVH = height / 4;
  return "M" + x + "," + (y+qVH)
       + "h" + (width - ahwidth)
       + "v" + (-qVH)
       + "L" + (x+width) + ','+(y + height /2)
       + "L" + (x+width-ahwidth) +',' +(y+height)
       + "v" + (-qVH)
       + "H" + (x)            
       + "z";
}