Square = function(x_position, y_position)
{   // Position is local because it shouldn't be tampered with manually
    var position = {};
    var state = {"user": "Janne", "value": "x"};

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
            position.x = parseInt(value.x) || parseInt(value[0]);
            position.y = parseInt(value.y) || parseInt(value[1]);
        }
        else
        {   // Otherwise set whichever pos to whatever was given to us
            position[pos.toLowerCase()] = parseInt(value);
        }
    }

    // initialization should obviously be executed only locally
    var initializePosition = function ()
    {
        if (typeof x_position == "number" && typeof y_position == "number")
        {
            setPosition({"x": parseInt(x_position), "y": parseInt(y_position)});
        }
    }

    // No one global needs to see the whole state, right?
    var getState = function (item)
    {   // Check if we have got an item
        if (typeof item == "undefined")
        {
            return state; // If not we return the whole state
        }
        else if (item.toLowerCase() == "user" || item.toLowerCase() == "value")
        {   // Otherwise return either user or value, however the user wants
            return state[item.toLowerCase()];
        }
    }

    var setState = function (value, item)
    {
        if (typeof item == "undefined" && typeof value == "object")
        {   // If value is an object, set
            state.user = value.user || value[0];
            state.value = value.value || value[1];
        }
        else
        {
            state[item.toLowerCase()] = value.toLowerCase();
        }
    }

    // Get user and value are dummy functions for getState
    this.getUser = function ()
    {
        return getState("user")
    }

    this.getValue = function ()
    {
        return getState("value")
    }

    this.setUser = function (user)
    {   // If we have a user, set status.user = user
        if (typeof user != "undefined") {state.user = user.toString();}
    }

    this.setValue = function (value)
    {   // If we have a value, set status.value = value
        if (typeof value != "undefined") {state.value = parseInt(value);}
    }

    // We want to initialize the Square when it is created.
    var initialize = function ()
    {
        initializePosition();
    }

    initialize();
};
