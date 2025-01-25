// Selecting Elements in the DOM
// 1. getElementById
// Definition
// The getElementById method selects a single element by its id attribute. IDs are unique within a document, so this method always returns a single element.

<!DOCTYPE html>
<html>
<body>
  <p id="demo">Hello World</p>
  <script>
    const element = document.getElementById('demo');
    console.log(element.innerText); // Outputs: 'Hello World'
  </script>
</body>
</html>

// 2. getElementsByClassName
// Definition
// The getElementsByClassName method selects all elements that have a specified class name. It returns a live HTMLCollection.

<!DOCTYPE html>
<html>
<body>
  <p class="demo">Hello</p>
  <p class="demo">World</p>
  <script>
    const elements = document.getElementsByClassName('demo');
    console.log(elements[0].innerText); // Outputs: 'Hello'
    console.log(elements[1].innerText); // Outputs: 'World'
  </script>
</body>
</html>

// 3. getElementsByTagName
// Definition
// The getElementsByTagName method selects all elements with a specified tag name. It returns a live HTMLCollection.

<!DOCTYPE html>
<html>
<body>
  <p>Hello</p>
  <p>World</p>
  <script>
    const elements = document.getElementsByTagName('p');
    console.log(elements[0].innerText); // Outputs: 'Hello'
    console.log(elements[1].innerText); // Outputs: 'World'
  </script>
</body>
</html>

// 4. querySelector
// Definition
// The querySelector method selects the first element that matches a specified CSS selector.

<!DOCTYPE html>
<html>
<body>
  <p class="demo">Hello</p>
  <p class="demo">World</p>
  <script>
    const element = document.querySelector('.demo');
    console.log(element.innerText); // Outputs: 'Hello'
  </script>
</body>
</html>


// 5. querySelectorAll
// Definition
// The querySelectorAll method selects all elements that match a specified CSS selector. It returns a static NodeList.

<!DOCTYPE html>
<html>
<body>
  <p class="demo">Hello</p>
  <p class="demo">World</p>
  <script>
    const elements = document.querySelectorAll('.demo');
    elements.forEach((element) => {
      console.log(element.innerText);
    });
    // Outputs: 'Hello' 'World'
  </script>
</body>
</html>


// Event Listeners in JavaScript
// 1. Adding Event Listeners
// Definition
// Event listeners are functions that wait for specific events to occur on elements, such as clicks, key presses, or mouse movements. When the event occurs, the listener executes a callback function.

<!DOCTYPE html>
<html>
<body>
  <button id="myButton">Click Me</button>
  <script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
      alert('Button was clicked!');
    });
  </script>
</body>
</html>


// 2. Removing Event Listeners
// Definition
// You can remove event listeners using the removeEventListener method. This is useful for cleaning up or stopping the listener from reacting to events.

<!DOCTYPE html>
<html>
<body>
  <button id="myButton">Click Me</button>
  <button id="removeListener">Remove Listener</button>
  <script>
    const button = document.getElementById('myButton');
    const removeBtn = document.getElementById('removeListener');

    function handleClick() {
      alert('Button was clicked!');
    }

    button.addEventListener('click', handleClick);

    removeBtn.addEventListener('click', () => {
      button.removeEventListener('click', handleClick);
      alert('Listener removed!');
    });
  </script>
</body>
</html>

/*
5. Common Event Types
Mouse Events
click: Triggered when the element is clicked.

dblclick: Triggered when the element is double-clicked.

mouseover: Triggered when the mouse pointer is moved onto the element.

mouseout: Triggered when the mouse pointer is moved out of the element.

Keyboard Events
keydown: Triggered when a key is pressed down.

keyup: Triggered when a key is released.

keypress: Triggered when a key is pressed (deprecated).

Form Events
submit: Triggered when a form is submitted.

change: Triggered when the value of an input element changes.

focus: Triggered when an element gains focus.

blur: Triggered when an element loses focus.
*/


