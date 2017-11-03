//Append svg
var svg = d3.select("#content").append("svg")
    // .attr("width", 970)
    // .attr("height", 820)
    .attr('viewBox', '0 0 970 570')
    .append("g")
    .attr("transform", "translate(30,10)");


//Wrapper Rect
var rect = svg.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -20)
    .attr("y", 10)
    .attr("width", 950)
    .attr("height", 520)
    .attr('stroke', '#000');

var top_data = [{
    id:1,
    alabel:'Ingest Ar',
    label:'Ingest',
    score:1,
    point:0,
    acolor:'#a60b10',
    properties:{
        'Availability': 100,
        'Active Jobs':50,
        'Records Processed':20
    }
},{
    id:1,
    alabel:'ODS Ar',
    label:'ODS',
    acolor:'#b0cc9c',
    score:1,
    point:0,
    properties:{
        'Availability': 100,
        'Active Jobs':50,
        'Records Processed':20
    }
},{
    id:1,
    alabel:'Persist Ar',
    label:'Persist',
    score:1,
    acolor:'#c37340',
    point:0,
    properties:{
        'Availability': 100,
        'Active Jobs':50,
        'Records Processed':20
    }
},{
    id:1,
    alabel:'Access Ar',
    label:'Access',
    score:1,
    point:0,
    acolor:'#b0cc9c',
    properties:{
        'Availability': 100,
        'Active Jobs':50,
        'Records Processed':20
    }
}]

    var g_flow_wrapper = svg.selectAll('.arrow_container').data(top_data).enter().append('g').attr('transform', function(d,i) {
        return "translate(" + i * 230 + ", 0)";
    }).attr('class','arrow_container');
    //Append Arrow
    rect = g_flow_wrapper.append("path")
        .attr("d", drawArrow(0, 100, 100, 100, 50))
        .style('stroke', function(d){
            return d.acolor;
        });

    //Append Wrapper Rect
    rect = g_flow_wrapper.append("rect")
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("x", 110)
        .attr("y", 15)
        .attr("width", 110)
        .attr("height", 270)
        .attr('stroke', '#000');
    
    g_flow_wrapper.append("text")
        .attr("x", 160)
        .attr("y", 25)
        .attr("dy", ".35em")
        .text(function(d) { return d.label; })
        .call(wrap, 100);

    g_flow_wrapper.append("text")
        .attr("x", 40)
        .attr("y", 135)
        .attr("dy", ".35em")
        .text(function(d) { return d.alabel; })
        .call(wrap, 100);
    
    g_flow_wrapper.append("text")
        .attr("x", 10)
        .attr("y", 165)
        .attr("dy", ".35em")
        .attr('class','small_text text-start')
        .text(function(d) { return 'Score:    ' + d.score; })
        .call(wrap, 100);

    g_flow_wrapper.append("text")
        .attr("x", 10)
        .attr("y", 155)
        .attr("dy", ".35em")
        .attr('class','small_text text-start')
        .text(function(d) { return 'Point:    ' + d.point; })
        .call(wrap, 100);        
    //Apend sub rects.
    for(var j=0;j<3;j++){
        rect = g_flow_wrapper.append("rect")
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("x", 120)
        .attr("y", function(){
            return(j*75 + 40)
        })
        .attr("width", 90)
        .attr("height", 70)
        .attr('class', 'end_item');

        g_flow_wrapper.append("text")
            .attr("x", 165)
            .attr("y", function(){
                return 70*j + 70;
            })
            .attr("dy", ".35em")
            .attr('class','small_text')
            .text(function(d){
                theTypeIs = Object.keys(d.properties)[j];
                return theTypeIs +': '+Object.values(d.properties)[j];
            }).call(wrap, 60);
    }

var clrm_payloading_texts = ['CLRM Landing Area for XML Files', 'ODS Acknowledgement', 'Access Layer Completion', "Acknowledgement to Source"];
var clrm_paylaoding_title = 'CLRM Payload Processing';
//CRM PAYLOAD PROCESSING SECTION
var payload_g_wrapper = svg.append('g').attr('class', 'payload_wrapper').attr("transform", "translate(0,350)");

