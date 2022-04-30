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
	console.log("Vermell", vermell)

	// const bbG = groc.getBBox()
	// const bbT = taronja.getBBox()
	// const bbV = vermell.getBBox()

	// vermell.transform("s0.87")
	// vermell.animate({transform: `s0.97 t-${bbT.cx},${bbT.cy}`},2000)
	const posVermell = {
		posx : parseInt(vermell.attr("cx")),
		posy : parseInt(vermell.attr("cy")),
		radi : vermell.attr("r")
	}
	
	const posTaronja = {
		posx : parseInt(taronja.attr("cx")),
		posy : parseInt(taronja.attr("cy")),
		radi : taronja.attr("r")
	}
	
	const posGroc = {
		posx : parseInt(groc.attr("cx")),
		posy : parseInt(groc.attr("cy")),
		radi : groc.attr("r") -1
	}
	

	console.log("posVermell.posx:", posVermell.posx, "posVermell.posy:", posVermell.posy)
	console.log("posTaronja.posx:", posTaronja.posx, "posTaronja.posy:", posTaronja.posy)
	console.log("posGroc.posx:", posGroc.posx, "posGroc.posy:", posGroc.posy)
	console.log("-------")
	// vermell.drag()

	// vermell.animate({transform: `s0.97 t-${posTaronja.cx},${posTaronja.cy}`},2000)
	const intercanviPosicioCercles = function () {
		vermell.animate({r: posTaronja.radi, cx: posTaronja.posx, cy: posTaronja.posy},8000, function(){
			vermell.animate({r: posGroc.radi, cx: posGroc.posx, cy: posGroc.posy},8000, function(){
				vermell.animate({r: posVermell.radi, cx: posVermell.posx, cy: posVermell.posy},8000)
			})
		})
		taronja.animate({r: posGroc.radi, cx: posGroc.posx, cy: posGroc.posy},8000, function(){
			taronja.animate({r: posVermell.radi, cx: posVermell.posx, cy: posVermell.posy},8000, function(){
				taronja.animate({r: posTaronja.radi, cx: posTaronja.posx, cy: posTaronja.posy},8000)
			})
		})
		groc.animate({r: posVermell.radi, cx: posVermell.posx, cy: posVermell.posy},8000, function(){
			groc.animate({r: posTaronja.radi, cx: posTaronja.posx, cy: posTaronja.posy},8000, function(){
				groc.animate({r: posGroc.radi, cx: posGroc.posx, cy: posGroc.posy},8000)
			})
		})
		// console.log("posVermell.posx:", parseInt(vermell.attr("cx")), "posVermell.posy:", vermell.attr("cy"))
	}


	$("#intercanviPosicioBtn").on("click", function(){
		intercanviPosicioCercles()
		interval2 = setInterval(intercanviPosicioCercles, 24000)
	})

	$("#stopIntercanviPosicioBtn").on("click", function(){
		clearInterval(interval2)
	})







	var moveFunc = function (dx, dy) {
    this.attr( { 
			cx: posVermell.posx + dx , 
			cy: posVermell.posy + dy
		}); // basic drag, you would want to adjust to take care of where you grab etc.
		// console.log("posx", posx, "posy", posy)
	};

	vermell.drag( moveFunc,
							function(){
									console.log("Move started");
							},
							function(){
									console.log("Move stopped");
							}
			);

	// const grupCercles = s.select("#grupCercles");
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


	$("#blinkBtn").on("click", function(){
		blink()
		interval1 = setInterval(blink, 12000);
	})

	$("#stopBlinkBtn").on("click", function(){
		clearInterval(interval1)
	})

	
	




	const pathG = s.select("#pathG")
	// groc.attr({
	// 	cx: 183,
	// 	cy: 79
	// })
	// groc.drawAtPath( pathG, 4000)
	

	
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