Square = function(x_position, y_position)
{   // Position is local because it shouldn't be tampered with manually
    var position = {};

    // You can only _get_ the position of a Square from the outside
    this.getPosition = function (pos)
    {   // Check if we have a pos given to us
        if (typeof pos == "undefined")
        {
            return position; // Return the whole object
        }
        else
        {   // Otherwise return position[pos]
            return position[pos.toLowerCase()];
        }
    }

    // Setting position is only done at the initialization stage, so local
    var setPosition = function (value, pos)
    {
        if (typeof pos == "undefined" && typeof value == "object")
        {   // Check if pos is an object. If so, set position accordingly
            position.x = value.x || value[0];
            position.y = value.y || value[1];
        }
        else
        {   // Otherwise set whichever pos to whatever was given to us
            position[pos.toLowerCase()] = parseInt(value);
        }
    }

    var initializePosition = function ()
    {
        if (typeof x_position == "number" && typeof y_position == "number")
        {
            setPosition({"x": parseInt(x_position), "y": parseInt(y_position)});
        }
    }

    // We want to initialize the Square when it is created.
    var initialize = function ()
    {
        initializePosition();
    }

    initialize();
};
