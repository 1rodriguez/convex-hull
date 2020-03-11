"use-strict";

rectangle.addEventListener("click", () => {
  console.log(rectangle.querySelectorAll(".draggable"));
});

function convexHull(arg) {
  return arg;
}

class Vector {
  constructor(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.mag = Math.sqrt(Math.pow(this.xCoord, 2) + Math.pow(this.yCoord, 2));
  }

  /**
   * @param {number} xCoord
   */
  set x(xCoord) {
    this.xCoord = xCoord;
  }

  /**
   * @param {number} yCoord
   */
  set y(yCoord) {
    this.yCoord = yCoord;
  }

  dot(vec) {
    let xComp = this.xCoord * vec.xCoord;
    let yComp = this.yCoord * vec.yCoord;

    return xComp + yComp;
  }

  angle(vec) {
    // < 3.14 radians is a "left" turn
    // returns the angle between vector and argument
    // uses dot product definition to calculate angle
    let num = this.dot(vec);
    let denom = this.mag * vec.mag;
    return Math.acos(num / denom);
  }
}

export { Vector, convexHull };
