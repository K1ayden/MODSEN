class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const rectangle1 = new Rectangle(5, 3);
  
  const area = rectangle1.calculateArea();
  const perimeter = rectangle1.calculatePerimeter();
  
  console.log(`Площадь: ${area}`);
  console.log(`Периметр: ${perimeter}`);
  