//Append container rect
var payload_g_wrapper_rect = payload_g_wrapper.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 0)
    .attr("y", -50)
    .attr("width", 910)
    .attr("height", 110)
    .attr('stroke', '#000');


//Append 4 arrows and rects

var g_w = payload_g_wrapper.selectAll('.g_wrapper').data(clrm_payloading_texts).enter().append('g').attr('class', 'g_wrapper').attr('transform', function(d,i) {
    return "translate(" + parseInt(i * 220 + 15) + ", 0)";
});

rect = g_w.append("path")
    .attr("d", drawArrow(0, -10, 100, 20, 10))
    .style('fill', '#000')
    .style('stroke', '#000');

var rect_wrapper = g_w.append('g');
rect = rect_wrapper.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", 105)
    .attr("y", -40)
    .attr("width", 110)
    .attr("height", 80)
    .attr('class', 'end_item');

rect_wrapper.append("text")
    .attr("x", 160)
    .attr("y", -5)
    .attr("dy", ".35em")
    .text(function(d) { return d; })
    .call(wrap, 100);

payload_g_wrapper.append("text")
    .attr("x", 460)
    .attr("y", 50)
    .attr("dy", ".35em")
    .text(clrm_paylaoding_title);

var last_data = [{
    id:1,
    label:'CA Workload Automation',
    sublabel:'Workflow Scheduling',
    properties:{
        'Availability': 100,
        'Active Workflows':50,
        'Workflow Processed':20
    }
},{
    id:2,
    label:'Informatica',
    sublabel:'Workflow Job Processing',
    properties:{
        'Availability': 100,
        'Active Workflows':50,
        'Workflow Processed':20
    }
}];
var g_wrapper = svg.selectAll('.payload_wrapper1').data(last_data).enter().append('g').attr('class', 'payload_wrapper1').attr("transform", "translate(0,470)");

    var g_left = g_wrapper.append('g').attr('transform', function(d,j) {
        return "translate(" + j * 460 + ",0)";
    });
    var g_left_rect = g_left.append("rect")
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("x", 0)
        .attr("y", -50)
        .attr("width", 450)
        .attr("height", 100)
        .attr('stroke', '#000');
    
    g_left.append("text")
        .attr("x", 10)
        .attr("y", 30)
        .attr("dy", ".35em")
        .text(function(d){return d.label})
        .attr("class",'text-start')
        .attr('text-anchor','start');

    var g_lr = g_left.append('g').attr("transform", "translate(230,0)");;
    var g_left_rect = g_lr.append("rect")
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("x", -10)
        .attr("y", -40)
        .attr("width", 220)
        .attr("height", 80)
        .attr('stroke', '#000');
    
    g_lr.append("text")
        .attr("x", 100)
        .attr("y", -30)
        .attr("dy", ".35em")
        .text(function(d){return d.sublabel});        

    for (var i = 0; i < 3; i++) {
        var rect = g_lr.append("rect")
            .attr("rx", 6)
            .attr("ry", 6)
            .attr("x", function() {
                return i * 67;
            })
            .attr("y", -20)
            .attr("width", 65)
            .attr("height", 50)
            .attr('class', 'end_item');
        g_lr.append("text")
            .attr("x", function(){
                return 65*i + 35;
            })
            .attr("y", 0)
            .attr("dy", ".35em")
            .attr('class','small_text')
            .text(function(d){
                theTypeIs = Object.keys(d.properties)[i];
                return theTypeIs +': '+Object.values(d.properties)[i];;
            }).call(wrap, 60); 
    }


// Returns path data for a rectangle with rounded right corners.
// Note: it’s probably easier to use a <rect> element with rx and ry attributes!
// The top-left corner is ⟨x,y⟩.
function drawArrow(x, y, width, height, ahwidth) {
    var qVH = height / 4;
    return "M" + x + "," + (y + qVH) +
        "h" + (width - ahwidth) +
        "v" + (-qVH) +
        "L" + (x + width) + ',' + (y + height / 2) +
        "L" + (x + width - ahwidth) + ',' + (y + height) +
        "v" + (-qVH) +
        "H" + (x) +
        "z";
}

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x= text.attr('x'),
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}