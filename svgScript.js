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
	
	
	// posicio i radi de cada cercle
	const prVermell = {
		cx : parseInt(vermell.attr("cx")),
		cy : parseInt(vermell.attr("cy")),
		r : vermell.attr("r")
	}
	
	const prTaronja = {
		cx : parseInt(taronja.attr("cx")),
		cy : parseInt(taronja.attr("cy")),
		r : taronja.attr("r")
	}
	
	const prGroc = {
		cx : parseInt(groc.attr("cx")),
		cy : parseInt(groc.attr("cy")),
		r : groc.attr("r") -1
	}
	

	// console.log("posVermell.posx:", posVermell.posx, "posVermell.posy:", posVermell.posy)
	// console.log("posTaronja.posx:", posTaronja.posx, "posTaronja.posy:", posTaronja.posy)
	// console.log("posGroc.posx:", posGroc.posx, "posGroc.posy:", posGroc.posy)
	// console.log("-------")


	// vermell.drag()

	// vermell.animate({transform: `s0.97 t-${posTaronja.cx},${posTaronja.cy}`},2000)


	const tempsInOutColom = 4000
	const tempsTransicio = 6000

	const intercanviPosicioCercles = function () {

		/* ------- CERCLE VERMELL ------- */
		
		// desaparicio colom
		colom.animate({opacity: 0}, tempsInOutColom, function(){
			// 1er canvi de posicio
			vermell.animate(prTaronja, tempsTransicio, function(){
				// aparicio colom 
				colom.animate({opacity: 1}, tempsInOutColom, function(){
					// esperem 2 segons
					colom.animate({}, 2000, function() {

						// desaparicio colom
						colom.animate({opacity: 0}, tempsInOutColom, function() {
							// 2onr canvi de posicio
							vermell.animate(prGroc, tempsTransicio, function(){
								// aparcio colom
								colom.animate({opacity: 1}, tempsInOutColom, function(){
									// esperem 2 segons
									colom.animate({}, 2000, function() {
										
										// desaparicio colom
										colom.animate({opacity: 0}, tempsInOutColom, function() {
											// 3er canvi de posicio
											vermell.animate(prVermell, tempsTransicio, function() {
												// aparcio colom
												colom.animate({opacity: 1}, tempsInOutColom, function(){
													// esperem 2 segons
													colom.animate({}, 2000,)
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})




		/* ------- CERCLE TARONJA ------- */

		// espera desaparicio colom
		colom.animate({}, tempsInOutColom, function(){
			// 1er canvi de posicio
			taronja.animate(prGroc, tempsTransicio, function(){
				// espera aparicio colom 
				colom.animate({}, tempsInOutColom, function(){
					// esperem 2 segons
					colom.animate({}, 2000, function() {

						// espera desaparicio colom
						colom.animate({}, tempsInOutColom, function() {
							// 2onr canvi de posicio
							taronja.animate(prVermell, tempsTransicio, function(){
								// espera aparcio colom
								colom.animate({}, tempsInOutColom, function(){
									// esperem 2 segons
									colom.animate({}, 2000, function() {
										
										// espera desaparicio colom
										colom.animate({}, tempsInOutColom, function() {
											// 3er canvi de posicio
											taronja.animate(prTaronja, tempsTransicio, function() {
												// espera aparcio colom
												colom.animate({}, tempsInOutColom, function(){
													// esperem 2 segons
													colom.animate({}, 2000,)
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})

		/* ------- CERCLE GROC ------- */

		// espera desaparicio colom
		colom.animate({}, tempsInOutColom, function(){
			// 1er canvi de posicio
			groc.animate(prVermell, tempsTransicio, function(){
				// espera aparicio colom 
				colom.animate({}, tempsInOutColom, function(){
					// esperem 2 segons
					colom.animate({}, 2000, function() {

						// espera desaparicio colom
						colom.animate({}, tempsInOutColom, function() {
							// 2onr canvi de posicio
							groc.animate(prTaronja, tempsTransicio, function(){
								// espera aparcio colom
								colom.animate({}, tempsInOutColom, function(){
									// esperem 2 segons
									colom.animate({}, 2000, function() {
										
										// espera desaparicio colom
										colom.animate({}, tempsInOutColom, function() {
											// 3er canvi de posicio
											groc.animate(prGroc, tempsTransicio, function() {
												// espera aparcio colom
												colom.animate({}, tempsInOutColom, function(){
													// esperem 2 segons
													colom.animate({}, 2000,)
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})


		// taronja.animate({r: posGroc.radi, cx: posGroc.posx, cy: posGroc.posy},8000, function(){
		// 	taronja.animate({r: posVermell.radi, cx: posVermell.posx, cy: posVermell.posy},8000, function(){
		// 		taronja.animate({r: posTaronja.radi, cx: posTaronja.posx, cy: posTaronja.posy},8000)
		// 	})
		// })
		// groc.animate({r: posVermell.radi, cx: posVermell.posx, cy: posVermell.posy},8000, function(){
		// 	groc.animate({r: posTaronja.radi, cx: posTaronja.posx, cy: posTaronja.posy},8000, function(){
		// 		groc.animate({r: posGroc.radi, cx: posGroc.posx, cy: posGroc.posy},8000)
		// 	})
		// })
	}


	$("#intercanviPosicioBtn").on("click", function(){
		intercanviPosicioCercles()
		// interval2 = setInterval(intercanviPosicioCercles, 24000)
	})

	$("#stopIntercanviPosicioBtn").on("click", function(){
		clearInterval(interval2)
	})




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







	var moveFunc = function (dx, dy) {
    this.attr( { 
			cx: vermell.attr("cx") + dx , 
			cy: vermell.attr("cy") + dy
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


	
	




	// const pathG = s.select("#pathG")
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