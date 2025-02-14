Flexbox (Flexible Box Layout)
Flexbox is a one-dimensional layout model that arranges items in a single row or column. It is designed to distribute space along a single axis, either horizontally or vertically.

Key Concepts
Flex Container and Flex Items:

The parent element is called the flex container. It establishes a flex formatting context.

The child elements are called flex items. They are laid out inside the flex container.

html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
Main Axis and Cross Axis:

Main Axis: The primary axis along which flex items are placed. It is horizontal by default.

Cross Axis: The axis perpendicular to the main axis. It is vertical by default.

Flex Container Properties:

display: Set to flex or inline-flex to create a flex container.

flex-direction: Defines the direction of the main axis (row, row-reverse, column, column-reverse).

justify-content: Aligns flex items along the main axis (flex-start, flex-end, center, space-between, space-around, space-evenly).

align-items: Aligns flex items along the cross axis (flex-start, flex-end, center, baseline, stretch).

flex-wrap: Controls whether flex items wrap onto multiple lines (nowrap, wrap, wrap-reverse).

css
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
Flex Item Properties:

order: Defines the order of the flex items (default is 0).

flex-grow: Controls how much a flex item will grow relative to the rest (default is 0).

flex-shrink: Controls how much a flex item will shrink relative to the rest (default is 1).

flex-basis: Specifies the initial size of the flex item before any space distribution (default is auto).

align-self: Overrides the align-items value for individual flex items.

css
.flex-item {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100px;
  order: 2;
  align-self: flex-end;
}
CSS Grid Layout
CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts. It provides a way to define both rows and columns, making it ideal for creating responsive designs.

Key Concepts
Grid Container and Grid Items:

The parent element is called the grid container. It establishes a grid formatting context.

The child elements are called grid items. They are positioned within the grid container.

html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>
Grid Tracks:

Grid Rows: Horizontal lines that define the height of each row.

Grid Columns: Vertical lines that define the width of each column.

Grid Container Properties:

display: Set to grid or inline-grid to create a grid container.

grid-template-columns: Defines the number and size of columns.

grid-template-rows: Defines the number and size of rows.

gap: Sets the spacing between grid items (grid-gap, column-gap, row-gap).

grid-template-areas: Defines named grid areas for complex layouts.

css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
Grid Item Properties:

grid-column: Specifies the starting and ending column line (grid-column-start / grid-column-end).

grid-row: Specifies the starting and ending row line (grid-row-start / grid-row-end).

grid-area: Assigns a grid item to a named grid area.

css
.grid-item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
Auto-Placement: The grid-auto-rows and grid-auto-columns properties define the size of implicitly created rows and columns. The grid-auto-flow property controls how items are placed in the grid (row, column, dense).

css
.grid-container {
  grid-auto-rows: minmax(100px, auto);
  grid-auto-columns: minmax(100px, auto);
  grid-auto-flow: row dense;
}
Comparison of Flexbox and Grid
Flexbox: Best for one-dimensional layouts (either row or column). Use it when you need to align items in a single direction and distribute space within an item.

Grid: Best for two-dimensional layouts (both rows and columns). Use it when you need to create complex grid-based designs with multiple rows and columns.

Use Cases
Flexbox:

Navigation bars

Horizontal and vertical centering

Single-axis layouts (e.g., rows or columns)

CSS Grid:

Page layouts (headers, footers, sidebars, content areas)

Grid-based designs (e.g., image galleries, dashboards)

Complex layouts with precise control over both axes

Both Flexbox and CSS Grid are powerful tools that can work together to create flexible, responsive web designs. By understanding their strengths and appropriate use cases, you can build sophisticated and adaptable layouts that enhance user experience across all devices.