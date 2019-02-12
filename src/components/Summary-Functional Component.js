// Validating props with stateless functional components

import React from 'react'
import PropTypes from 'prop-types'

const Summary = ({ ingredients, steps, title }) => {
    return (
        <div>
            <h1>Using Functions</h1>
            <h2>{title}</h2>
            <p>{ingredients} Ingredients | {steps} Steps</p>
        </div>
    )
}

Summary.propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    // Custom prop validation is implemented with help of functions
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            // Creates an error object which is thrown at run time
            new Error("A title must be a string") :
            (props[propName].length > 20) ?
                new Error("Title is over 20 characters") : null

}

Summary.defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[recipe]"
}

export default Summary