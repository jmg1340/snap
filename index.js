$(document).ready(function () {
  // First lets create our drawing surface out of existing SVG element
  // If you want to create new surface just provide dimensions
  // like s = Snap(800, 600);
  var s = Snap("#canvas");
  // Lets create big circle in the middle:

  // console.log("s", s)
  // var bigCircle = s.circle(40, 40, 40);
  // By default its black, lets change its attributes

  let logo = Snap.load("/logoBN.svg", function (f) {
    s.append(f);
    console.log("f", f);

    // colom = f.select("#idColom");
    // console.log("colom", colom);

    // colom.hover(
    //   function () {
    //     colom.animate({ y: 960 }, 500, mina.elastic);
    //   },
    //   function () {
    //     colom.animate({ y: 977.36218 }, 500, mina.elastic);
    //   }
    // );


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
