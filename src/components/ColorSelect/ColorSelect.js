import React, { useState } from 'react';
import { ChromePicker } from 'react-color'

import './ColorSelect.css';


const ColorSelect = props => {

    const [color, setColor] = useState('#2979FF');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [colorButtonText, setColorButtonText] = useState('Change Message Color');

    const onColorSelectClick = (ev) => {
        ev.preventDefault();
        setShowColorPicker(!showColorPicker);
        if(!showColorPicker) setColorButtonText('Save');
        else setColorButtonText('Change Message Color');
        props.onColorSelectClick(color);
    }

    return (
        <div>
            <button 
            className="colorButton" 
            onClick={onColorSelectClick}
            style={{ backgroundColor: color}}>
                {colorButtonText}
                </button>
            { showColorPicker && <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} /> }
        </div>
    );
}

export default ColorSelect;