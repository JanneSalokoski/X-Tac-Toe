var Square = function(x_position, y_position)
{   // Position is local because it shouldn't be tampered with manually
    var position = {"x": x_position, "y": y_position};

    // You can only _get_ the position of a Square from the outside
    this.getPosition = function (pos)
    {
        if (pos.toLowerCase() == "x")
        {
            return position["x"];
        }
        else if (pos.toLowerCase() == "y")
        {
            return position["y"];
        }
        else
        {
            return position;
        }
    }

    // Setting position is only done at the initialization stage, so local
    var setPosition = function (pos, value)
    {
        if (pos.toLowerCase() == "x" || pos.toLowerCase() == "y")
        {
            position[pos.toLowerCase()] = parseInt(value);
        }
    }

    var initialize = function()
    {
        setPosition("x", x_position);
        setPosition("y", y_position);
    }

    // We want to initialize the Square when it is created.
    initialize();
};
