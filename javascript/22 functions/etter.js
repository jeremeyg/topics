class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error(`Wdith must be a positive number`);
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error(`Wdith must be a positive number`);
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  //can add another methods even if its not a property
  get area() {
    return this._height * this.width;
  }
}

const rectangle = new Rectangle(3, 4); // validate first the input before assignning the property use set

//can reassign values

rectangle.width = 5;
rectangle.height = 5;
console.log(rectangle.width);
console.log(rectangle.area);
