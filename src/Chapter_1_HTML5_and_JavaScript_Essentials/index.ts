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
 * Drawing Text Functions
 */

/**
 * The context also provides us with two methods for drawing text on the canvas:
 */
// . strokeText(text, x, y)
// Draws an outline of the text at (x, y)
// . fillText(text, x, y)
// Fills out the text at (x, y)

const drawingText = (context: CanvasRenderingContext2D) => {
  /**
   * 1-6. Drawing Text Inside the Canvas
   */
  // DRAWING TEXT
  context.fillText("This is some text...", 330, 40);

  // Modify the font
  context.font = "10pt Arial";
  context.fillText("This is in 10pt Arial...", 330, 60);

  // Draw stroked text
  context.font = "16pt Arial";
  context.strokeText("This is stroked in 16pt Arial...", 330, 80);
};

/**
 * Customizing Drawing Styles (Colors and Textures) Functions
 */

/**
 * If we want to apply colors to a shape, there are two important properties we can use:
 */
// . fillStyle:Sets the default color for all future fill operations
// . strokeStyle:Sets the default color for all future stroke operations
const customizingDrawingStyles = (context: CanvasRenderingContext2D) => {
  /**
   * 1-7. Drawing with Colors and Textures
   */
  // FILL STYLES AND COLORS
  // Set fill color to red
  context.fillStyle = "red";
  // Draw a red filled rectangle
  context.fillRect(310, 160, 100, 50);

  // Set stroke color to green
  context.strokeStyle = "green";
  // Draw a green stroked rectangle
  context.strokeRect(310, 240, 100, 50);

  // Set fill color to yellow using rgb()
  context.fillStyle = "rgb(255, 255, 0)";
  // Draw a yellow filled rectangle
  context.fillRect(420, 160, 100, 50);

  // Set fill color to green with an alpha of 0.6
  context.fillStyle = "rgba(0, 255 ,0 , 0.6)";
  // Draw a semi-transparent green filled rectangle
  context.fillRect(450, 180, 100, 50);

  // TEXTURES
  // Get a handle to the Image object
  const image = document.createElement("img");
  image.src = "./static/dragon-1.jpg";
  image.onload = () => {
    const pattern = context.createPattern(image, "repeat") as CanvasPattern;
    // Set fill style to newly created pattern
    context.fillStyle = pattern;
    // Draw a pattern filled rectangle
    context.fillRect(420, 240, 130, 50);
  };
};

/**
 * Drawing Images Functions
 */

/**
 * We can draw images and sprites on the canvas using the drawImage() method. The context provides us with three different versions of this method:
 */
// . drawImage(image, x, y)
// Draws the images on the canvas at (x, y)
// . drawImage(image, x, y, width, height)
// Scales the image to the specified width and height and then draws it at (x, y)
// . drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height)
// Clips a rectangle from the image at (sourceX, sourceY) with dimensions(sourceWidth, sourceHeight), scales it to the specified width and height, and draws it on the canvas at (x, y)

const drawingImages = (context: CanvasRenderingContext2D) => {
  /**
   * 1-8. Drawing Images
   */
  // DRAWING IMAGES
  // Get a handle to the Image object
  const image = document.createElement("img");
  image.src = "./static/dragon.jpg";
  image.onload = () => {
    // Draw the image at (0, 350)
    context.drawImage(image, 0, 0);

    // Scale the image to half the original size
    // context.drawImage(image, 0, 0, 400, 400);

    // Draw part of the image
    context.drawImage(image, 350, 100, 50, 50, 0, 440, 100, 100);
  };
};

/**
 * Transforming and Rotating Functions
 */

/**
 * The context object has several methods for transforming the coordinate system used for drawing elements.
 * These methods are
 */
// . translate(x, y)
// Moves the canvas and its origin to a different point(x, y)
// . rotate(angle)
// Rotates the canvas clockwise around the current origin by angle
// . scale(x, y)
// Scales the objects drawn by a multiple of x and y along the respective

/**
 * A common use of these methods is to rotate objects or sprites when drawing them. We can do this by
 */
// . Translating the canvas origin to the location of the object
// . Rotating the canvas by the desired angle
// . Drawing the object
// . Restoring the canvas back to its original state
const transformingAndRotating = (context: CanvasRenderingContext2D) => {
  /**
   * 1-9. Rotating Objects Before Drawing Them
   */
  const image = new Image();
  image.src = "./static/dragon.jpg";
  image.onload = () => {
    // ROTATION AND TRANSLATION
    // Translate origin to location of object
    // context.translate(250, 370);
    // // Rotate about the new origin by 60 degrees
    // context.rotate(Math.PI / 3);
    // const width = image.width;
    // const height = image.height;
    // context.drawImage(
    //   image,
    //   0,
    //   0,
    //   width,
    //   height,
    //   -30,
    //   -25,
    //   width / 2,
    //   height / 2
    // );
    // //  Restore to original state by rotating and translating back
    // context.rotate(-Math.PI / 3);
    // context.translate(-250, -370);
    // // Translate origin to location of object
    // context.translate(300, 370);
    // // Rotate about the new origin
    // context.rotate((3 / 4) * Math.PI);
    // context.drawImage(
    //   image,
    //   0,
    //   0,
    //   width,
    //   height,
    //   -30,
    //   -25,
    //   width / 2,
    //   height / 2
    // );
    // // Restore to original state by rotating and translating back
    // context.rotate((-3 * Math.PI) / 4);
    // context.translate(-300, -370);

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    context.save();
    context.translate(canvasWidth / 2, canvasHeight / 2);
    context.rotate(Math.PI * 0.25);

    const imageWidth = image.width;
    const imageHeight = image.height;
    context.drawImage(
      image,
      0,
      0,
      imageWidth,
      imageHeight,
      0,
      0,
      imageWidth / 2,
      imageHeight / 2
    );
    context.restore();
    context.drawImage(
      image,
      0,
      0,
      imageWidth,
      imageHeight,
      0,
      0,
      imageWidth / 2,
      imageHeight / 2
    );
  };
};

