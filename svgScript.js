$(document).ready(function () {


  var s = Snap("#idsvg1");
	console.log("s", s)	


	const colom = s.select("#idColom")
	// colom.attr({fill: "red"})
	console.log("colom", colom)
	console.log("colom.getBBox()", colom.getBBox())
	// colom.animate({ 'transform' : `r360, 100 , 100` },4000);
	// colom.transform(`r0`)
	// colom.addClass("fade")

	const groc = s.select("#cercleGroc")
	const taronja = s.select("#cercleTaronja")
	const vermell = s.select("#cercleVermell")



	const grupCercles = s.select("#grupCercles");
	// grupCercles.transform("r45")

	// grupCercles.attr({
	// 	fill:"#2596be",
	// 	fillOpacity: 1,
	// 	opacity: 0.5,
	// });
	

	// const rect = s.rect(25, 30, 50, 40)
	// var bbox = rect.getBBox();
	// rect.animate({ transform: "r200," + (bbox.cx + (bbox.w/2)) + ',' + (bbox.cy+bbox.h/2) }, 4000);
	// rect.animate({ 'transform' : `r180` }, 4000);


	// grupCercles.addClass("rotacio")
	

	// var bbox = grupCercles.getBBox();
	// grupCercles.animate({ transform: "r180," + bbox.cx + ',' + bbox.cy }, 2000);


	function blink(){
		colom.animate({opacity: 0}, 4000, function(){
			colom.animate({}, 2000, function() {
				colom.animate({opacity: 1}, 4000, function() {
					colom.animate({}, 2000)
				});
			});
		});
	};

	blink()
	setInterval(blink, 12000);
	






	

	
	// grupCercles.addClass("rotacio");


	// const rect = s.rect(gcBox.cx, gcBox.cy, gcBox.w, gcBox.h).attr({
	// 	fill: "green",
	// 	"fill-opacity": 0,
	// 	stroke: "red",
	// 	strokeWidth: 5
	// })






/* 	
	var ss = Snap("#idsvg2");

	const rect2 = ss.rect(25, 30, 50, 40)
	var bbox = rect2.getBBox();
	// rect.animate({ transform: "r200," + (bbox.cx + (bbox.w/2)) + ',' + (bbox.cy+bbox.h/2) }, 4000);
	rect2.animate({ 'transform' : `r180` }, 4000);

 */








})