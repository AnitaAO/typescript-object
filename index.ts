// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Objects</h1>
  <h2>Class</h2>
  <p>A class groups related variables(properties) and functions (methods) together</p>
  <p>A class can have multiple functions(methods) inside it and filters (the decorators we hard-coded in the interface "Point" example</p>
  <p>The objects in a class are separated with a semicolon ";"</p>
`

//CLASS
class Point {
  x: 1;
  y: 2;
  draw () {
    console.log("X is: " + this.x && "Y is: " + this.y)

  };
  letDraw (another: Point) {}
}

//OBJECTS
let point = new Point;
point.x = 1;
point.y = 2;
point.draw();

