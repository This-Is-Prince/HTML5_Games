/**
 * Drawing Rectangles Functions
 */

/**
 * We can draw a rectangle on the canvas using the context's rectangle methods.
 */
// . fillRect(x,y,width,height)   :Draws a filled rectangle
// . strokeRect(x,y,width,height) :Draws a rectangular outline
// . clearRect(x,y,width,height)  :Clears the specified rectangular area and makes it fully transparent

const drawingRectangles = (context: CanvasRenderingContext2D) => {
  /**
   * 1-4. Drawing Rectangles Inside the Canvas
   */

  // FILLED RECTANGLES
  // Draw a solid square with width and height of 100 pixels at (200,10)
  context.fillRect(200, 10, 100, 100);
  // Draw a solid square with width of 90 pixels and height of 30 pixels at (50,70)
  context.fillRect(50, 70, 90, 30);

  // STROKED RECTANGLES
  // Draw a rectangular outline with width and height of 50 pixels at (110,10)
  context.strokeRect(110, 10, 50, 50);
  // Draw a rectangular outline with width and height of 50 pixels at (30,10)
  context.strokeRect(30, 10, 50, 50);

  // CLEARING RECTANGLES
  // Clear a rectangle with width of 30 pixels and height of 20 pixels at (210, 20)
  context.clearRect(210, 20, 30, 20);
  // Clear a rectangle with width of 30 pixels and height of 20 pixels at (260,20);
  context.clearRect(260, 20, 30, 20);
};

/**
 * Drawing Complex Paths Functions
 */

/**
 * The context has several methods that allow us to draw complex
 *  shapes when simple boxes aren't enough:
 */
// . beginPath()
//  Starts recording a new shape
// . closePath()
//  Closes the path by drawing a line from the current drawing point to the starting point
// . fill(),stroke()
//  Fills or draws an outline of the recorded shape
// . moveTo(x, y)
//  Moves the drawing point to x, y
// . lineTo(x, y)
//  Draws a line from the current drawing point to x, y
// . arc(x, y, radius, startAngle, endAngle, anticlockwise)
//  Draws a line from the current drawing point to x, y

/**
 * Using these methods, drawing a complex path involves the
 * following steps:
 */
// 1. Use beginPath() to start recording the new shape.
// 2. Use moveTo(),lineTo(), and arc() to create the shape.
// 3. Optionally, close the shape using closePath().
// 4. Use either stroke() or fill() to draw an outline or filled shape. Using fill() automatically closes any open paths.

const drawingComplexPaths = (context: CanvasRenderingContext2D) => {
  /**
   * 1-5. Drawing Complex Shapes Inside the Canvas
   */
  // DRAWING COMPLEX SHAPES
  // Draw a filled triangle
  context.beginPath();
  context.moveTo(10, 120); // Start drawing at 10, 120
  context.lineTo(10, 180);
  context.lineTo(110, 150);
  context.fill(); // Close the shape and fill it out

  // Draw a stroked triangle
  context.beginPath();
  context.moveTo(140, 160); // Start drawing at 140, 160
  context.lineTo(140, 220);
  context.lineTo(40, 190);
  context.closePath();
  context.stroke();

  // Draw a more complex set of lines
  context.beginPath();
  context.moveTo(160, 160); // Start drawing at 160, 160
  context.lineTo(170, 220);
  context.lineTo(240, 210);
  context.lineTo(260, 170);
  context.lineTo(190, 140);
  context.closePath();
  context.stroke();

  // DRAWING ARCS & CIRCLES
  //   Draw a semicircle
  context.beginPath(); // Draw an arc at (400, 50) with radius 40 from 0 to 180 degrees, anticlockwise
  context.arc(100, 300, 40, 0, Math.PI, true); // PI radians = 180 degrees
  context.stroke();

  // Draw a full circle
  context.beginPath(); // Draw an arc at (500, 50) with radius 30 from 0 to 360 degrees, anticlockwise
  context.arc(100, 300, 30, 0, 2 * Math.PI, true); // 2 * PI radians = 360 degrees
  context.fill();

  // Draw a three-quarter arc
  context.beginPath(); // Draw an arc at (400, 100) with radius 25 from 0 to 270 degrees, clockwise
  context.arc(200, 300, 25, 0, (3 / 2) * Math.PI, false);
  context.stroke();
};

/**
 * Use Canvas
 */
const updateCanvasSize = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
const useCanvas = () => {
  // Get a handle to the canvas object
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  updateCanvasSize(canvas);

  window.addEventListener("resize", () => {
    updateCanvasSize(canvas);
    context.fillStyle = "white";
    context.strokeStyle = "white";

    /**
     * Drawing Rectangles
     */
    // drawingRectangles(context);

    /**
     * Drawing Complex Paths
     */
    drawingComplexPaths(context);
  });

  // Get the 2d context for this canvas
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.fillStyle = "white";
  context.strokeStyle = "white";
  // Our drawing code here...

  /**
   * Drawing Rectangles
   */
  //   drawingRectangles(context);

  /**
   * Drawing Complex Paths
   */
  drawingComplexPaths(context);
};

// On window load we run useCanvas function
window.onload = () => {
  useCanvas();
};
