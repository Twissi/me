var trianglePattern = (function () {

  var createDrawArea, createTriangle, createSquare, options, draw, triangles = [];

  options = {
      resizeFactor: 10,
      triangleCount: 100,
      //colorArray: ["#fc2488", "#00bb9c", "#dc0043", "#ffba00", "#f68784", "#c1006a", "#d7d3bd"],
      //colorArray: ["#8AFF27", "#1AD7FF", "#2DE879", "#E8CF18", "#FFAA29"],
      colorArray: ["#69BCFF", "#7ED5FF", "#83A1E8", "#D7EFFF"],
  };

  createDrawArea = function(div, width, height){
    draw = SVG(div).size(width, height);
  }

  createTriangle = function(coords){
    var color, random, polygon;

    random = Math.floor(0 + Math.random() * options.colorArray.length);
    color = options.colorArray[random];
    polygon = draw.polygon(coords).fill(color);//.stroke({ width: 1, color: color });
    polygon.on('mouseover', mouseoverEvent);
    triangles.push(polygon);
  };

  createSquare = function(row, line){
    var random, x, y, z, squareA, squareB, squareC, squareD;
    squareA = { x:row*options.triangleSize, y:line*options.triangleSize };
    squareB = { x:row*options.triangleSize, y:line*options.triangleSize+options.triangleSize };
    squareC = { x:row*options.triangleSize+options.triangleSize, y:line*options.triangleSize };
    squareD = { x:row*options.triangleSize+options.triangleSize, y:line*options.triangleSize+options.triangleSize };

    random = Math.random()<.5;
    if(random){
      createTriangle(squareA.x + "," + squareA.y + " " + squareB.x + "," + squareB.y + " " + squareC.x + "," + squareC.y);
      createTriangle(squareC.x + "," + squareC.y + " " + squareB.x + "," + squareB.y + " " + squareD.x + "," + squareD.y);
    } else {
      createTriangle(squareA.x + "," + squareA.y + " " + squareC.x + "," + squareC.y + " " + squareD.x + "," + squareD.y);
      createTriangle(squareA.x + "," + squareA.y + " " + squareD.x + "," + squareD.y + " " + squareB.x + "," + squareB.y);
    }
  };

  mouseoverEvent = function() {
    // if(this.attr('fill-opacity') == 1){
    //   this.fill({ color: this.attr('fill'), opacity: 0 });
    // } else {
    //   this.fill({ color: this.attr('fill'), opacity: 1 });
    // }
    this.fill({ color: this.attr('fill'), opacity: 0 });
  }

  return {
    generate: function(div){
      var l, r, maxColumns, maxRows, drawArea;

      drawArea = document.getElementById(div);

      maxRows = 3;
      if(typeof window.matchMedia !== "undefined"){
        smartphone = window.matchMedia("screen and (max-device-width: 400px)").matches
        if(smartphone){
          maxRows = 2;
        }
      }


      maxColumns = Math.ceil(drawArea.offsetWidth/90);
      if( maxColumns < 3 ){
        maxColumns = 3;
      }

      //options.triangleSize = Math.round(drawArea.offsetWidth / maxColumns);
      options.triangleSize = drawArea.offsetWidth / maxColumns;
      createDrawArea(div, drawArea.offsetWidth, options.triangleSize*maxRows);
      document.getElementById('secretMessage').style.height = options.triangleSize*maxRows + 'px';

      for (r = 0; r < maxRows; r++) {
        for (l = 0; l < maxColumns; l++) {
          createSquare(l,r);
        }
      }
    },

    update: function(div){
      //much faster than using innerHTML
      var drawArea = document.getElementById(div);
      while (drawArea.firstChild) {
          drawArea.removeChild(drawArea.firstChild);
      }
      trianglePattern.generate(div);
    },

    randomShow: function(){
      var triangle;

      triangle = triangles[Math.floor(Math.random() * triangles.length)];
      if(triangle.attr('opacity') != 0){
        triangle.animate(800).fill({ color: triangle.attr('fill'), opacity: 0 }).after(function() {
          //triangle.fill({ color: triangle.attr('fill'), opacity: 1 });
          setTimeout(trianglePattern.randomShow, 2000);
        })
      }else{
        setTimeout(trianglePattern.randomShow, 500);
      }
    }
  };
})();