/**
 * Audio
 */
const audio = (context: CanvasRenderingContext2D) => {
  /**
   * 1-12. Dynamically loading an Audio File
   */
  // // Create a new Audio Object
  // const sound = new Audio();
  // // Select the source of the sound
  // sound.src = "./static/The_Rains_of_Castamere-1.m4a";
  // // This will only work on browsers that support m4a

  // // Play the sound
  // sound.play();

  /**
   * Testing for Audio Support
   */
  const audio = document.createElement("audio");
  let m4aSupport: boolean;
  if ("canPlayType" in audio) {
    // Currently canPlayType() returns: "", "maybe", or "probably"
    m4aSupport = "" !== audio.canPlayType("audio/mp4");
  } else {
    // The audio is not supported
    m4aSupport = false;
  }

  // Check for m4a and finally set soundFileExtension to undefined
  const soundFileExtension = m4aSupport ? ".m4a" : undefined;

  // if (soundFileExtension) {
  //   const sound = new Audio();
  //   // Load sound file with the detected extension
  //   sound.src = "./static/The_Rains_Of_Castamere" + soundFileExtension;
  //   sound.play();
  // }

  /**
   * 1-14. Waiting for an Audio File to Load
   */
  // Play the sound after waiting for it to load
  if (soundFileExtension) {
    const sound = new Audio();
    sound.addEventListener("canplaythrough", function () {
      // this.play();
    });

    // Load sound file with the detected extension
    sound.src = "./static/The_Rains_Of_Castamere" + soundFileExtension;
  }
};

/**
 * Image Loading
 */
class ImageLoader {
  private loaded: boolean;
  private loadedImages: number;
  private totalImages: number;

  private constructor() {
    this.loaded = true;
    this.loadedImages = 0;
    this.totalImages = 0;
  }
  load(url: string) {
    this.totalImages++;
    this.loaded = false;
    const image = new Image();
    image.src = url;
    image.onload = () => {
      this.loadedImages++;
      if (this.loadedImages === this.totalImages) {
        this.loaded = true;
      }
      image.onload = null;
    };
    return image;
  }
  static loader() {
    return new ImageLoader();
  }
}
const imageLoad = (context: CanvasRenderingContext2D) => {
  /**
   * 1-18. Simple Image Loader
   */
  // const imageLoader = new ImageLoader();
  const imageLoader = ImageLoader.loader();
  imageLoader.load("./static/dragon-2.jpg");
};

/**
 * Sprite Sheets
 */
const spriteSheets = (context: CanvasRenderingContext2D) => {
  /**
   * 1-20. Drawing an Image Loaded in a Sprite Sheet
   */
  // First: (Load single sprite sheet image)
  // Nine arguments: the element, source (x, y) coordinates,
  // source width and height (for cropping),
  // destination (x, y) coordinates, and
  // destination width and height (resize)
  // context.drawImage(
  //   spriteImage,
  //   imageWidth * imageNumber,
  //   0,
  //   imageWidth,
  //   imageHeight,
  //   x,
  //   y,
  //   imageWidth,
  //   imageHeight
  // );
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
  // Get the 2d context for this canvas
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  window.addEventListener("resize", () => {
    updateCanvasSize(canvas);

    /**
     * Drawing Rectangles
     */
    // drawingRectangles(context);

    /**
     * Drawing Complex Paths
     */
    // drawingComplexPaths(context);

    /**
     * Drawing Text
     */
    // drawingText(context);

    /**
     * Customizing Drawing Styles (Colors and Textures)
     */
    // customizingDrawingStyles(context);

    /**
     * Drawing Images
     */
    // drawingImages(context);

    /**
     * Transforming and Rotating
     */
    // transformingAndRotating(context);

    /**
     * Audio
     */
    // audio(context);

    /**
     * Image Loading
     */
    // imageLoad(context);

    /**
     * Sprite Sheets
     */
    spriteSheets(context);
  });

  // Our drawing code here...

  /**
   * Drawing Rectangles
   */
  //   drawingRectangles(context);

  /**
   * Drawing Complex Paths
   */
  // drawingComplexPaths(context);

  /**
   * Drawing Text
   */
  // drawingText(context);

  /**
   * Customizing Drawing Styles (Colors and Textures)
   */
  // customizingDrawingStyles(context);

  /**
   * Drawing Images
   */
  // drawingImages(context);

  /**
   * Transforming and Rotating
   */
  // transformingAndRotating(context);

  /**
   * Audio
   */
  // audio(context);

  /**
   * Image Loading
   */
  // imageLoad(context);

  /**
   * Sprite Sheets
   */
  spriteSheets(context);
};

// On window load we run useCanvas function
window.onload = () => {
  useCanvas();
};
