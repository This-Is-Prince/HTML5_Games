/**
 * Game Global Variables
 */
let game: Game;
let levels: Levels;

/**
 * Game Level Class
 */
class Level {
  // Level
  private foreground: string;
  private background: string;
  private entities: [];
  constructor(foreground: string, background: string) {
    this.foreground = foreground;
    this.background = background;
    this.entities = [];
  }
}
class Levels {
  private data: Level[];
  // Initialize level selection screen
  constructor() {
    this.data = [];
    this.data.push(
      new Level("desert-foreground", "clouds-background"),
      new Level("desert-foreground", "clouds-background")
    );
    const levelSelectScreen = document.getElementById(
      "levelselectscreen"
    ) as HTMLDivElement;

    // An  Event handler to call
    type ButtonClickHandler = (this: HTMLInputElement, ev: MouseEvent) => any;
    const buttonClickHandler: ButtonClickHandler = function () {
      game.hideScreen("levelselectscreen");

      // Level label values are 1,2. Levels are 0,1
      levels.load(Number(this.value) - 1);
    };
    for (let i = 0; i < this.data.length; i++) {
      const button = document.createElement("input");
      button.type = "button";
      button.value = `${i + 1}`; //Level labels are 1, 2
      button.addEventListener("click", buttonClickHandler);

      levelSelectScreen.appendChild(button);
    }
  }

  // Load all data and images for a specific level
  load(levelNumber: number) {}
}
/**
 * Game Main Class
 */
class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  // private context
  // Start initializing objects, preloading assets and display start screen
  constructor() {
    // Get handler for game canvas and context
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    // Initialize objects
    levels = new Levels();

    // Hide all game layers and display the start screen
    this.hideScreens();
    this.showScreen("gamestartscreen");
  }
  hideScreens() {
    const screens = document.getElementsByClassName(
      "gamelayer"
    ) as HTMLCollectionOf<HTMLDivElement | HTMLCanvasElement>;

    // Iterate through all the game layers and set their display to none
    for (let i = screens.length - 1; i >= 0; i--) {
      const screen = screens[i];
      screen.style.display = "none";
    }
  }
  hideScreen(id: string) {
    const screen = document.getElementById(id) as
      | HTMLDivElement
      | HTMLCanvasElement;
    screen.style.display = "none";
  }
  showScreen(id: string) {
    const screen = document.getElementById(id) as
      | HTMLDivElement
      | HTMLCanvasElement;
    screen.style.display = "block";
  }
}

// Initialize game once page has fully loaded
window.addEventListener("load", function () {
  game = new Game();
});
