import React from 'react'

export default function Slider({min, max, }) {
    return (
        <div className="slider-container">
            <input type="range" className="slider"/>
        </div>
    )
}
