//Append svg
var svg = d3.select("#content").append("svg")
    .attr("width", 960)
    .attr("height", 800)
  .append("g")
    .attr("transform", "translate(30,250)");

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
    .attr("height", 420); 

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