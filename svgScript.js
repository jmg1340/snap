$(document).ready(function () {


  var s = Snap("svg");
	console.log("s", s)	


	const colom = s.select("#idColom")
	colom.addClass("fade")



	grupCercles = s.select("#grupCercles");
	console.log("grupCercles", grupCercles)
	// grupCercles.addClass("rotacio");

	const gcBox = grupCercles.getBBox()
	console.log("gcBox", gcBox);

	const rect = s.rect(gcBox.cx, gcBox.cy, gcBox.w, gcBox.h).attr({
		fill: "green",
		"fill-opacity": 0,
		stroke: "red",
		strokeWidth: 5
	})

})