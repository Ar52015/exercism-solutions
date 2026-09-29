// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// Prototypes
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/** @param { Number } nw
 * @param { Number } nh
 */
Size.prototype.resize = function (nw, nh) {
  this.width = nw;
  this.height = nh;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/** @param {Number} dx
 * @param {Number} dy
 */
Position.prototype.move = function (dx, dy) {
  this.x = dx;
  this.y = dy;
};

// Classes
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /** @param {Size} newSize */
  resize(newSize) {
    newSize.width = Math.max(newSize.width, 1);
    newSize.height = Math.max(newSize.height, 1);
    this.size.width =
      this.position.x + newSize.width > this.screenSize.width
        ? this.screenSize.width - this.position.x
        : newSize.width;
    this.size.height =
      this.position.y + newSize.height > this.screenSize.height
        ? this.screenSize.height - this.position.y
        : newSize.height;
  }

  /** @param {Position} newPosition */
  move(newPosition) {
    newPosition.x = Math.max(newPosition.x, 0);
    newPosition.y = Math.max(newPosition.y, 0);
    this.position.x =
      this.size.width + newPosition.x > this.screenSize.width
        ? this.screenSize.width - this.size.width
        : newPosition.x;
    this.position.y =
      this.size.height + newPosition.y > this.screenSize.height
        ? this.screenSize.height - this.size.height
        : newPosition.y;
  }
}

/** @param {ProgramWindow} programWindow */
export function changeWindow(programWindow) {
  programWindow.size.width = 400;
  programWindow.size.height = 300;
  programWindow.position.x = 100;
  programWindow.position.y = 150;
  return programWindow;
}
