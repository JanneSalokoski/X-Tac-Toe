# X-Tac-Toe

## What is X-Tac-Toe?

X-Tac-Toe is an implementation of X-only Tic-Tac-Toe researched by Thane E. Plambeck and Greg Whitehead in their paper [The Secrets of Notakto: Winning at X-only Tic-Tac-Toe](http://arxiv.org/pdf/1301.1672v1.pdf). X-Tac-Toe is therefore not another implementation of [Notakto](http://www.counterwavegames.com/notakto/index.html) but rather a game based on the same idea. The core game should be the same while the experience might differ drastically.

## Why play X-Tac-Toe?

1) X-Tac-Toe is an open source game, meaning that anyone can view and edit the [source code](https://github.com/jenn4/X-Tac-Toe) of the game. This makes it easy for the code to be reviewed by other players, so you will know the game isn't, for example, stealing your information or using your device as a part of a botnet.

2) The browser based implementation of X-Tac-Toe relying purely on html, css and javascript allow the game to run on virtually any computer, mobile phone or tablet with a web browser.

## Documentation

The following explains how different parts of X-Tac-Toe work and why has that behavior been chosen.

### engine.js

Engine.js is the engine of the game. It implements the classes Game, Board, Row and Square. In unison these classes provide the user interface with the grids to play on, the pens to write and a judge to oversee the rules of the game. Each of these parts will now be described in detail.

#### Square

##### usage:

```javascript
new Square(x_position, y_position);
```

##### description:

Square is a class implementing a square of an X-Tac-Toe grid. A Square knows its position, what value does it have and who set it.

##### methods and functions:

```javascript
Square.getPosition([axis]);
```

Returns Square's position on the `axis` defined. `Axis` can be either `"x"` or `"y"`.

If called without arguments, returns an object containing `x` and `y` positions.

Is a **global** function of Square.

```javascript
setPosition(value, [axis]);
```

Sets Squares local position object into given `value`.

Value can be anything, but it will be parsed into an integer. `Axis` can be either `"x"` or `"y"`, or omitted all together.

If called without an axis, will assume that `value` is an object with `x` and `y` items. If that fails, will parse `value` as a list: `value[0]` to `x` and `value[1]` to `y`.

Is a **local** function of Square. Is run when a new Square is created.

```javascript
initializePosition();
```

Populates Square's local `position` object with the position given for the Square at creation.

Takes no arguments.

Is a **local** function of Square. Is run when a new Square is created.

```javascript
getState([item]);
```

Returns the state of `item` from the local state object. Item can be either `user` or `value`, or it can be omitted all together.

If called with no arguments, returns an object containing values of `user` and `value`.

Is a **local** function of Square. Is used by `getValue()` and `getUser()` internally.

```javascript
setState(value, [item]);
```

Sets Square's local `state` object according to given `item` and `value`.

`Item` should be either "value" or "user". `Value` should be a string when setting `user` and an integer when setting `value`.

if called without `item`, assumes `value` to be either an object containing `"user"` `"value"` or a list with `user` on `value[0]` and `value` on `value[1]`.

Is a **local** function of Square. Is used by `setValue()` and `setUser()` internally.

```javascript
Square.getUser();
```

Returns Square's `user` from local `status` object.

Takes no arguments.

Is a **global** function of Square.

```javascript
Square.getValue();
```

Returns Square's `value` from local `status` object.

Takes no arguments.

Is a **global** function of Square.

```javascript
Square.setUser(user);
```

Sets Square's `user` in local `status` object accordingly to the `user` given.

`User` can be anything, but will be converted into a string.

Is a **global** function of Square.

```javascript
Square.setValue(value);
```

Sets Square's `value` in local `status` object accordingly to the `value` given.

`Value` can be anything, but will be converted into an integer.

Is a **global** function of Square.

```javascript
initialize();
```

Populates various objects and variables to be used later in the program.

Takes no arguments.

Is a **local** function of Square. Is run when a new Square is created.

### ui.js
