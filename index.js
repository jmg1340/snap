$(document).ready(function () {
  // First lets create our drawing surface out of existing SVG element
  // If you want to create new surface just provide dimensions
  // like s = Snap(800, 600);
	console.log("Snap", Snap)


  var s = Snap("#canvas");
	console.log("s", s)
  // Lets create big circle in the middle:

  // console.log("s", s)
  // var bigCircle = s.circle(40, 40, 40);
  // By default its black, lets change its attributes

  let logo = Snap.load("/logoBN.svg", function (f) {
    s.append(f);
    console.log("f", f);
		// console.log("f.paper.g", f.paper.g());

		// ----------------------------
/* 
    const cercleGroc = Snap.select("#cercleGroc");
    console.log("cercleGroc", cercleGroc);

    const cercleTaronja = Snap.select("#cercleTaronja");
    console.log("cercleTaronja", cercleTaronja);

    const cercleVermell = Snap.select("#cercleVermell");
    console.log("cercleVermell", cercleVermell);


		const grupCercles = Snap().g(cercleGroc, cercleTaronja, cercleVermell)
		s.append(grupCercles);

 */

		grupCercles = Snap.select("#grupCercles");
    // grupCercles.addClass("rotacio");

		const gcBox = grupCercles.getBBox()
		console.log("gcBox", gcBox);

		// var bbox = orange.getBBox(); //bounding box, get coords and centre

		// orange.stop().animate({ transform: "r360," + bbox.cx + ',' + bbox.cy }, 1000);

		// const rect = s.rect(gcBox.cx, gcBox.cy, 200, 100).attr({
		// 	fill: "green",
		// 	"fill-opacity": 0,
		// 	stroke: "red",
		// 	strokeWidth: 5
		// })
		// grupCercles.animate({transform: "r20 250 150"}, 5000)

		// ----------------------------

    const colom = Snap.select("#idColom");
    console.log("colom", colom);

		let colomBox = colom.getBBox();
		console.log("colomBox", colomBox);

		// ----------------------------

		



		setInterval(function (){

			colom.removeClass("desapareix")
			colom.addClass("apareix");
			// colom.animate({ transform: "s0.5,0.5, t10,10" }, 1000)
			
			setTimeout(
				function (){ 
					colom.removeClass("apareix")
					colom.addClass("desapareix")
					// colom.animate({ transform: "s0.5,0.5, t-10,-10" }, 1000)
				}
				, 4000
			)
						
		}, 8000)



    colom.hover(
      function () {
        // colom.animate({ y: 69 }, 500, mina.elastic);
				colom.animate({ transform: "s1.2,1.2," + colomBox.cx + "," + colomBox.cy }, 1000, mina.bounce);
      },
      function () {
				colom.animate( {transform: "s1.0,1.0"}, 1000, mina.bounce);
        // colom.animate({ y: 80 }, 500, mina.elastic);
      }
    );


    // console.log("s", s)
    // var bigCircle = s.circle(40, 40, 40);
    // By default its black, lets change its attributes
  });





  $("#btnAnimation").click(function () {
    var bbox;

    var item01 = Snap.select("#idColom");

    bbox = item01.getBBox();

    item01.transform("s1.0,1.0");
    item01.animate(
      { transform: "s1.5,1.5," + bbox.cx + "," + bbox.cy },
      1000,
      mina.bounce
    );


  });






});
