import React, {Component} from 'react'; 

/** Class which holds all the default colors which may be used in this project. */
class Color extends Component {
    constructor(props) {
        super(props);

        // Default background color for every screen
        this.backgroundColor = 'white';
    }

    /** Getter for the background color.
     * @return = this.backgroundColor
     */
    getBackgroundColor = () => {
        return this.backgroundColor;
    }
}

const Colors = new Color();
export default Colors;