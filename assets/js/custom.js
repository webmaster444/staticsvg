//Append svg
var svg = d3.select("#content").append("svg")
    .attr("width", 960)
    .attr("height", 800)
  .append("g")
    .attr("transform", "translate(30,10)");

//Append Arrow
var rect = svg.append("path")
    .attr("d", drawArrow(0, 120, 240, 150, 60))
    .style('stroke','#c60d16');

//Append Wrapper Rect
rect = svg.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 250)
    .attr("y", 10)
    .attr("width", 200)
    .attr("height", 420)
    .attr('stroke','#000');    

//Apend sub rects.
rect = svg.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 270)
    .attr("y", 30)
    .attr("width", 160)
    .attr("height", 120)
    .attr('stroke','#44d13c');    

rect = svg.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 270)
    .attr("y", 160)
    .attr("width", 160)
    .attr("height", 120)
    .attr('stroke','#44d13c');

rect = svg.append("rect")    
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 270)
    .attr("y", 290)
    .attr("width", 160)
    .attr("height", 120)
    .attr('stroke','#44d13c');


//Append black arrow
var payload_g_wrapper = svg.append('g').attr('class','payload_wrapper').attr("transform", "translate(30,500)");
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