// Modifying HTML and CSS
// 1. Modifying HTML Content
// Inner Text and Inner HTML
// innerText: Sets or returns the text content of an element.

<p id="demo">Hello World</p>
<button onclick="changeText()">Change Text</button>
<script>
  function changeText() {
    const element = document.getElementById('demo');
    element.innerText = 'Hello JavaScript!';
  }
</script>


// innerHTML: Sets or returns the HTML content of an element.

<p id="demo">Hello <strong>World</strong></p>
<button onclick="changeHTML()">Change HTML</button>
<script>
  function changeHTML() {
    const element = document.getElementById('demo');
    element.innerHTML = 'Hello <em>JavaScript</em>!';
  }
</script>


// textContent: Sets or returns the text content of an element and its descendants. Unlike innerText, it is a bit faster and includes text from hidden elements as well.

<p id="demo">Hello World</p>
<button onclick="changeTextContent()">Change Text Content</button>
<script>
  function changeTextContent() {
    const element = document.getElementById('demo');
    element.textContent = 'Hello JavaScript!';
  }
</script>


// 2. Modifying CSS Styles
// Style Property
// You can modify CSS styles directly using the style property of an element.

<p id="demo">Hello World</p>
<button onclick="changeStyle()">Change Style</button>
<script>
  function changeStyle() {
    const element = document.getElementById('demo');
    element.style.color = 'red';
    element.style.fontSize = '20px';
  }
</script>


// CSS Classes
// You can add, remove, or toggle CSS classes using classList.

// classList.add: Adds one or more class names.

<p id="demo">Hello World</p>
<button onclick="addClass()">Add Class</button>
<script>
  function addClass() {
    const element = document.getElementById('demo');
    element.classList.add('highlight');
  }
</script>
<style>
  .highlight {
    color: red;
    font-size: 20px;
  }
</style>


// classList.remove: Removes one or more class names.

<p id="demo" class="highlight">Hello World</p>
<button onclick="removeClass()">Remove Class</button>
<script>
  function removeClass() {
    const element = document.getElementById('demo');
    element.classList.remove('highlight');
  }
</script>
<style>
  .highlight {
    color: red;
    font-size: 20px;
  }
</style>


// classList.toggle: Toggles the existence of a class name.

<p id="demo">Hello World</p>
<button onclick="toggleClass()">Toggle Class</button>
<script>
  function toggleClass() {
    const element = document.getElementById('demo');
    element.classList.toggle('highlight');
  }
</script>
<style>
  .highlight {
    color: red;
    font-size: 20px;
  }
</style>


// 3. Creating and Removing Elements
// Creating Elements
// You can create new elements using the createElement method and add them to the DOM using appendChild or other similar methods.

<div id="container"></div>
<button onclick="createElement()">Create Element</button>
<script>
  function createElement() {
    const newElement = document.createElement('p');
    newElement.innerText = 'A new paragraph';
    const container = document.getElementById('container');
    container.appendChild(newElement);
  }
</script>


// Inserting Elements
// insertBefore: Inserts an element before a specified existing element.

<div id="container">
  <p id="existing">Existing paragraph</p>
</div>
<button onclick="insertElement()">Insert Element</button>
<script>
  function insertElement() {
    const newElement = document.createElement('p');
    newElement.innerText = 'A new paragraph';
    const container = document.getElementById('container');
    const existingElement = document.getElementById('existing');
    container.insertBefore(newElement, existingElement);
  }
</script>


// Removing Elements
// You can remove elements using the remove method or removeChild.

// remove: Directly removes the element.

<p id="demo">This will be removed</p>
<button onclick="removeElement()">Remove Element</button>
<script>
  function removeElement() {
    const element = document.getElementById('demo');
    element.remove();
  }
</script>


// removeChild: Removes a specified child element.

<div id="container">
  <p id="child">Child element</p>
</div>
<button onclick="removeChild()">Remove Child</button>
<script>
  function removeChild() {
    const container = document.getElementById('container');
    const child = document.getElementById('child');
    container.removeChild(child);
  }
</script>


