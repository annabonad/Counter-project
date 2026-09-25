# Counter Project

A simple web application for increasing and decreasing a counter. The project is built with plain HTML, CSS, and JavaScript, without frameworks, external libraries, or build tools.

LIVE SITE:  https://annabonad.github.io/Counter-project/

## Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Project structure](#project-structure)
- [How it works](#how-it-works)
- [Accessibility and responsive design](#accessibility-and-responsive-design)

## Overview

When the page loads, the interface is generated dynamically with JavaScript. The counter starts at `0` if no previous value has been saved; otherwise, it restores the value from the browser's `localStorage`.

Users can change the value with the `+` and `−` buttons or with keyboard shortcuts. The interface uses a minimal, contemporary design with small interactions that provide clear feedback after every change.

## Features

- Displays the current counter value.
- Increases the value with the `+` button.
- Decreases the value with the `−` button.
- Supports the `+` key for increasing the value.
- Supports the `-` key for decreasing the value.
- Allows negative values.
- Saves the current value to `localStorage` after every change.
- Restores the saved value when the page is reopened.
- Animates the value after every update.
- Changes the value color when it becomes negative.
- Provides hover, active, and focus-visible states for the buttons.
- Includes an interface entrance animation.
- Automatically reduces animations when the user prefers reduced motion.
- Provides a responsive layout for desktop and mobile devices.

## Technologies

- **HTML5** for the page structure.
- **CSS3** for layout, responsive design, colors, animations, and interactions.
- **JavaScript ES6+** for dynamic interface generation and event handling.
- No external dependencies.

## Project structure

```text
Counter-project/
├── index.html   # HTML page and application entry point
├── script.js    # DOM generation and counter logic
├── style.css    # Styles, responsive layout, and interactions
└── README.md    # Project documentation
```

## How it works

### Interface generation

The `index.html` file contains only the main `#app` container. Visible elements, including the title, value, buttons, and hint, are created in `script.js` with `document.createElement()` and added to the DOM with `append()`.

### Loading and saving the value

At startup, the script reads the `counterValue` item from `localStorage`. Since `localStorage` stores values as strings, the saved value is converted to an integer with `parseInt(savedCounterValue, 10)`. If no value exists, `getItem()` returns `null` and the counter starts at `0`.

### Updating the value

The `counterValue` variable stores the current value. The `updateCounter(change)` function:

1. changes the numeric value;
2. saves it to `localStorage`;
3. updates the `output` element's text;
4. restarts the value animation;
5. applies or removes the visual state for negative values.

The buttons use `addEventListener('click', ...)`, while keyboard input is handled with a global `keydown` listener.

## Accessibility and responsive design

- The buttons have accessible labels through `aria-label`.
- The value is exposed through the semantic `output` element.
- The `output` element uses `aria-live="polite"` so screen readers announce value changes without interrupting the user.
- The main container is not a live region, preventing duplicate or overly broad announcements.
- The buttons have a visible focus indicator for keyboard users.
- The layout adapts to screen size through CSS media queries.
- The `prefers-reduced-motion` rule limits animations for users who request reduced motion in their operating system settings.


