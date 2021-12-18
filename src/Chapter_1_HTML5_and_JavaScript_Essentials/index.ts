const useCanvas = () => {
  // Get a handle to the canvas object
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  // Get the 2d context for this canvas
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  // Our drawing code here...

  /**
   * 1-4. Drawing Rectangles Inside the Canvas
   */

  // FILLED RECTANGLES
  // Draw a solid square with width and height of 100 pixels at (100,100)
  context.fillRect(10, 10, 100, 100);

  // STROKED RECTANGLES
  // Draw a rectangular outline with width and height of 50 pixels at (110,10)
  context.strokeRect(120, 10, 50, 50);
  // Draw a rectangular outline with width and height of 50 pixels at (150,80)
  context.strokeRect(150, 80, 50, 50);

  // CLEARING RECTANGLES
  // Clear a rectangle with width of 30 pixels and height of 20 pixels at (20, 20)
  context.clearRect(20, 20, 30, 20);
  // Clear a rectangle with width of 30 pixels and height of 20 pixels at (60,40);
  context.clearRect(100, 40, 30, 20);
};

// On window load we run useCanvas function
window.onload = () => {
  useCanvas();
};
